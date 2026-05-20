import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { type ExtractResult, type SitePage, type SiteAsset, type SiteLink, type ApiEndpoint, type InlineScript, useProxyFetch } from "@workspace/api-client-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  ArrowLeft, ExternalLink, FileText, Image as ImageIcon, Link as LinkIcon,
  Code, Server, Info, Search, Globe, Loader2, Eye, Copy, CheckCheck,
  Calculator, Zap, FileCode2, Download,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

function CopyBtn({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="flex items-center gap-1.5 px-2 py-1 rounded text-xs bg-muted/60 hover:bg-muted border border-border transition-colors"
    >
      {copied ? <><CheckCheck className="w-3 h-3 text-green-500" />{label ? "Copiado!" : ""}</> : <><Copy className="w-3 h-3" />{label}</>}
    </button>
  );
}

function ProxyFetchPreview({ url, open, onOpenChange }: { url: string | null; open: boolean; onOpenChange: (o: boolean) => void }) {
  const { data, isLoading, error } = useProxyFetch(
    { url: url || "", type: "text" },
    { query: { enabled: !!url && open, queryKey: ["proxy", url] } }
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-sm">
            <Eye className="w-4 h-4" /> Código-Fonte
          </DialogTitle>
          <DialogDescription className="truncate font-mono text-xs">{url}</DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-end gap-2 -mt-2">
          {data?.content && <CopyBtn text={data.content} label="Copiar tudo" />}
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm" className="text-xs h-7"><ExternalLink className="w-3 h-3 mr-1" /> Abrir original</Button>
            </a>
          )}
        </div>
        <div className="flex-1 overflow-hidden rounded-md border bg-muted/30 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          )}
          {error && <div className="p-4 text-sm text-destructive">Não foi possível buscar o conteúdo.</div>}
          {data && (
            <ScrollArea className="h-full">
              <pre className="p-4 text-xs font-mono whitespace-pre-wrap break-words">{data.content}</pre>
            </ScrollArea>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ScriptModal({ script, open, onOpenChange }: {
  script: { index: number; fullContent: string; size: number } | null;
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  if (!script) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-sm">
            <Code className="w-4 h-4 text-yellow-400" /> Script Inline #{script.index + 1}
          </DialogTitle>
          <DialogDescription>{script.size.toLocaleString()} caracteres</DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-end -mt-2">
          <CopyBtn text={script.fullContent} label="Copiar código" />
        </div>
        <div className="flex-1 overflow-hidden rounded-md border bg-[#0d1117] relative">
          <ScrollArea className="h-full">
            <pre className="p-4 text-xs font-mono whitespace-pre-wrap break-words text-green-300">{script.fullContent}</pre>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Result() {
  const [, setLocation] = useLocation();
  const [result] = useLocalStorage<ExtractResult | null>("extractor-last-result", null);
  const [assetFilter, setAssetFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedScript, setSelectedScript] = useState<{ index: number; fullContent: string; size: number } | null>(null);

  useEffect(() => {
    if (!result) setLocation("/");
  }, [result, setLocation]);

  if (!result) return null;

  const { rootUrl, crawledAt, pages, assets, links, meta, apiEndpoints, techStack, inlineScripts = [], rawHtml = "" } = result;

  const assetTypes = Array.from(new Set(assets.map((a: SiteAsset) => a.type)));
  const filteredAssets = assets.filter((asset: SiteAsset) =>
    (assetFilter === "all" || asset.type === assetFilter) &&
    asset.url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const calculoScripts = inlineScripts.filter((s: InlineScript) => s.hasCalculo || s.hasFormula);
  const ajaxScripts = inlineScripts.filter((s: InlineScript) => s.hasAjax && !s.hasCalculo && !s.hasFormula);
  const otherScripts = inlineScripts.filter((s: InlineScript) => !s.hasCalculo && !s.hasFormula && !s.hasAjax);

  const formatBytes = (bytes: number | null | undefined) => {
    if (bytes == null) return "?";
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  const downloadAllScripts = () => {
    const content = inlineScripts.map((s: InlineScript, i: number) =>
      `/* ═══════════════════════════════════════════════\n   SCRIPT #${i + 1} — ${s.size} chars\n   Cálculo: ${s.hasCalculo ? "SIM" : "não"} | Fórmula: ${s.hasFormula ? "SIM" : "não"} | AJAX: ${s.hasAjax ? "SIM" : "não"}\n═══════════════════════════════════════════════ */\n\n${s.fullContent}`
    ).join("\n\n\n");
    const blob = new Blob([content], { type: "text/javascript" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `scripts-${new URL(rootUrl).hostname}.js`;
    a.click();
  };

  const downloadRawHtml = () => {
    const blob = new Blob([rawHtml], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `pagina-${new URL(rootUrl).hostname}.html`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto max-w-7xl h-14 flex items-center justify-between px-4 gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Button variant="ghost" size="icon" asChild className="shrink-0 text-muted-foreground hover:text-foreground">
              <Link href="/"><ArrowLeft className="w-4 h-4" /></Link>
            </Button>
            <div className="min-w-0">
              <h1 className="font-semibold text-sm flex items-center gap-1.5 truncate">
                <Globe className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="truncate">{rootUrl}</span>
              </h1>
              <p className="text-xs text-muted-foreground font-mono hidden sm:block">
                Extraído em {new Date(crawledAt).toLocaleString("pt-BR")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden sm:flex gap-1.5 flex-wrap">
              {techStack.slice(0, 4).map((tech: string) => (
                <Badge key={tech} variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs">
                  {tech}
                </Badge>
              ))}
              {techStack.length > 4 && (
                <Badge variant="outline" className="text-muted-foreground border-border text-xs">+{techStack.length - 4}</Badge>
              )}
            </div>
            <Button variant="outline" size="sm" onClick={downloadRawHtml} className="text-xs h-7 hidden sm:flex">
              <Download className="w-3 h-3 mr-1" /> HTML
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto max-w-7xl p-4 py-6">
        <Tabs defaultValue={calculoScripts.length > 0 ? "scripts" : "overview"} className="w-full">
          <TabsList className="bg-muted/50 p-1 rounded-md mb-6 inline-flex flex-wrap h-auto gap-0.5">
            <TabsTrigger value="scripts" className="data-[state=active]:bg-card py-2 px-3 text-sm relative">
              <Calculator className="w-4 h-4 mr-1.5" /> Scripts de Cálculo
              {calculoScripts.length > 0 && (
                <span className="ml-1.5 bg-yellow-500 text-yellow-900 text-[10px] font-bold px-1.5 py-0.5 rounded-full">{calculoScripts.length}</span>
              )}
            </TabsTrigger>
            <TabsTrigger value="overview" className="data-[state=active]:bg-card py-2 px-3 text-sm">
              <Info className="w-4 h-4 mr-1.5" /> Visão Geral
            </TabsTrigger>
            <TabsTrigger value="pages" className="data-[state=active]:bg-card py-2 px-3 text-sm">
              <FileText className="w-4 h-4 mr-1.5" /> Páginas ({pages.length})
            </TabsTrigger>
            <TabsTrigger value="assets" className="data-[state=active]:bg-card py-2 px-3 text-sm">
              <ImageIcon className="w-4 h-4 mr-1.5" /> Arquivos ({assets.length})
            </TabsTrigger>
            <TabsTrigger value="api" className="data-[state=active]:bg-card py-2 px-3 text-sm">
              <Server className="w-4 h-4 mr-1.5" /> Rotas ({apiEndpoints.length})
            </TabsTrigger>
            <TabsTrigger value="links" className="data-[state=active]:bg-card py-2 px-3 text-sm">
              <LinkIcon className="w-4 h-4 mr-1.5" /> Links ({links.length})
            </TabsTrigger>
          </TabsList>

          {/* ─── ABA: SCRIPTS DE CÁLCULO ─────────────────────────────── */}
          <TabsContent value="scripts" className="space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold">Scripts JavaScript Encontrados</h2>
                <p className="text-sm text-muted-foreground">
                  {inlineScripts.length} scripts inline — {calculoScripts.length} com lógica de cálculo/fórmula
                </p>
              </div>
              {inlineScripts.length > 0 && (
                <Button variant="outline" size="sm" onClick={downloadAllScripts} className="text-xs">
                  <Download className="w-3 h-3 mr-1.5" /> Baixar todos (.js)
                </Button>
              )}
            </div>

            {inlineScripts.length === 0 ? (
              <div className="text-center p-12 border border-dashed rounded-lg text-muted-foreground bg-card/50">
                <Code className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p className="font-medium mb-1">Nenhum script inline encontrado</p>
                <p className="text-sm">Este site pode carregar os cálculos via arquivo .js externo — veja a aba "Arquivos" e clique em "Ver código" nos scripts.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {calculoScripts.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-yellow-400 flex items-center gap-2 mb-3">
                      <Calculator className="w-4 h-4" /> Scripts com Lógica de Cálculo / Fórmulas
                    </h3>
                    <div className="space-y-3">
                      {calculoScripts.map((s: InlineScript) => (
                        <Card key={s.index} className="border-yellow-500/30 bg-yellow-500/5">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <div className="flex flex-wrap gap-1.5">
                                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-[10px]">Script #{s.index + 1}</Badge>
                                {s.hasCalculo && <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-[10px]">⚖️ Cálculo Jurídico</Badge>}
                                {s.hasFormula && <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-[10px]">📐 Fórmula Matemática</Badge>}
                                {s.hasAjax && <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-[10px]">🌐 Busca na API</Badge>}
                                <Badge variant="outline" className="text-muted-foreground text-[10px]">{(s.size / 1024).toFixed(1)} KB</Badge>
                              </div>
                              <div className="flex gap-2 shrink-0">
                                <CopyBtn text={s.fullContent} label="Copiar" />
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-xs h-7"
                                  onClick={() => setSelectedScript(s)}
                                >
                                  <Eye className="w-3 h-3 mr-1" /> Ver código
                                </Button>
                              </div>
                            </div>
                            <pre className="text-[11px] font-mono text-muted-foreground bg-muted/40 rounded p-3 overflow-x-auto whitespace-pre-wrap line-clamp-6 leading-relaxed">
                              {s.preview}
                              {s.fullContent.length > 300 && "\n..."}
                            </pre>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {ajaxScripts.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-green-400 flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4" /> Scripts com Chamadas à API (fetch/ajax)
                    </h3>
                    <div className="space-y-3">
                      {ajaxScripts.map((s: InlineScript) => (
                        <Card key={s.index} className="border-green-500/20">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <div className="flex gap-1.5">
                                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-[10px]">Script #{s.index + 1}</Badge>
                                <Badge variant="outline" className="text-muted-foreground text-[10px]">{(s.size / 1024).toFixed(1)} KB</Badge>
                              </div>
                              <div className="flex gap-2">
                                <CopyBtn text={s.fullContent} label="Copiar" />
                                <Button variant="outline" size="sm" className="text-xs h-7" onClick={() => setSelectedScript(s)}>
                                  <Eye className="w-3 h-3 mr-1" /> Ver
                                </Button>
                              </div>
                            </div>
                            <pre className="text-[11px] font-mono text-muted-foreground bg-muted/40 rounded p-3 overflow-x-auto whitespace-pre-wrap line-clamp-4">
                              {s.preview}{s.fullContent.length > 300 && "\n..."}
                            </pre>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {otherScripts.length > 0 && (
                  <details className="group">
                    <summary className="cursor-pointer text-sm text-muted-foreground font-medium flex items-center gap-2 select-none hover:text-foreground transition-colors mb-3">
                      <FileCode2 className="w-4 h-4" />
                      Outros scripts ({otherScripts.length}) — configuração, analytics, etc.
                    </summary>
                    <div className="space-y-2 mt-3">
                      {otherScripts.map((s: InlineScript) => (
                        <Card key={s.index} className="opacity-70">
                          <CardContent className="p-3 flex items-center justify-between gap-3">
                            <div className="flex gap-1.5 items-center">
                              <Badge variant="outline" className="text-[10px]">#{s.index + 1}</Badge>
                              <span className="text-xs text-muted-foreground font-mono truncate max-w-xs">{s.preview.slice(0, 80)}...</span>
                            </div>
                            <div className="flex gap-2 shrink-0">
                              <CopyBtn text={s.fullContent} />
                              <Button variant="ghost" size="sm" className="text-xs h-7" onClick={() => setSelectedScript(s)}>
                                <Eye className="w-3 h-3" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            )}

            {/* Scripts JS externos — para ver o código de cada um */}
            {assets.filter((a: SiteAsset) => a.type === "script").length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-blue-400 flex items-center gap-2 mb-3">
                  <ExternalLink className="w-4 h-4" /> Arquivos JavaScript Externos (carregados pelo site)
                </h3>
                <div className="rounded-md border border-border bg-card overflow-hidden">
                  <div className="divide-y divide-border">
                    {assets.filter((a: SiteAsset) => a.type === "script").map((asset: SiteAsset, i: number) => (
                      <div key={i} className="p-3 flex items-center justify-between gap-3 hover:bg-muted/20">
                        <span className="text-xs font-mono text-muted-foreground truncate flex-1">{asset.url.split("/").pop() || asset.url}</span>
                        <div className="flex gap-2 shrink-0">
                          <Button variant="outline" size="sm" className="text-xs h-7" onClick={() => setPreviewUrl(asset.url)}>
                            <Eye className="w-3 h-3 mr-1" /> Ver código
                          </Button>
                          <a href={asset.url} target="_blank" rel="noreferrer">
                            <Button variant="ghost" size="sm" className="text-xs h-7">
                              <ExternalLink className="w-3 h-3" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </TabsContent>

          {/* ─── ABA: VISÃO GERAL ────────────────────────────────────── */}
          <TabsContent value="overview" className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Páginas", value: pages.length, icon: FileText },
                { label: "Arquivos", value: assets.length, icon: ImageIcon },
                { label: "Rotas/APIs", value: apiEndpoints.length, icon: Server },
                { label: "Scripts Cálculo", value: calculoScripts.length, icon: Calculator },
              ].map(({ label, value, icon: Icon }) => (
                <Card key={label}>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Icon className="w-8 h-8 text-primary/40 shrink-0" />
                    <div>
                      <p className="text-3xl font-mono font-bold">{value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Metadados do Site</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <div><dt className="text-muted-foreground text-xs mb-1">Título</dt><dd className="font-medium">{meta.title || "N/A"}</dd></div>
                  <div><dt className="text-muted-foreground text-xs mb-1">Descrição</dt><dd className="text-foreground/80 line-clamp-2 text-xs">{meta.description || "N/A"}</dd></div>
                  <div><dt className="text-muted-foreground text-xs mb-1">Gerador</dt><dd className="font-mono bg-muted inline-block px-2 py-0.5 rounded text-xs">{meta.generator || "N/A"}</dd></div>
                  <div><dt className="text-muted-foreground text-xs mb-1">Idioma</dt><dd className="font-mono bg-muted inline-block px-2 py-0.5 rounded text-xs">{meta.lang || "N/A"}</dd></div>
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Tecnologias Detectadas</CardTitle>
                <CardDescription className="text-xs">Com base nos headers, meta tags e variáveis globais.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {techStack.length === 0 && <span className="text-muted-foreground text-sm">Nenhuma tecnologia específica detectada.</span>}
                {techStack.map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1 font-mono">{tech}</Badge>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ─── ABA: PÁGINAS ───────────────────────────────────────── */}
          <TabsContent value="pages" className="space-y-3">
            {pages.map((page: SitePage, i: number) => (
              <Card key={`${page.url}-${i}`} className="hover:bg-muted/20 transition-colors">
                <CardContent className="p-4 flex items-start gap-4">
                  <div className={`shrink-0 w-12 h-8 rounded flex items-center justify-center font-mono text-xs font-bold ${page.statusCode < 400 ? "bg-green-500/10 text-green-500" : "bg-destructive/10 text-destructive"}`}>
                    {page.statusCode}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate text-sm">{page.title || "Sem título"}</h3>
                    <a href={page.url} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline truncate block">
                      {page.url}
                    </a>
                    {page.description && <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{page.description}</p>}
                  </div>
                  <Button variant="outline" size="sm" className="text-xs h-7 shrink-0" onClick={() => setPreviewUrl(page.url)}>
                    <Eye className="w-3 h-3 mr-1" /> Código-fonte
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* ─── ABA: ARQUIVOS ──────────────────────────────────────── */}
          <TabsContent value="assets" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="relative flex-1 min-w-52">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Filtrar por URL..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-card border-border h-8 text-sm"
                />
              </div>
              <div className="flex gap-1.5 overflow-x-auto flex-wrap">
                <Badge variant={assetFilter === "all" ? "default" : "outline"} className="cursor-pointer whitespace-nowrap" onClick={() => setAssetFilter("all")}>
                  Todos ({assets.length})
                </Badge>
                {assetTypes.map((type: string) => (
                  <Badge key={type} variant={assetFilter === type ? "default" : "outline"} className="cursor-pointer whitespace-nowrap capitalize" onClick={() => setAssetFilter(type)}>
                    {type === "script" ? "🔧 Scripts" : type === "stylesheet" ? "🎨 CSS" : type === "image" ? "🖼 Imagens" : type === "font" ? "🔤 Fontes" : type} ({assets.filter((a: SiteAsset) => a.type === type).length})
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-border overflow-hidden bg-card">
              <ScrollArea className="h-[500px]">
                <div className="divide-y divide-border">
                  {filteredAssets.length === 0 && (
                    <div className="p-8 text-center text-muted-foreground text-sm">Nenhum arquivo encontrado.</div>
                  )}
                  {filteredAssets.map((asset: SiteAsset, i: number) => (
                    <div key={`${asset.url}-${i}`} className="p-3 flex items-center justify-between hover:bg-muted/30 group gap-3">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <Badge variant="outline" className="w-16 justify-center shrink-0 text-[9px] uppercase tracking-wider">{asset.type}</Badge>
                        <span className="text-xs font-mono truncate text-foreground/70 group-hover:text-primary transition-colors">
                          {asset.url.split("/").pop() || asset.url}
                        </span>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        {asset.type === "script" && (
                          <Button variant="outline" size="sm" className="text-xs h-6" onClick={() => setPreviewUrl(asset.url)}>
                            <Eye className="w-3 h-3 mr-1" /> Ver código
                          </Button>
                        )}
                        <a href={asset.url} target="_blank" rel="noreferrer">
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0"><ExternalLink className="w-3 h-3" /></Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* ─── ABA: ROTAS / APIs ──────────────────────────────────── */}
          <TabsContent value="api" className="space-y-4">
            {apiEndpoints.length === 0 ? (
              <div className="text-center p-12 border border-dashed rounded-lg text-muted-foreground bg-card/50">
                <Server className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p className="font-medium mb-1">Nenhuma rota de API detectada explicitamente</p>
                <p className="text-sm">O site pode usar formulários HTML ou outros métodos sem fetch/ajax.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {apiEndpoints.map((endpoint: ApiEndpoint, i: number) => (
                  <Card key={`${endpoint.url}-${i}`}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`font-mono text-xs ${
                          endpoint.method === "GET" ? "bg-blue-500/20 text-blue-400" :
                          endpoint.method === "POST" ? "bg-green-500/20 text-green-400" :
                          "bg-orange-500/20 text-orange-400"
                        }`}>
                          {endpoint.method}
                        </Badge>
                        <span className="font-mono text-xs truncate text-foreground/80" title={endpoint.url}>
                          {endpoint.pattern || endpoint.url}
                        </span>
                      </div>
                      {endpoint.url !== endpoint.pattern && (
                        <p className="text-[10px] text-muted-foreground font-mono truncate">{endpoint.url}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* ─── ABA: LINKS ─────────────────────────────────────────── */}
          <TabsContent value="links" className="space-y-4">
            <div className="rounded-md border border-border bg-card overflow-hidden">
              <ScrollArea className="h-[500px]">
                <div className="divide-y divide-border">
                  {links.map((link: SiteLink, i: number) => (
                    <div key={`${link.url}-${i}`} className="p-3 flex items-center justify-between hover:bg-muted/20 gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-xs truncate">{link.text || <span className="italic text-muted-foreground">sem texto</span>}</p>
                        <a href={link.url} target="_blank" rel="noreferrer" className="text-[10px] font-mono text-muted-foreground hover:text-primary truncate block">
                          {link.url}
                        </a>
                      </div>
                      <Badge variant={link.isExternal ? "secondary" : "outline"} className="shrink-0 text-[9px] uppercase">
                        {link.isExternal ? <>Externo <ExternalLink className="w-2.5 h-2.5 ml-0.5" /></> : "Interno"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <ProxyFetchPreview url={previewUrl} open={previewUrl !== null} onOpenChange={(open) => { if (!open) setPreviewUrl(null); }} />
      <ScriptModal script={selectedScript} open={selectedScript !== null} onOpenChange={(open) => { if (!open) setSelectedScript(null); }} />
    </div>
  );
}

import { useState } from "react";
import { useLocation } from "wouter";
import { Search, History, Globe, Loader2, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useExtractSite } from "@workspace/api-client-react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SITES_RAPIDOS = [
  { label: "Cálculo Jurídico", url: "https://www.calculojuridico.com.br" },
  { label: "JusBrasil Calculadora", url: "https://www.jusbrasil.com.br/calculadoras" },
  { label: "Previdenciário.com", url: "https://previdenciario.com.br" },
  { label: "INSS Digital", url: "https://meu.inss.gov.br" },
];

export default function Home() {
  const [url, setUrl] = useState("");
  const [depth, setDepth] = useState("1");
  const [, setLocation] = useLocation();
  const [recentExtractions, setRecentExtractions] = useLocalStorage<string[]>("extractor-history", []);
  const [, setLastResult] = useLocalStorage<any>("extractor-last-result", null);

  const extractSite = useExtractSite();

  const handleExtract = (targetUrl: string, targetDepth: number) => {
    if (!targetUrl) return;
    let formattedUrl = targetUrl;
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = `https://${formattedUrl}`;
    }
    extractSite.mutate(
      { data: { url: formattedUrl, depth: targetDepth } },
      {
        onSuccess: (data) => {
          setRecentExtractions((prev) => {
            const filtered = prev.filter(u => u !== formattedUrl);
            return [formattedUrl, ...filtered].slice(0, 10);
          });
          setLastResult(data);
          setLocation("/result");
        }
      }
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleExtract(url, parseInt(depth, 10));
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="w-full max-w-2xl relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 text-primary mb-5 ring-1 ring-primary/20">
            <Code2 className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-3 text-foreground">
            Extrator de Sites
          </h1>
          <p className="text-base text-muted-foreground">
            Cole o link de qualquer site jurídico. Extraio rotas, scripts de cálculo, APIs e toda a estrutura.
          </p>
        </div>

        <form onSubmit={onSubmit} className="bg-card border border-border rounded-lg p-2 shadow-2xl flex items-center gap-2 focus-within:ring-1 focus-within:ring-primary/50 transition-all mb-4">
          <div className="relative flex-1">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="calculojuridico.com.br ou cole link completo"
              className="w-full pl-10 border-0 bg-transparent text-base focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
              disabled={extractSite.isPending}
            />
          </div>

          <div className="h-8 w-px bg-border mx-1" />

          <Select value={depth} onValueChange={setDepth} disabled={extractSite.isPending}>
            <SelectTrigger className="w-28 border-0 bg-transparent focus:ring-0 text-sm">
              <SelectValue placeholder="Profundidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Só esta página</SelectItem>
              <SelectItem value="2">+ subpáginas</SelectItem>
              <SelectItem value="3">Rastrear tudo</SelectItem>
            </SelectContent>
          </Select>

          <Button
            type="submit"
            size="lg"
            disabled={!url || extractSite.isPending}
            className="font-semibold shrink-0"
          >
            {extractSite.isPending
              ? <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Extraindo...</>
              : <><Search className="w-4 h-4 mr-2" /> Extrair</>
            }
          </Button>
        </form>

        {extractSite.isError && (
          <div className="mb-4 px-4 py-3 rounded-lg bg-destructive/10 border border-destructive/30 text-sm text-destructive">
            ⚠️ {(extractSite.error as any)?.message ?? "Não foi possível acessar este site. Tente outro link."}
          </div>
        )}

        <div className="mb-8">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 font-medium">Sites Jurídicos Sugeridos</p>
          <div className="flex flex-wrap gap-2">
            {SITES_RAPIDOS.map((s) => (
              <button
                key={s.url}
                onClick={() => { setUrl(s.url); handleExtract(s.url, parseInt(depth, 10)); }}
                disabled={extractSite.isPending}
                className="px-3 py-1.5 rounded-md bg-primary/5 border border-primary/20 text-sm text-primary hover:bg-primary/10 transition-colors disabled:opacity-40 font-medium"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {recentExtractions.length > 0 && (
          <div>
            <h3 className="flex items-center text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              <History className="w-3.5 h-3.5 mr-1.5" /> Recentes
            </h3>
            <div className="flex flex-wrap gap-2">
              {recentExtractions.map((recentUrl, i) => (
                <button
                  key={`${recentUrl}-${i}`}
                  onClick={() => { setUrl(recentUrl); handleExtract(recentUrl, parseInt(depth, 10)); }}
                  disabled={extractSite.isPending}
                  className="px-3 py-1.5 rounded bg-muted/50 border border-border text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-50 font-mono truncate max-w-xs"
                >
                  {recentUrl.replace(/^https?:\/\//, "")}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { Send, Loader2, Trash2, ArrowLeft, Settings } from "lucide-react";
import { Link } from "wouter";
import { callAI, CAMPO_LIVRE_SYSTEM } from "@/lib/ai-service";
import { hasApiKey } from "@/lib/settings";
import { SettingsPanel } from "@/components/settings-panel";

interface Message {
  role: "user" | "assistant";
  content: string;
  ts: number;
}

export default function CampoLivre() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    if (!hasApiKey()) {
      setSettingsOpen(true);
      return;
    }

    const userMsg: Message = { role: "user", content: text, ts: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const history = [...messages, userMsg].map(m => ({ role: m.role, content: m.content }));
      const reply = await callAI(history as any, CAMPO_LIVRE_SYSTEM);
      setMessages(prev => [...prev, { role: "assistant", content: reply, ts: Date.now() }]);
    } catch (err: any) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: `❌ Erro: ${err.message || "Não foi possível obter resposta."}`,
        ts: Date.now(),
      }]);
    } finally {
      setLoading(false);
      setTimeout(() => textareaRef.current?.focus(), 100);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-card">
        <Link href="/">
          <button className="p-2 rounded-lg hover:bg-accent transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </button>
        </Link>
        <div className="flex-1">
          <h1 className="font-semibold text-foreground">Campo Livre</h1>
          <p className="text-xs text-muted-foreground">Chat livre com IA — sem filtros jurídicos</p>
        </div>
        <button
          onClick={() => setMessages([])}
          className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground"
          title="Limpar conversa"
        >
          <Trash2 className="w-4 h-4" />
        </button>
        <button
          onClick={() => setSettingsOpen(true)}
          className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground"
          title="Configurações"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground gap-3">
            <div className="text-5xl">💬</div>
            <p className="font-medium">Campo Livre</p>
            <p className="text-sm max-w-xs">Faça qualquer pergunta. Sem restrições de tema.</p>
            {!hasApiKey() && (
              <button
                onClick={() => setSettingsOpen(true)}
                className="mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90"
              >
                Configurar chave de API primeiro
              </button>
            )}
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap leading-relaxed ${
              msg.role === "user"
                ? "bg-primary text-primary-foreground rounded-br-sm"
                : "bg-muted text-foreground rounded-bl-sm border border-border"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-muted border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-2 text-muted-foreground text-sm">
              <Loader2 className="w-4 h-4 animate-spin" />
              Pensando...
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border bg-card px-4 py-3">
        <div className="flex gap-2 items-end">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Digite sua mensagem... (Enter para enviar)"
            rows={1}
            className="flex-1 resize-none rounded-xl border border-border bg-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[42px] max-h-32"
            style={{ height: "auto" }}
            onInput={(e) => {
              const t = e.target as HTMLTextAreaElement;
              t.style.height = "auto";
              t.style.height = Math.min(t.scrollHeight, 128) + "px";
            }}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className="p-2.5 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40 flex-shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
}

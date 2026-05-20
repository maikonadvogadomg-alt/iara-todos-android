import { QueryClient } from "@tanstack/react-query";
import { callAI, JURIDICO_SYSTEM } from "./ai-service";

// Intercepta chamadas de API localmente — sem servidor
async function handleLocal(method: string, url: string, data?: unknown): Promise<Response> {
  const body = data as Record<string, unknown> | undefined;

  // Qualquer rota de IA → chama OpenAI direto
  if (url.includes('/ai/') || url.includes('/api/ai')) {
    const messages = (body?.messages as Array<{ role: string; content: string }>) || [];
    const systemPrompt = (body?.systemPrompt as string) || JURIDICO_SYSTEM;
    const aiMessages = messages.map(m => ({
      role: m.role as 'system' | 'user' | 'assistant',
      content: m.content,
    }));
    const result = await callAI(aiMessages.length ? aiMessages : [{ role: 'user', content: body?.text as string || '' }], systemPrompt);
    return new Response(JSON.stringify({ result, content: result, text: result }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Configurações → lê/grava localStorage
  if (url.includes('/api/settings') || url.includes('/settings')) {
    if (method === 'GET') {
      const { getSettings } = await import('./settings');
      const s = getSettings();
      return new Response(JSON.stringify({
        aiApiKey: s.apiKey ? '***configurada***' : null,
        aiBaseUrl: s.baseUrl,
        aiModel: s.model,
      }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }
    const { saveSettings } = await import('./settings');
    const payload = body as Record<string, string>;
    saveSettings({ apiKey: payload.aiApiKey, baseUrl: payload.aiBaseUrl, model: payload.aiModel });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  // Auth check → sempre autenticado (sem servidor)
  if (url.includes('/auth/check') || url.includes('/auth/')) {
    return new Response(JSON.stringify({ authenticated: true, passwordRequired: false }), { status: 200 });
  }

  // Outras rotas → retorna resposta vazia válida
  return new Response(JSON.stringify({ ok: true, data: [], items: [], results: [] }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function apiRequest(method: string, url: string, data?: unknown): Promise<Response> {
  return handleLocal(method, url, data);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
      throwOnError: false,
    },
    mutations: {
      retry: false,
      throwOnError: false,
    },
  },
});

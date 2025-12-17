export async function onRequest(context) {
  const { request, env } = context;

  const url = new URL(request.url);
  const key = url.searchParams.get("key");

  if (!key) return new Response("Missing key", { status: 400 });

  // (Opcional) bloqueia listagem/crawler
  if (key.length < 32) return new Response("Invalid key", { status: 400 });

  if (request.method === "GET") {
    const value = await env.ORCAMENTO_KV.get(key);
    return new Response(value || "{}", {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  }

  if (request.method === "PUT") {
    const body = await request.text();
    try {
      JSON.parse(body);
    } catch {
      return new Response("Invalid JSON", { status: 400 });
    }

    // 1 ano
    await env.ORCAMENTO_KV.put(key, body, { expirationTtl: 60 * 60 * 24 * 365 });

    return new Response(JSON.stringify({ ok: true }), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  }

  return new Response("Method not allowed", { status: 405 });
}

// Proxy requests to Convex auth endpoints
async function handler(request: Request) {
  const url = new URL(request.url);
  const path = url.pathname.replace('/api/auth', '');
  
  const convexUrl = `${process.env.NEXT_PUBLIC_CONVEX_SITE_URL}/api/auth${path}${url.search}`;
  
  try {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.delete('host');
    requestHeaders.delete('content-length');
    requestHeaders.delete('accept-encoding');

    const response = await fetch(convexUrl, {
      method: request.method,
      headers: requestHeaders,
      body: request.method !== 'GET' && request.method !== 'HEAD' ? await request.text() : undefined,
    });
    
    const data = await response.text();
    const responseHeaders = new Headers();

    response.headers.forEach((value, key) => {
      if ([
        'content-encoding',
        'content-length',
        'transfer-encoding',
        'connection',
        'keep-alive',
      ].includes(key.toLowerCase())) {
        return;
      }

      responseHeaders.set(key, value);
    });

    const setCookie = response.headers.get('set-cookie');
    if (setCookie) {
      responseHeaders.set('set-cookie', setCookie);
    }
    
    return new Response(data, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return new Response(JSON.stringify({ error: 'Failed to proxy request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const OPTIONS = handler;

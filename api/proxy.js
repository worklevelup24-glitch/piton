export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  // Простой тест - всегда возвращаем успех
  return new Response(JSON.stringify({ 
    message: 'OpenAI Proxy is working!',
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}

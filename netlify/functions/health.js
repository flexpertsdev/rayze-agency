export default async (req, context) => {
  // Health check endpoint for monitoring
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'rayze-agency-api',
    version: '1.0.0',
    uptime: process.uptime(),
    environment: process.env.CONTEXT || 'development'
  };
  
  return new Response(JSON.stringify(health), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  });
};
import Fastify from 'fastify';

const server = Fastify({ logger: true });

server.get('/health', async () => ({ status: 'ok' }));

server.get('/api/hello', async () => ({ message: 'Hola desde Fastify + Docker!' }));

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server running on http://0.0.0.0:3000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();

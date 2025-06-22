export default {
  prefix: '/uv/',
  bare: 'wss://wisp.pro', 
  encodeUrl: true,
  handler: 'uv.handler.js',
  client: 'uv.client.js',
  sw: 'uv.sw.js',
};

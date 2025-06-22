importScripts('uv.bundle.js', 'uv.config.js', '/uv/uv.handler.js');

self.addEventListener('fetch', event => {
  if (event.request.url.includes(__uv.config.prefix)) {
    event.respondWith(__uv.handler(event.request));
  }
});

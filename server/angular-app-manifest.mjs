
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/nosotros"
  },
  {
    "renderMode": 2,
    "route": "/juego"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8572, hash: '8bb3c5e262af458f9b6e3e8da4e9ef625e68c8975a951956be4424b4bbad5d86', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1108, hash: 'a0c7446381f7a4b494c704ec0b8a85347c6f9e1818c56e4e2aba4c9fcbb90209', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 20446, hash: '250a2287b4f887ed732379ae9f122da372a79b0e035801a847449ac51a15c642', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'index.html': {size: 34273, hash: '9c9506a4c7f30977f5357b851942457e5226a863da78c0f724c39e0ab499d24c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'juego/index.html': {size: 28187, hash: '952b639305e6130e1eec05eb5762f710d7f8385a2f7f0a8a3df073e3c7ce0b7f', text: () => import('./assets-chunks/juego_index_html.mjs').then(m => m.default)},
    'styles-ZJGHR3A3.css': {size: 27468, hash: 'Znhv71HgqvE', text: () => import('./assets-chunks/styles-ZJGHR3A3_css.mjs').then(m => m.default)}
  },
};

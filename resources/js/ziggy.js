const Ziggy = {"url":"http:\/\/127.0.0.1:8000","port":8000,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"cache.clear":{"uri":"api\/cache-clear","methods":["POST"]},"setLocale":{"uri":"locale\/{locale}","methods":["GET","HEAD"],"wheres":{"locale":"[a-zA-Z]+"},"parameters":["locale"]},"home":{"uri":"\/","methods":["GET","HEAD"]},"about":{"uri":"about","methods":["GET","HEAD"]},"blog":{"uri":"blog","methods":["GET","HEAD"]},"work":{"uri":"work","methods":["GET","HEAD"]},"services":{"uri":"services","methods":["GET","HEAD"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };

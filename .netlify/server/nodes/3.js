import * as server from '../entries/pages/_slug_/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.f88e339a.js","_app/immutable/chunks/index.838feb98.js","_app/immutable/chunks/Header.69f3b1b5.js"];
export const stylesheets = ["_app/immutable/assets/Header.6b327e34.css"];
export const fonts = [];

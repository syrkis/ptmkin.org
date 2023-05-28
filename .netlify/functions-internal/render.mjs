import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["admin/config.yml","admin/index.html","admin/index.js","favicon.png","images/343584883_237799075608174_658295505068930556_n.png","images/344799529_251390427575189_1700000071216598912_n.jpg"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".js":"application/javascript",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.160e392f.js","app":"_app/immutable/entry/app.b8d52007.js","imports":["_app/immutable/entry/start.160e392f.js","_app/immutable/chunks/index.838feb98.js","_app/immutable/chunks/singletons.7d9d8271.js","_app/immutable/entry/app.b8d52007.js","_app/immutable/chunks/index.838feb98.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});

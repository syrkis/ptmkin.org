export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["admin/config.yml","admin/index.html","admin/index.js","favicon.png","images/343584883_237799075608174_658295505068930556_n.png","images/344799529_251390427575189_1700000071216598912_n.jpg"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".js":"application/javascript",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.3b1bddcf.js","app":"_app/immutable/entry/app.ca28bcd1.js","imports":["_app/immutable/entry/start.3b1bddcf.js","_app/immutable/chunks/index.838feb98.js","_app/immutable/chunks/singletons.6ad9e907.js","_app/immutable/entry/app.ca28bcd1.js","_app/immutable/chunks/index.838feb98.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
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
};

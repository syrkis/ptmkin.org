import type { PageServerLoad } from './$types';
import fs from 'fs';
import fm from 'front-matter';
import type { Post } from '$lib/types';


export const load: PageServerLoad = async ({ params }) => {
		const post = fm<Post>(fs.readFileSync(`src/lib/posts/${params.slug}.md`, 'utf-8'));

		console.log(`[info] processing markdown src/lib/posts/${params.slug}.md`);

			return {
				title: post.attributes.title,
				body: post.body,
			};
};
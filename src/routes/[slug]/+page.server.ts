import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import fs from 'fs';
import fm from 'front-matter';
import type { Post } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	try {
<<<<<<< HEAD
		const post = fm<Post>(fs.readFileSync(`src/lib/posts/${params.slug}.md`, 'utf-8'));
=======
		const post = fm<Demo>(fs.readFileSync(`src/lib/posts/${params.slug}.md`, 'utf-8'));
>>>>>>> 3e6323b44955fbecbfc70819a344411b6e576930

		console.log(`[info] processing markdown src/lib/posts/${params.slug}.md`);

		if (post) {
			return {
				title: post.attributes.title,
				body: post.body,
			};
		}
		throw error(500, 'something wrong with the markdown file');
	} catch {
		throw error(404, 'not found');
	}
};
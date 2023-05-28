import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import fs from 'fs';
import fm from 'front-matter';
import type { Post } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const post = fm<Post>(fs.readFileSync(`src/lib/posts/${params.slug}.md`, 'utf-8'));

		console.log(`[info] processing markdown src/lib/${params.slug}.md`);

		if (post) {
			return {
				title: post.attributes.title,
				body: post.body,
				date: post.attributes.date,
			};
		}
		throw error(500, 'something wrong with the markdown file');
	} catch {
		throw error(404, 'not found');
	}
};
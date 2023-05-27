import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import fs from 'fs';
import fm from 'front-matter';

interface Demo {
	title: string;
	description: string;
	image: string;
	draft: boolean;
	optional?: string;
}

export const load: PageServerLoad = async ({ params }) => {
	try {
		const post = fm<Demo>(fs.readFileSync(`src/lib/exhibitions/${params.slug}.md`, 'utf-8'));

		console.log(`[info] processing markdown src/lib/${params.slug}.md`);

		if (post) {
			return {
				title: post.attributes.title,
			};
		}
		throw error(500, 'something wrong with the markdown file');
	} catch {
		throw error(404, 'not found');
	}
};
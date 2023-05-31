import type { PageServerLoad } from './$types';
import fs from 'fs';
import fm from 'front-matter';
import path from 'path';
import type { Exhibition } from '$lib/types';

const postsDir = path.join(process.cwd(), 'src', 'lib', 'posts', 'exhibitions');

export const load: PageServerLoad = async ({ params }) => {
  const post = fm<Exhibition>(fs.readFileSync(path.join(postsDir, `${params.slug}.md`), 'utf-8'));

  console.log(`[info] processing markdown ${params.slug}.md`);

  return {
    title: post.attributes.title,
    artist: post.attributes.artist,
    description: post.attributes.description,
    start: post.attributes.start,
    end: post.attributes.end,
    body: post.body,
    thumbnail: post.attributes.thumbnail,
  };
};

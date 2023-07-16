import type { PageServerLoad } from "./$types";
import fs from "fs";
import fm from "front-matter";
import path from "path";
import type { Post } from "$lib/types";

const postsDir = path.join(process.cwd(), "src", "lib", "posts");

export const load: PageServerLoad = async () => {
  const posts = fs
    .readdirSync(postsDir)
    .map((file) => {
      const post = fm<Post>(
        fs.readFileSync(path.join(postsDir, file), "utf-8")
      );
      return {
        slug: file.replace(".md", ""),
        title: post.attributes.title,
        body: post.body,
        description: post.attributes.description,
        artist: post.attributes.artist,
        start: post.attributes.start,
        end: post.attributes.end,
        images: post.attributes.images,
        cover: post.attributes.cover,
      };
    }).sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());

  return {
    body: posts,
  };
};
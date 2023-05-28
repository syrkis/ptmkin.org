import { e as error } from "../../../chunks/index.js";
import fs from "fs";
import fm from "front-matter";
const load = async ({ params }) => {
  try {
    const post = fm(fs.readFileSync(`src/lib/posts/${params.slug}.md`, "utf-8"));
    console.log(`[info] processing markdown src/lib/posts/${params.slug}.md`);
    if (post) {
      return {
        title: post.attributes.title,
        body: post.body
      };
    }
    throw error(500, "something wrong with the markdown file");
  } catch {
    throw error(404, "not found");
  }
};
export {
  load
};

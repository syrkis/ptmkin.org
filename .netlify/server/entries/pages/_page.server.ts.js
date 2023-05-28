import "../../chunks/index.js";
import fs from "fs";
import fm from "front-matter";
const load = async () => {
  const posts = fs.readdirSync("src/lib/posts").map((file) => {
    const post = fm(fs.readFileSync(`src/lib/posts/${file}`, "utf-8"));
    return {
      slug: file.replace(".md", ""),
      title: post.attributes.title,
      body: post.body,
      date: post.attributes.date
    };
  });
  return {
    body: posts
  };
};
export {
  load
};

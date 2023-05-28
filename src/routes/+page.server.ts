import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import fs from "fs";
import fm from "front-matter";
import type { Post } from "$lib/types";



export const load: PageServerLoad = async () => {
        const files = fs.readdirSync("src/lib/posts/");
        const posts = files.map((file) => {
            const post = fm<Post>(fs.readFileSync(`src/lib/posts/${file}`, "utf-8"));
            return {
                slug: file.replace(".md", ""),
                name: file,
                title: post.attributes.title,
                body: post.body,
                date: post.attributes.date,
            };
        })
        return {
            body: posts,
        };
};
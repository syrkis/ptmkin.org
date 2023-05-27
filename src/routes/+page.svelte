<script context="module">
  import Header from '$lib/components/Header.svelte'
  import fs from 'fs';
  import path from 'path';
  import grayMatter from 'gray-matter';

  export async function load() {
    const postsDirectory = path.join(process.cwd(), 'src/lib/exhibitions');
    const filenames = fs.readdirSync(postsDirectory);
    const posts = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = grayMatter(fileContents);

      return {
        title: data.title,
        date: data.date,
      };
    });

    return {
      props: {
        posts,
      },
    };
  }

  let posts = load()


</script>


  <Header />
<slot></slot>
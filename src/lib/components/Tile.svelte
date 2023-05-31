<script lang="ts">
    import type { Post } from '$lib/types';
    export let item: Post; 
    import SvelteMarkdown from 'svelte-markdown';


    /* month, day and year*/ 
    let date = new Date(item.start);
    date = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

</script>


<div class="post">
    <a href="/{item.slug}">
        <h1>{item.title}</h1>
        <h2>{date}</h2>
        <SvelteMarkdown source={item.description} />
    </a>
</div>

<style>
    .post {
        margin: 10px;
    }

    .post a {
        text-decoration: none;
        color: inherit;
    }
</style>
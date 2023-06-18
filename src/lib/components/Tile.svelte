<script lang="ts">
    import type { Post } from '$lib/types';
    export let item: Post; 
    import SvelteMarkdown from 'svelte-markdown';


    /* month, day and year*/ 
    let start = new Date(item.start);
    start = start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

    let end = new Date(item.end);
    end = end.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

</script>


<div class="post">
    <a href="/{item.slug}">
        <img src={item.cover} alt={item.title} />
        <h1>{item.title}</h1>
        <span>{start} — {end}</span>
        <SvelteMarkdown source={item.description} />
    </a>
</div>

<style>

    h1 { font-family: sans-serif;}

    img {
        width: 100%;
        height: auto;
    }

    .post {
        margin: 10px;
    }

    .post a {
        text-decoration: none;
        color: inherit;
    }
</style>
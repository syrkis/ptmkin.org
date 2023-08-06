<script lang="ts">
    import type { Post } from '$lib/types';
    export let item: Post; 
    import SvelteMarkdown from 'svelte-markdown';
    import { onMount } from "svelte";
    import VanillaTilt from "vanilla-tilt";

    /* add tilt effect to post */
    onMount(() => {
        VanillaTilt.init(document.querySelectorAll(".post"), {
            max: 0.0001,
            speed: 7000,
            reverse: true,
            scale: 1.004
        });
    });

    /* month, day and year*/ 
    let start = new Date(item.start);
    start = start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

    let end = new Date(item.end);
    end = end.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

</script>


<div class="post">
    <a href="/{item.slug}">
        <img src={item.cover} alt={item.title} />
        <div class="title-date">
            <h2>{item.title}</h2>
            <span>{start} — {end}</span>
        </div>
        <SvelteMarkdown source={item.description} />
    </a>
</div>

<style>

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

    .title-date {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 768px) {
        .title-date {
            display: block;
            text-align: center;
        }
    }
</style>

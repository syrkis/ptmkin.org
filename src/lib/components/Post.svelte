<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';

    export let data;

    let start = new Date(data.start).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    let end = new Date(data.end).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
</script>


<div class="container">
    <div class="title-date">
        <h2>{data.title}</h2>
        <span>{start} — {end}</span>
    </div>
    <SvelteMarkdown source={data.body} />
</div>

<style>
    .title-date {
        text-align: center;
        line-height: 3rem;
        margin: 10rem 0;
    }

    h1 {
        font-family: sans-serif;
        text-align: center;
        margin-bottom: 0;
    }

    .container {
        background: white;
        text-align: justify;
        max-width: 800px;
        width:95%;
        margin: auto;
    }

    :global(img) {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 600px) {
        .title-date {
            line-height: 2rem;
            margin: 5rem 0;
        }
        .container {
            width: 95%;
        }
    }
</style>

<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';

    export let data;

    let date = new Date(data.start);
    data.date = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
</script>


<div class="container">
    <div class="title">
        <h1>{data.title}</h1>
    </div>
    <SvelteMarkdown source={data.body} />
</div>

<style>
    h1 { font-family: sans-serif;}
    h1, h2 {
        text-align: center;
        margin-bottom: 0;
    }
    .container {
        border: 50px solid white;
        background: white;
        text-align: justify;
        width:95%;
        max-width: 700px;
        margin: auto;
    }

    :global(img) {
        max-width: 100%;
        height: auto;
    }

</style>
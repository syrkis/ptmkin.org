<script lang="ts">
    import Header from '$lib/components/Header.svelte'
    import SvelteMarkdown from 'svelte-markdown';

    export let data;

    let date = new Date(data.date);
    data.date = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
</script>


<div class="container">
    <div class="title">
        <h1>{data.title}</h1>
        <h2>{data.date}, {data.author}</h2>
    </div>
    <SvelteMarkdown source={data.body} />
</div>

<style>
    h1, h2 {
        text-align: center;
        margin-bottom: 0;
    }
    .container {
        text-align: justify;
        padding-top: 250px;
        width:95%;
        max-width: 700px;
        margin: auto;
    }
</style>
<script lang="ts">
    import type { Post } from '$lib/types';
    export let item: Post; 
</script>


<div class="post">
    <a href="/{item.slug}">
        <h1>{item.title}</h1>
        <h2>{item.date}</h2>
        <p>{item.body}</p>
    </a>
</div>
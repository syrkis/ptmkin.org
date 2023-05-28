<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Post from '$lib/components/Post.svelte';

	import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<div class="container">
  <Header />
  <div class='posts'>
    {#each data.body as item}
      <div class='post'>
        <Post {item} />
      </div>
    {/each}
  </div>
</div>


<style>
  .posts {
    padding-top: 10rem;
    width: 900px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin:auto;
  }

  @media (max-width: 600px) {
    .posts {
      grid-template-columns: 1fr;
    }
  }
</style>
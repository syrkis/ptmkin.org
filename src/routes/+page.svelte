<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Tile from '$lib/components/Tile.svelte';

	import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<div class="container">
  <div class='posts'>
    {#each data.body as item}
      <div class='post'>
        <Tile {item} />
      </div>
    {/each}
  </div>
</div>


<style>
  .container {
    text-align: justify;
    width: 95%;
    max-width: 1100px;
    margin: auto;
  }
  .posts {
    padding-top: 10rem;
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
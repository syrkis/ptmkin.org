<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Tile from '$lib/components/Tile.svelte';

  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<div class="container">
  <div class='logo-container'>
    <h1 class='logo'>
      Potemkin<br/>Contemporary
    </h1>
  </div>
  <div class='posts'>
    {#each data.body as item}
      <div class='post'>
        <Tile {item} />
      </div>
    {/each}
  </div>
</div>


<style>
  .logo-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  
  .logo {
    font-size: 3rem;
    text-align: center;
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }

  .posts {
    display: grid;
    width: 90%;
    margin: auto;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin-top: 92vh;
    justify-items: center;
    z-index: 2;
    position: relative;
  }

  @media (max-width: 700px) {
    .posts {
      grid-template-columns: 1fr;
      width: 80%;
    }
  }
</style>

<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Tile from '$lib/components/Tile.svelte';

  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<div class="container">
  <div class="logo-container">
    <h1 class="logo">PTMK</h1>
    <div class='divider'>
      <hr />
    </div>
    <span>Potemkin Contemporary</span>
  </div>
  <div class="exhibitions">
    <div class="posts">
      {#each data.body as item}
        <div class="post">
          <Tile {item} />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    width: 100%;
    margin: 0 auto;
  }

  h1, .logo {
    letter-spacing: 0.07em;
    font-weight: 100;
    font-size: 3rem;
    text-align: center;
    margin: 0;
  }

  .logo-container {
    padding-top: 42vh;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 700px) {
    .logo-container {
      padding-top: 30vh;
    }
  }

  .exhibitions {
    position: relative;
    z-index: 2;
    margin-top: 40vh;
  }

  .posts {
    display: grid;
    width: 100%;
    margin: auto;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
    justify-items: center;
    z-index: 2;
    position: relative;
  }

  @media (max-width: 700px) {
    .posts {
      grid-template-columns: 1fr;
      width: 95%;
    }
    .logo {
      font-size: 2.5rem;
    }
    .exhibitions {
      margin-top: 30vh;
    }
  }
</style>

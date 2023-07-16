<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Tile from '$lib/components/Tile.svelte';

  import type { PageData } from './$types';
  
  export let data: PageData;
  let pastExhibitions = data.body.filter((item) => {
    return new Date(item.end) < new Date();
  });

  let notPastExhibitions = data.body.filter((item) => {
    return new Date(item.end) > new Date();
  });
</script>

<div class="container">
  <div class='logo-container'>
    <h1 class='logo'>
      Potemkin<br/>Contemporary
    </h1>
  </div>
  <div class='exhibitions'>

  <div class='posts'>
    {#each notPastExhibitions as item}
      <div class='post'>
        <Tile {item} />
      </div>
    {/each}
  </div>
  <div class='divider'>
    <hr/>
  </div>
  <h2>
    Past Exhibitions
  </h2>
  <div class='posts'>
    {#each pastExhibitions as item}
      <div class='post'>
        <Tile {item} />
      </div>
    {/each}
      </div>
  </div>
</div>


<style>

h2 {
    text-align: center;
    font-weight: 100;
    margin-bottom: 100px;
    font-size: 1.4rem;
}

:global(hr) {
        width: 100%;
        margin: 0 auto;
        border: 0.5px solid black;
    }

    :global(.divider) {
        width: 200px;
        margin: auto;
        padding: 100px 0 0 0;
        text-align: center;
        padding-bottom: 80px;
    }
  .logo-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
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
    width: 95%;
    margin: auto;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
    justify-items: center;
    z-index: 2;
    position: relative;
  }

  .exhibitions {
    position: relative;
    z-index: 2;
    margin-top: 92vh;
    
  }

  @media (max-width: 700px) {
    .posts {
      grid-template-columns: 1fr;
      width: 80%;
    }
  }
</style>

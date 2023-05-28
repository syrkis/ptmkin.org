<script lang="ts">
  import Header from '$lib/components/Header.svelte';

	import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<div class="container">
  <Header />
  {#each data.body as item}
    <p>{item.name}</p>
  {/each}
</div>

<script>
  import Header from '$lib/components/Header.svelte';
</script>


<div class="container">
  <Header />
  <slot></slot>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        letter-spacing: 0.05rem;
    }
    :global(p) {
      font-size: 1.2rem;
    }
</style>
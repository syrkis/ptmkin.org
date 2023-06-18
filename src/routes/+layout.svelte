<script>
  import Header from '$lib/components/Header.svelte';
</script>


<div>
  <Header />
  <div class="content">
    <slot></slot>
  </div>
</div>

<style>
  .content {
    padding: 18rem 0;
  }

    :global(body) {
        margin: 0;
        padding: 0;
        letter-spacing: 0.05rem;
    }
    :global(p) {
      font-size: 1.2rem;
    }
</style>
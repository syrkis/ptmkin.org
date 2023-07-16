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
    display: flex;
    justify-content: center;
    margin-left: 10vw; /* Set a fixed margin on the left side */
    margin-right: 10vw; /* Set a fixed margin on the right side */
  }

  :global(body) {
    margin: 0;
    padding: 0;
    letter-spacing: 0.05rem;
  }

  :global(p) {
    font-size: 1.2rem;
    line-height: 2rem;
  }
</style>

<script>
  import Header from '$lib/components/Header.svelte';
  let year = new Date().getFullYear();
</script>

<div>
  <Header />
  <div class="content">
    <slot></slot>
  </div>
  <!--copyright-->
  <div class="footer content">
    <p>
      © {year} Potemkin Contemporary
    </p>
  </div>
</div>

<style>

  .footer {
    padding: 10rem 0 1rem 0;
  }
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

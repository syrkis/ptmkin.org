<script>
  import Header from '$lib/components/Header.svelte';
  let year = new Date().getFullYear();
</script>

<div>
  <Header />
  <div class="content">
    <slot></slot>
  </div>
  <div class="footer">
    <p>
      Karkkolantie 140, 54260 Lappeenranta, Finland – Monday to Saturday, 11:00 AM to 6:00 PM
    </p>
  </div>
</div>


<svelte:head>    
  <meta property="og:image" content="https://syrkis.ams3.digitaloceanspaces.com/files-bucket/04223B1F-7455-4F5B-8C5B-590BCCF20773.png" />
  <meta property="og:title" content="Potemkin Contemporary" />
  <meta property="og:url" content="https://ptmkin.org" />
</svelte:head>

<style>
:global(body) {
    margin: 0;
    padding: 0;
    letter-spacing: 0.05rem;
    font-family: 'Crimson Pro', serif;
}

:global(h1) {
    letter-spacing: 0.07em;
    font-weight: 100;
    font-size: 3rem;
    text-align: center;
    margin: 0;
    padding: 0;
    width: 100%;
}
  :global(h2) {
      font-family: sans-serif;
      text-align: center;
  }

:global(p) {
    font-size: 1.2rem;
    line-height: 2rem;
}

:global(.text) {
    width: 600px;
    max-width: 95%;
    margin: 0 auto;
    text-align: justify;
}

:global(hr) {
    width: 100%;
    margin: 0 auto;
    border: 0.5px solid black;
}

:global(.divider) {
    width: 200px;
    margin: auto;
    text-align: center;
}

.footer {
    padding: 10rem 0 1rem;
    width: 100%;
    text-align: center;
}

.content {
    display: flex;
    justify-content: center;
    margin: 0 10vw;
}

</style>

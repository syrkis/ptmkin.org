<script>
  let links = [
    {name: 'Home', url: '/'},
    {name: 'About', url: '/about'},
    {name: 'Artists', url: '/artists'},
    {name: 'Exhibitions', url: '/exhibitions'},
    {name: 'Contact', url: '/contact'}
  ];
</script>

<div class='sideBar leftBar'>
  <ul>
    {#each links as link}
      <li><a href="{link.url}">{link.name}</a></li>
    {/each}
  </ul>
</div>

<div class='sideBar rightBar'>
  <ul>
    {#each links as link}
      <li><a href="{link.url}">{link.name}</a></li>
    {/each}
  </ul>
</div>

<div class="content">
  <!-- Your content here -->
</div>

<style>


ul {
  list-style-type: none;
}

li {
  /* keep li on smae lines */
  display: inline-block;
  /* add space between li */
  margin: 0 1rem;
  /* add space between li and ul */
  padding: 1rem 0;
}

@media (max-width: 768px) {
  ul {
    line-height: 0.5em;
  }

  li {
    /* keep li on smae lines */
    /* add space between li */
    margin: 0;
    /* add space between li and ul */
    padding: 1rem 0;
  }
}
.sideBar {
  line-height: 1em;
  writing-mode: vertical-lr;
  text-transform: uppercase;
  text-align: center;
  transform: rotate(180deg);
  position: fixed;
  top: 0;
  height: 100vh;
}

.sideBar ul {
  padding: 0;
  list-style-type: none;
}

.leftBar {
  left: 0;
}

.rightBar {
  right: 0;
}

a {
  text-decoration: none;
  color: black;
}

.content {
  margin: 0 auto;
  width: calc(100% - 200px); /* Adjust according to your needs */
  padding: 0 100px; /* Adjust according to your needs */
  box-sizing: border-box;
}
</style>

<script>
  let left = [
    {name: 'Home', url: '/'},
    {name: 'About', url: '/about'},
    {name: 'Artists', url: '/artists'},
    {name: 'Exhibitions', url: '/exhibitions'},
    {name: 'Contact', url: '/contact'}
  ];

  let right = [
    {name: 'Instagram', url: 'https://www.instagram.com/ptmkin'},
    {name: 'Facebook', url: 'https://www.facebook.com/ptmkin'},
    {name: 'Twitter', url: 'https://twitter.com/ptmkin'},
    {name: 'Youtube', url: 'https://www.youtube.com/@ptmkin'},
  ];
</script>

<div class='sideBar leftBar'>
  <ul>
    {#each left as link}
      <li><a href="{link.url}">{link.name}</a></li>
    {/each}
  </ul>
</div>

<div class='sideBar rightBar'>
  <ul>
    {#each right as link}
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


@media (max-width: 700px) {
  .sideBar {
    position: relative;
    width: 100%;
    height: auto;
    transform: rotate(0deg);
    writing-mode: horizontal-tb;
  }

  .leftBar, .rightBar {
    float: none;
  }

  .content {
    width: 100%; /* Adjust according to your needs */
    padding: 0 15px; /* Adjust according to your needs */
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
  }

  li {
    /* keep li on same lines */
    display: block;
    /* add space between li */
    margin: 0.5rem;
    /* add space between li and ul */
    padding: 0.5rem 0;
  }
}
</style>

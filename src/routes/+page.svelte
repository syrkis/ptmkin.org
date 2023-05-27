<script lang="ts">
  import Header from '$lib/components/Header.svelte'
  import Posts from '$lib/components/Posts.svelte'
</script>

<div class="container">
  <Header />
  <slot></slot>
  <Posts />
</div>

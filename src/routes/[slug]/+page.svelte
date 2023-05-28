<script lang="ts" context="module">
  export const prerender = true;
	import Header from '$lib/components/Header.svelte'

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container">
  <Header />
	<h1>{data.title}</h1>
	<h2>{data.date}</h2>
	<p>{data.body}</p>
</div>
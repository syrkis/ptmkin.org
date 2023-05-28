<script lang="ts">
	import Header from '$lib/components/Header.svelte'

	import type { PageData } from '../[slug]/$types';

	export let data: PageData;

</script>

<div class="container">
  <Header />
	<h1>{data.title}</h1>
	<h2>{data.date}</h2>
	<p>{data.body}</p>
</div>
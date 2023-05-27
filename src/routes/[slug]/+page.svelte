<script lang="ts">
	import Markdown from '$lib/components/markdown.svelte';
	import Header from '$lib/components/Header.svelte'

	import type { PageData } from '../[slug]/$types';

	export let data: PageData;

</script>

<div class="container">
  <Header />
  <slot></slot>
	<h1>{data.title}</h1>
	<p>{data.body}</p>
</div>
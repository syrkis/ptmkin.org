<script lang="ts">
	import Header from '$lib/components/Header.svelte'
	import Post from '$lib/components/Post.svelte'

	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data.body)
</script>

<div>
	{#each data.body as artist}
		<h2>{artist.artist}</h2>
	{/each}
</div>

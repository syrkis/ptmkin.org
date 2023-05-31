<script lang="ts">
	import Header from '$lib/components/Header.svelte'
	import Post from '$lib/components/Post.svelte'

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
  <Post {data} />
</div>

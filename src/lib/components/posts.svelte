<script>

	export let posts = [];

	const pinned = posts.filter(p => p.pinned)
	const regularPosts = posts.filter(p => !p.pinned)

	function normalizeDate(date) {
		const d = new Date(date);
		return d.toLocaleDateString('hu');
	}
</script>

<ul class="posts-list">
	{#each pinned as post}
		<li class="card">
			<article class="pinned">
				<!-- TODO Not ideal -->
				{@html post.excerpt}
			</article>
		</li>
	{/each}

	{#each regularPosts as post}
		<!-- TODO This could be a component-->
		<li class="card">
			<article>
				<a href="/blog/{post.slug}">
					<img
							src={post.coverImage}
							alt=""
							width={post.coverWidth}
							height={post.coverHeight}
							style="ratio: {post.coverWidth} / {post.coverHeight}"
							class:scale-down="{post.scaleDown}"
					/>
					<h2>
						{post.title}
					</h2>
					<span class="subtitle">{normalizeDate(post.date)}</span>
				</a>
			</article>

			{#if post.excerpt}
				<p>{post.excerpt}</p>
			{/if}
		</li>
	{/each}
</ul>

<style>
	.card {
		/* Add shadows to create the "card" effect */
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		padding: 1rem;
		margin-bottom: 2rem;
		border-radius: 15px;
		background: white;
	}

	/* On mouse-over, add a deeper shadow */
	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	img {
		height: 400px;
		width: 100%;
		object-fit: cover;
	}

	a {
		text-decoration: none;
	}

	.pinned {
		text-align: justify;
	}

	.scale-down {
		object-fit: scale-down !important;
	}
</style>
<script lang="ts">
	import { page } from '$app/state';

	let currentRoute = $derived(page.route.id);
	let crumbs = $derived.by(() => {
		if (!currentRoute) {
			return [];
		}
		return currentRoute.slice(1).split('/');
	});
</script>

<div id="breadcrumbs">
	{#if currentRoute != '/'}
		<a class="crumb" href="/">home</a>

		{#each crumbs as crumb (crumb)}
			<span class="arrow">&gt;</span>
			<a class="crumb" href={currentRoute}>{crumb}</a>
		{/each}
	{/if}
</div>

<style>
	#breadcrumbs {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		width: 100%;
		gap: 10px;
	}

	.crumb {
		color: white;
		text-decoration: none;
	}

	.arrow {
		color: white;
	}
</style>

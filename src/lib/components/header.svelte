<script lang="ts">
	import Breadcrumbs from './breadcrumbs.svelte';
</script>

<nav>
	<h1>Konnor Collins</h1>
	<Breadcrumbs />
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;

		align-items: center;
		justify-content: space-between;

		width: 100%;
		padding: 1vw 4vw;
	}

	h1 {
		font-size: 8vw;
	}
</style>

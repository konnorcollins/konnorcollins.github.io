<script lang="ts">
	import '../styles/global.css';
	import '../styles/variables.css';

	import type { Snippet } from 'svelte';
	import Header from '$lib/components/header.svelte';
	import Github from '$lib/components/socials/github.svelte';
	import Linkedin from '$lib/components/socials/linkedin.svelte';
	import Email from '$lib/components/socials/email.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="container">
	<Header />
	{@render children()}

	<div id="socials">
		<Email width="50" height="50" />
		<Github width="50" height="50" />
		<Linkedin width="50" height="50" />
	</div>

	<footer>
		<span class="copyright">Konnor Collins &copy; 2025</span>
	</footer>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#socials {
		display: flex;
		justify-content: center;

		padding: 1em 0;

		gap: 20px;
		width: 100%;
		background-color: var(--background);
	}

	footer {
		display: flex;
		justify-content: space-between;
		width: 100%;

		padding: 15px;
	}
</style>

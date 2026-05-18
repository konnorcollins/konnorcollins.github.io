<script lang="ts">
	import '../styles/classless.css';

	import type { PageData } from './$types';
	import type { Snippet } from 'svelte';

	import { resolve } from '$app/paths';

	import Github from '$lib/components/socials/github.svelte';
	import Linkedin from '$lib/components/socials/linkedin.svelte';
	import Email from '$lib/components/socials/email.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	let { children, data }: { children: Snippet; data: PageData } = $props();
</script>

<div class="container">
	<header>
		<nav>
			<a href={resolve('/')}>home</a>
			<a href={resolve('/about')}>about</a>
			<a href={resolve('/posts')}>blog</a>
		</nav>
	</header>

	<main>
		<PageTransition url={data.url}>
			{@render children()}
		</PageTransition>
	</main>

	<footer>
		<div id="socials">
			<Email width="50" height="50" />
			<Github width="50" height="50" />
			<Linkedin width="50" height="50" />
		</div>
		<span class="copyright">Konnor Collins &copy; 2026</span>
		<span
			>Built with <a href="https://svelte.dev/">svelte</a> +
			<a href="https://mdsvex.pngwn.io/">mdsvex</a>
			+ <a href="https://classless.de/">classless.css</a></span
		>
	</footer>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	main {
		flex: 1;
	}

	#socials {
		display: flex;
		justify-content: center;

		padding: 1em 0;

		gap: 20px;
		width: 100%;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;

		padding: 15px;
	}
</style>

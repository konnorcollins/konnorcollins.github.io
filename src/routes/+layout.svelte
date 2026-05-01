<script lang="ts">
	//import '../styles/global.css';
	//import '../styles/variables.css';
	import '../styles/classless.css'

	import type { Snippet } from 'svelte';
	import Github from '$lib/components/socials/github.svelte';
	import Linkedin from '$lib/components/socials/linkedin.svelte';
	import Email from '$lib/components/socials/email.svelte';
	import { resolve } from '$app/paths';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import type { PageData } from './$types';

	let { children, data }: { children: Snippet, data: PageData } = $props();
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
		<span>Built with SvelteKit + mdsvex + classless.css</span>
	</footer>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	header {
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
		flex-direction: column;
		justify-content: space-between;
		width: 100%;

		padding: 15px;
	}
</style>

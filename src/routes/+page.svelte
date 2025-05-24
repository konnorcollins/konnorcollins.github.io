<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<main class="links" in:fade>
	<a class="link" href="/about">About</a>
	<a class="link" href="/experience">Experience</a>
	<a class="link" href="/projects">Projects</a>
</main>

<style>
	.links {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.link {
		border-top: 1px solid white;
		color: white;
		font-size: 8vw;
		padding: 1vw 4vw;
		position: relative;
		text-decoration: none;
	}

	.link:last-child {
		border-bottom: 1px solid white;
	}

	.link::before {
		background: linear-gradient(
			to right,
			transparent,
			var(--big-link-color),
			var(--big-link-gradient)
		);
		content: '';
		left: 0px;
		top: 0px;
		height: 100%;
		width: 0%;
		position: absolute;
	}

	.link:hover::before {
		transition: width 400ms ease;
		width: 100%;
	}
</style>

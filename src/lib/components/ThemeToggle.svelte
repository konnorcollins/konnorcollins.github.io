<script lang="ts">
	interface Theme {
		selected: 'light' | 'dark';
	}

	let theme = $state<Theme>({ selected: 'dark' });

	function toggleTheme() {
		if (theme.selected == 'light') {
			theme.selected = 'dark';
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			theme.selected = 'light';
			document.documentElement.setAttribute('data-theme', 'light');
		}
	}
</script>

{#if theme.selected == 'dark'}
	<button onclick={toggleTheme}>☀</button>
{:else}
	<button onclick={toggleTheme}>☪</button>
{/if}

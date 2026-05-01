<script lang="ts">
	import type { Snippet } from "svelte";
	import { fly } from "svelte/transition";

    let { children, url }: { children: Snippet, url: string} = $props();
</script>

{#key url}
    <div in:fly>
        {@render children()}
    </div>
{/key}
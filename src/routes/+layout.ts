/* Leave this exported value as true to pre-render the entire site for github pages! */
export const prerender = true;

/* Used only for page transitions, see $lib/PageTransition.svelte */
export async function load({ url }) {
	return {
		url: url.pathname
	}
}
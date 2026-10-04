# konnorcollins.github.io

A static resume & blog site, written by me.

Built with [svelte](https://svelte.dev/) + [mdsvex](https://mdsvex.pngwn.io/) + [classless.css](https://classless.de/)

## Developing

To run this site locally, run:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To build the production version of this site, run:

```bash
npm run build
```

This makes use of the [sveltekit's static site adapter](https://svelte.dev/docs/kit/adapter-static) to prerender the entire project as static files. A few further configuration changes in svelte.config.js allow for a clean deployment to github-pages.

Deployment is handled by [upload-pages-artifact](https://github.com/actions/upload-pages-artifact) and [deploy-pages](https://github.com/actions/deploy-pages).

## Blog RSS Feed

There isn't one (yet).

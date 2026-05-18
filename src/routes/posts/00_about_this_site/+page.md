---
title: About this site
author: Konnor Collins
description: A quick explanation on this site's construction.

draft: true
tags:
    - svelte

---


# About this site (and how it was constructed)

LinkedIn is neat for indexing myself for potential employers, but a good ampitheater for my bad takes on tech & games, it is not.

Thus, in my quest to have the best of both worlds, I set out to create this site.  Which is basically a resume site that acts as a trojan for my blog.  Terribly sorry in advance!

## My needs

There's a few asks.

1. Use Github Pages (we're trying to be frugal and not pay for hosting).
2. Adding a new post should be as simple as adding a new markdown file.
3. Keep the hand-rolled styling to a minimum.
4. Configuration & content should be tracked in version control.  

Implicitely, this means the site will need to be static so it can be deployed to Github Pages.

## The implementation

To fulfill those needs, this project uses following pieces:
* [svelte](https://svelte.dev/) 
* [mdsvex](https://mdsvex.pngwn.io/) 
* [classless.css](https://classless.de/)


### Why Svelte?

~~React is overrated.~~

Truthfully, working with Svelte is a joy, but there are practical reasons for using it here.

SvelteKit comes with many useful pieces out of the box:  Routing, transitions, css styling that doesn't bleed between components.  One of these tools is [adapters](https://svelte.dev/docs/kit/adapters).

The adapter this project uses is [@sveltejs/adapter-static](https://svelte.dev/docs/kit/adapter-static), which basically pre-renders the entire project so it can be served as static files.  This plays very nice with Github Pages.

But what about markdown files?

### MDSVEX

This one is really neat.  MDSVEX allows me to drop markdown files into the default file locations for [svelte routes](https://svelte.dev/docs/kit/routing).

For uber simple situations (such as this blog), just having some basic global for markdown allows me to not need to worry about the underlying html & svelte guts.

If the need to use markdown in my svelte components, or svelte components in my markdown, MDSVEX allows for that as well.  Maybe I'll embed Zork in a blog post one of these days as an easter egg or something.

All that said, how my writing is structured doesn't amount to squat if it's not aesthetically pleasing to read, right?

### classless.css

[classless.css](https://classless.de/) is pretty self-explanatory.  It's a relatively light, out-of-the-box default global style.  

"But why not use tailwind?"

Tailwind is great if your front-end of choice does not gracefully handle component styling.  Svelte does not have this issue, so using classless.css as a base, the only thing I need to do is some structural styling for certain components.

Besides, using tailwind on a static blog would be like taking a sledgehammer to a wooden dowel.  Best to keep things simple.


## Building & Deploying

The benefit of this little stack of mine?  The most complex steps is just some of the initial configuration. Everything else, such as dropping in new content or building for production, is extremely easy.

The drawback?  It requires git literacy to push your opinions upstream.


## The Sauce
You can inspect the [source code for this project on github](https://github.com/konnorcollins/konnorcollins.github.io), and some of the files I would suggest poking around in are (in no particular order):

* src/routes/+layout.svelte (defines most of the common elements you see on this site)
* src/routes/posts/00_about_this_site/+page.md (this article!)
* svelte.config.js (adapter-static and mdsvex config are here!)




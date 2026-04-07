# Synopsis
<!-- #SQUARK live!
| dest = info/synopsis
| capt = Internals of Skyscraping
| index = info
| update = 2026 April 7
-->

> For an explanation of what *Skyscraping* is, please visit [foreword](https://sup2point0.github.io/skyscraping/walk/foreword).

*Skyscraping* is a fully static site, intended to be as lightweight, pleasant and immersive as possible.


## Site

- Build with [Svelte 5](https://svelte.dev) + [SvelteKit](https://svelte.dev/docs/kit)
- Hosted on [GitHub Pages](https://pages.github.com)

### Tech
- [SCSS](https://sass-lang.com) for styling
- [KaTeX](https://katex.org) for LaTeX maths rendering
- [MDsveX](https://mdsvex.pngwn.io) for Markdown
- My [*StrangerQuarkdown*](https://github.com/Sup2point0/stranger-quarkdown) framework for content preprocessing

### Fonts
Fonts from [Google Fonts](https://fonts.google.com).

- [Lora](https://fonts.google.com/specimen/Sora) (serif)
- [Sora](https://fonts.google.com/specimen/Sora) (sans serif)


## Puzzles

Puzzles are written in Markdown via tables, like so:

```html
<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |  3  |  1  |     |     |     |     |
|     |  5  | *12*|  6  |*124*|*124*|  3  |     |
|     | *24*|  3  |  1  | *56*| *56*| *24*|     |
|     | *24*|  6  |  5  | *34*| *23*|  1  |  5  |
|     |  3  |  5  | *24*| *6* | *6* | *24*|     |
|  4  |  1  |  4  |  3  | *25*| *25*|  6  |     |
|     |  6  |***12***| *24*|     |     |  5  |     |
|     |     |  4  |     |  3  |  3  |     |     |

</div>
```

Then with some CSS magic, we can transform the table into a Skyscrapers puzzle, with all the special formatting for pencilmarks, highlights and contradictions!

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |  3  |  1  |     |     |     |     |
|     |  5  | *12*|  6  |*124*|*124*|  3  |     |
|     | *24*|  3  |  1  | *56*| *56*| *24*|     |
|     | *24*|  6  |  5  | *34*| *23*|  1  |  5  |
|     |  3  |  5  | *24*| *6* | *6* | *24*|     |
|  4  |  1  |  4  |  3  | *25*| *25*|  6  |     |
|     |  6  |***12***| *24*|     |     |  5  |     |
|     |     |  4  |     |  3  |  3  |     |     |

</div>

Yes, entering numbers into the table with raw text leaves a little to be desired in terms of speed (and readability with pencilmarks), but I’ve gotten pretty comfortable and fast with the workflow!

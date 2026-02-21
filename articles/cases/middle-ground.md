# Case: Middle Ground
<!-- #SQUARK live!
| dest = cases/middle-ground
| capt = The $N-2$ clue
| index = cases
| update = 2026 February 21
-->

The most significant skyscrapers in a Skyscrapers are the $1$ and $N$ skyscrapers, and after those, the $N-1$ skyscrapers. The others are just sort of... ‘uninteresting’, and exist only to fill in the blanks.

That being said, there’s a very unique constraint around the $N-2$ skyscraper![^unique]

[^unique]: I know, it sounds outlandish...

Consider the following lane:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |  6  |     |
|     |     |     |     |     |     |     |     |

</div>

The $N-1$ skyscraper here is the $4$-skyscraper. Think about which cells we could place it in.

It could very well go in the [head cell](../glossary.md#head-cell), leaving the $5$-skyscraper to go somewhere in the gap:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |**4**| *5* | *5* | *5* | *5* |  6  |     |
|     |     |     |     |     |     |     |     |

</div>

And you might think the $4$-skyscraper could go in any of the other cells too. Suppose we put it in this one here:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |     |     |     |**4**|     |  6  |     |
|     |     |     |     |     |     |     |     |

</div>

Now, by the rules of Skyscrapers we know the $5$ can’t go between the $4$ and $6$:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |     |     |     |  4  |~~5~~|  6  |     |
|     |     |     |     |     |     |     |     |

</div>

If this were the case, then we’d see 4 or more skyscrapers, because there’s guaranteed to be at least 1 unobscured skyscraper before the $4$.

In this situation, we know the $5$ must come *before* the $4$:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |     | *5* | *5* |  4  |     |  6  |     |
|     |     |     |     |     |     |     |     |

</div>

This way, it obscures the $4$, giving us 2 guaranteed peaks, with the last one coming someplace before the $5$. Keep this constraint in mind!

Now... notice we couldn’t place the $5$ in the head cell, because this would allow only 2 visible skyscrapers, not 3:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |~~5~~|     |     |  4  |     |  6  |     |
|     |     |     |     |     |     |     |     |

</div>

<!-- TODO future sequences 3 can't have 5 -->
This is pretty obvious, of course, but – combine it with our previous constraint. We said that $5$ must come before $4$, but $5$ can’t go in the 1st cell. So what happens if $4$ is in the 2nd cell?

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |     |~~4~~|     |     |     |  6  |     |
|     |     |     |     |     |     |     |     |

</div>

There’s nowhere valid to place the $5$-skyscraper here! It must come before the $4$, but it can’t go in the head cell.

This means $4$ cannot go in the 2nd cell, and we can eliminate it from the candidates:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |     |*1235*|    |     |     |  6  |     |
|     |     |     |     |     |     |     |     |

</div>

Pretty crazy, huh? Unexpected that the $4$ is randomly gone.

So $1$, $2$, $3$ can all go in any cell in the lane, but specifically $4$, the $N-2$ skyscraper, cannot go in the 2nd cell.

This deduction works for general $N$ – but only with a $3$-clue, because that’s what facilitates this interaction of constraints.

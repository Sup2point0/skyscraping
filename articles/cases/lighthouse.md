# Case: Lighthouse
<!-- #SQUARK live!
| dest = cases/lighthouse
| capt = The $N$ clue
| index = cases
| update = 2025 July 2
-->

In an *NxN* Skyscrapers puzzle, the skyscrapers of height $1$ and $N$ are always the most notable. In fact, the $N$ skyscraper is arguably more fundamental than the $1$, because it dictates the very shape of the Skyscrapers grid.

$N$ skyscrapers are almost always the easiest to deduce at the start of a puzzle, when information is scarce and the grid is open. This is due to the incredibly strict constraints placed on $N$ skyscrapers in comparison to other skyscrapers.

For instance, consider a *5x5* grid, where $N = 5$.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|  5  |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |  1  |     |     |     |     |     |

</div>

A $1$ clue means the $5$ must go in front of it ([silhouette](silhouette.md)). The $5$ clue imposes a full staircase, so the $5$ must go at the end ([stairs](stairs.md)).

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|  5  |  1  |  2  |  3  |  4  |**5**|     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |**5**|     |     |     |     |     |
|     |  1  |     |     |     |     |     |

</div>

However, it’s not apparent from the extremes of the smallest and largest clue what exactly this restriction placed on the $N$ skyscraper is. Let’s now consider the $4$ clue, which will shed some more light on it.

Consider where we can place the $5$ in a lane where we have a $4$ clue. We definitely can’t place it in the first cell, since that would block all the others.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  4  |**5**|  -  |  -  |  -  |  -  |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Nor can we place it in the second, since then we’d only see 2 skyscrapers.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  4  |**-**|**5**|  -  |  -  |  -  |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

We can’t do the third either, because this only allows a maximum of 3 skyscrapers to be visible.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  4  |**-**|**-**|**5**|  -  |  -  |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

It follows the $5$ skyscraper can only go in the last 2 spots, i.e. the 4th and 5th cells.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  4  |**-**|**-**|**-**|***7***|***7***|     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

If we apply the same to a $3$ clue, we’ll notice it’s the 3rd, 4th and 5th cells.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |***7***|***7***|***5***|     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

And for the $2$ clue, all those from 2nd through to 5th.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |     |***7***|***7***|***5***|***5***|     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

There’s a clear pattern here that generalises to larger puzzle sizes!

In a lane with clue $X$, the tallest skyscraper $N$ must be at least $N$ cells away.

Let’s demonstrate with a *7x7* grid:

<div class="puzzle">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |     |
|  1  |***5***|     |     |     |     |     |     |     |
|  2  |     |***7***|***7***|***7***|***7***|***7***|***7***|     |
|  3  |     |     |***7***|***7***|***7***|***7***|***7***|     |
|  4  |     |     |     |***7***|***7***|***7***|***7***|     |
|  5  |     |     |     |     |***7***|***7***|***7***|     |
|  6  |     |     |     |     |     |***7***|***7***|     |
|  7  |     |     |     |     |     |     |***7***|     |
|     |*#1* |*#2* |*#3* |*#4* |*#5* |*#6* |*#7* |     |

</div>

For instance, in the $4$ clue lane, the closest $7$ can be is in the 4th cell.

The only exception to the rule is where $X = 1$, because the $N$ skyscraper is forced into the first cell.

This is a really powerful deduction, and it’s what drives so much of the puzzle starters where you’re pinpointing the tallest skyscrapers.


<!-- ## Cases

Let’s see it in action with some puzzle openings. -->

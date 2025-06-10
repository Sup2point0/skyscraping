# Adventure Awaits
<!-- #SQUARK live!
| dest = walk/primer
| capt = A primer on Skyscrapers and how to solve them
| date = 2025 May 10
-->

So, Skyscrapers.[^tt] They’re a variety of gridded puzzle similar to a Sudoku, and they look something like this:

[^tt]: There are way too many plane jokes to be made here. I think I’ll just keep my (metaphorical) mouth shut.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  3  |     |  1  |  3  |     |     |
|     |     |     |     |     |     |  3  |
|     |     |     |     |  1  |     |  3  |
|     |     |     |     |     |     |     |
|     |     |     |  3  |     |     |     |
|     |     |  1  |     |     |     |     |
|     |     |     |     |  2  |     |     |

</div>

The aim is to complete the grid such that each row and column contains each digit exactly once – like in a Sudoku.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  3  |     |  1  |  3  |     |     |
|     |  1  |  3  |  5  |  2  |  4  |  3  |
|     |  3  |  5  |  4  |  1  |  2  |  3  |
|     |  5  |  2  |  1  |  4  |  3  |     |
|     |  2  |  4  |  3  |  5  |  1  |     |
|     |  4  |  1  |  2  |  3  |  5  |     |
|     |     |     |     |  2  |     |     |

</div>

However, the solution also needs to satisfy the clues along the outside, and it’s these that give Skyscrapers its character. Here’s how it works.

Each number in the grid represents the height of a ‘skyscraper’ in that cell. For instance, in a 4x4 puzzle a $4$ is the tallest skyscraper, while $1$ is the shortest.

[ 3d ]

What the clues along the outside tell you are how many skyscrapers you can ‘see’ by looking along that row or column. Imagine yourself standing on the clue and looking down that lane – shorter skyscrapers would be obscured by taller ones in front of them.

[ line ]

So, if you have a clue of $4$ in a 4x4 puzzle, that means you can see all 4 skyscrapers in that lane.

![[1, 2, 3, 4] allows all 4 skyscrapers to be seen.]({base}/primer/all-4.png)

That’s all there is to it!

The easiest and quickest way to learn how to solve a Skyscrapers is just to see it in action. So let’s see how we’d solve a 4x4 puzzle.

> The original puzzle is available at [brainbashers.com](https://www.brainbashers.com/p766664).

<div class="puzzle">

|||||||
| :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |  1  |
|     |     |     |     |     |  3  |
|     |     |     |  4  |     |     |

</div>

First, notice if we have a clue of $1$, we know the $4$ skyscraper must go directly in front of it. This way the $4$ hides all the other skyscrapers behind itself.

<div class="puzzle">

|||||||
| :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |**4**|  1  |
|     |     |     |     |     |  3  |
|     |     |     |  4  |     |     |

</div>

Similarly, where we have a clue of $4$, we know all 4 skyscrapers must be in order so that all 4 are visible.

<div class="puzzle">

|||||||
| :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |
|     |     |     |**4**|     |     |
|     |     |     |**3**|     |     |
|     |     |     |**2**|  4  |  1  |
|     |     |     |**1**|     |  3  |
|     |     |     |  4  |     |     |

</div>

> Any other order, and we’d see less than 4 skyscrapers.

Now looking at the $3$ clue, the only possible order of the row is $[2, 1, 3, 4]$, such that $(2, 1, 4)$ are visible.

<div class="puzzle">

|||||||
| :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |
|     |     |     |  4  |     |     |
|     |     |     |  3  |     |     |
|     |     |     |  2  |  4  |  1  |
|     |**4**|**3**|  1  |**2**|  3  |
|     |     |     |  4  |     |     |

</div>

> There’s already a $1$ in the row, and if we put the $3$ next to the clue, we’d only see $(3, 4)$.

We’ve found 3/4 of the $4$ skyscrapers, so by the rules of Sudoku we know where the last one goes.

<div class="puzzle">

|||||||
| :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |
|     |     |     |  4  |     |     |
|     |     |**4**|  3  |     |     |
|     |     |     |  2  |  4  |  1  |
|     |  4  |  3  |  1  |  2  |  3  |
|     |     |     |  4  |     |     |

</div>

It’s plain sailing from here as we can solve the rest of the puzzle with Sudoku deductions.

These are the only places $3$ skyscrapers can go:

<div class="puzzle">

|||||||
| :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |
|     |     |     |  4  |**3**|     |
|     |     |  4  |  3  |     |     |
|     |**3**|     |  2  |  4  |  1  |
|     |  4  |  3  |  1  |  2  |  3  |
|     |     |     |  4  |     |     |

</div>

Then the $2$ skyscrapers:

<div class="puzzle">

|||||||
| :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |
|     |     |**2**|  4  |  3  |     |
|     |**2**|  4  |  3  |     |     |
|     |  3  |     |  2  |  4  |  1  |
|     |  4  |  3  |  1  |  2  |  3  |
|     |     |     |  4  |     |     |

</div>

And finally we can fill out the rest of the $1$ skyscrapers:

<div class="puzzle">

|||||||
| :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |
|     |**1**|  2  |  4  |  3  |     |
|     |  2  |  4  |  3  |**1**|     |
|     |  3  |**1**|  2  |  4  |  1  |
|     |  4  |  3  |  1  |  2  |  3  |
|     |     |     |  4  |     |     |

</div>

And there we have it, all done. Not too bad, eh?

Luckily, it gets much harder very quickly from here! With larger grid sizes and scarcity of clues, Skyscrapers become a deliciously mind-bending challenge. Cracking them takes thought, ingenuity, and above all, persistence.

If you’re new, I hope you’ve found Skyscrapers intriguing. You should go try one yourself now – it *will* be fun, and you might just find yourself with a new ~~addiction~~ hobby ;)

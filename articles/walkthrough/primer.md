# Adventure Awaits
<!-- #SQUARK live!
| dest = primer
| capt = A primer on Skyscrapers and how to solve them
| date = 2025 May 10
-->

Skyscrapers are a variety of gridded, Sudoku-like puzzle. They look like this:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  3  |  .  |  1  |  3  |  .  |     |
|  .  |     |     |     |     |     |  3  |
|  .  |     |     |     |  1  |     |  3  |
|  .  |     |     |     |     |     |  .  |
|  .  |     |     |  3  |     |     |  .  |
|  .  |     |  1  |     |     |     |  .  |
|     |  .  |  .  |  .  |  2  |  .  |     |

</div>

The aim is to complete the grid such that each row and column contains each digit exactly once – like in a Sudoku.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  3  |  .  |  1  |  3  |  .  |     |
|  .  |  1  |  3  |  5  |  2  |  4  |  3  |
|  .  |  3  |  5  |  4  |  1  |  2  |  3  |
|  .  |  5  |  2  |  1  |  4  |  3  |  .  |
|  .  |  2  |  4  |  3  |  5  |  1  |  .  |
|  .  |  4  |  1  |  2  |  3  |  5  |  .  |
|     |  .  |  .  |  .  |  2  |  .  |     |

</div>

However, the solution also needs to satisfy the clues along the outside, and it’s these that give Skyscrapers its character. Here’s how it works.

Each number in the grid represents the height of a ‘skyscraper’ in that cell. For instance, in a 4x4 puzzle a $4$ is the tallest skyscraper, while $1$ is the shortest.

[ 3d ]

What the clues along the outside tell you are how many skyscrapers you can ‘see’ by looking along that row or column. Imagine yourself looking down that lane – shorter skyscrapers would be obscured by taller ones in front of them.

[ line ]

So, if you have a clue of $4$ in a 4x4 puzzle, that means you can see all 4 skyscrapers in that lane.

[ line ]

That’s all there is to it!

The easiest and quickest way to learn how to solve a Skyscrapers is just to see it in action. So let’s see how we’d solve a 4x4 puzzle.

> The original puzzle is available at [brainbashers.com](https://www.brainbashers.com/p766664).

<div class="puzzle">

|||||||
| :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |     |  .  |
|  .  |     |     |     |     |  .  |
|  .  |     |     |     |     |  1  |
|  .  |     |     |     |     |  3  |
|     |  .  |  .  |  4  |  .  |     |

</div>

First, notice anywhere we have a clue of $1$, we know the $4$ skyscraper must go directly in front of it, so that it hides all the other skyscrapers behind itself. So we can start by filling in a few cells with $4$.

[ puzzle ]

This lays a nice framework for us to work with, and will help us make more logical deductions from here.



And there we have it, all done. Not too bad, eh?

Luckily, it gets much harder very quickly from here! With fewer clues and larger grid sizes, Skyscrapers become a deliciously mind-bending challenge. Cracking them takes thought, ingenuity, and above all, persistence.

If you’re new, I hope you’ve found Skyscrapers intriguing. You should go try one yourself now – it *will* be fun, and you might just find yourself with a new ~~addiction~~ hobby ;)

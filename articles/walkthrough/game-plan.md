# The Game Plan
<!-- #SQUARK live!
| dest = walk/game-plan
| capt = Where do we start?
| index = walk
| update = 2026 April 29
-->

We’re faced with a Skyscrapers puzzle. Where do we start?

There is, of course, no mandatory strategy that you *have* to follow – whatever works, works! That being said, if you’re here you're probably looking for more structured ways to approach Skyscrapers, so I’ll share some of what goes through my mind when tackling a puzzle.


## Overview

Like many logic puzzles, Skyscrapers is a game of *iterated deduction*. We start by filling in what we ‘obviously’ know. Then we look for more obscure deductions we can make. When we do find one, we ‘chase it’ until we’ve exhausted all the things it affects.

We keep doing this, over and over, until we’ve solved the puzzle. The tough part is spotting a new deduction each time! The further on we go, generally the fewer ‘obvious’ deductions there’ll be available to us, and we may have to reach for more niche deductions.

Can’t talk loads about theory without showing how to apply it, so throughout this article I’ll demonstrate everything by solving this example puzzle:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|     |     |     |     |     |     |     |
|     |     |  2  |     |     |     |     |
|  1  |     |     |     |     |     |  2  |
|     |     |     |     |     |     |     |
|  2  |     |     |  4  |     |     |     |
|     |     |     |     |  5  |     |     |

</div>

Feel free to take a stab at it yourself, and compare how we approach it!


## Pregame

At the start of a puzzle, there'll often be many ‘obvious’ deductions that are freely available. You might be familiar with that initial rush to fill in everything we can.

However, this won't always be the case! Some of the toughest puzzles are incredibly difficult to start, and might need an egregious amount of pencilmarking before even solving a third cell.

### Fill out the obvious
There are two clues can be trivially solved immediately – the $1$-clue ([Silhouette](../cases/silhouette.md)) and the $N$-clue ([Stairs](../cases/stairs.md)). In this puzzle, we’ve got both!

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|     |     |     |     |**5**|     |     |
|     |     |  2  |     |**4**|     |     |
|  1  |**5**|     |     |**3**|     |  2  |
|     |     |     |     |**2**|     |     |
|  2  |     |     |  4  |**1**|     |     |
|     |     |     |     |  5  |     |     |

</div>

### Easy cases
[Blockade](../cases/blockade.md) is a free and surprisingly common case to watch out for.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|     |     |     |     |  5  |     |     |
|     |     |  2  |     |  4  |     |     |
|  1  |  5  |     |     |  3  |**4**|  2  |
|     |     |     |     |  2  |     |     |
|  2  |     |     |  4  |  1  |     |     |
|     |     |     |     |  5  |     |     |

</div>

### Look for lane peaks

> *Main article: [Skylining](../tech/skylining.md)*

[Lane peaks](../glossary.md#lane-peak) ($N$-skyscrapers) are a *core* part of the ‘structure’ of a Skyscrapers grid. They provide more information than any other skyscraper, and luckily for us are also often the easiest skyscrapers to deduce.

Since this is a *5x5* puzzle, the lane peaks are $5$-skyscrapers. We've already found two, and we can find two more by [Ascendant](../cases/ascendant.md).

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|     |     |     |     |  5  |     |     |
|     |     |  2  |     |  4  |**5**|     |
|  1  |  5  |     |     |  3  |  4  |  2  |
|     |     |     |     |  2  |     |     |
|  2  |     |**5**|  4  |  1  |     |     |
|     |     |     |     |  5  |     |     |

> In a $2$-clue lane where $4$ is not in the [head cell](../glossary.md#head-cell), the lane peak must come before the $4$.

</div>

With 4/5 lane peaks found, this [pinpoints](../tech/pinpoint.md) the last one.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|     |     |     |     |  5  |     |     |
|     |     |  2  |     |  4  |  5  |     |
|  1  |  5  |     |     |  3  |  4  |  2  |
|     |     |     |**5**|  2  |     |     |
|  2  |     |  5  |  4  |  1  |     |     |
|     |     |     |     |  5  |     |     |

</div>

Notice this means [Blockade](../cases/blockade.md) applies *again* in the 2nd column. These deductions aren't once-and-done, they could apply at any moment!

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|     |     |**4**|     |  5  |     |     |
|     |     |  2  |     |  4  |  5  |     |
|  1  |  5  |     |     |  3  |  4  |  2  |
|     |     |     |  5  |  2  |     |     |
|  2  |     |  5  |  4  |  1  |     |     |
|     |     |     |     |  5  |     |     |

</div>


## Midgame

### Pencilmark!
Often, like in this puzzle, you’ll find yourself unable to really make any more ‘obvious’ deductions. Don't worry, this is common, especially in more difficult puzzles.

The solution? [Pencilmarking](../tech/pencilmarks.md) – writing out candidates for unsolved cells. If you’re averse to this (I know I was for a while[^averse]), unfortunately it really is the most powerful tool as your disposal, so you’re freezing yourself in the foot if you don’t make use of it!

[^averse]: Mainly when solving on paper. But when it’s digital you can easily remove pencilmarks!

The start of the puzzle is when there’s the least structure to the puzzle. Pencilmarking helps elucidate some of that structure to us.

> Of course, it’s very possible to go overboard with pencilmarking, and then things get messy! Generally, I only pencilmark cells with two candidates (maybe three, for larger puzzles), or where the candidates are particularly notable.

In this row, we've already solved 3/5 cells, so the last two must contain $[12]$.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|     |     |  4  |     |  5  |     |     |
|     |     |  2  |     |  4  |  5  |     |
|  1  |  5  |***12***|***12***|  3  |  4  |  2  |
|     |     |     |  5  |  2  |     |     |
|  2  |     |  5  |  4  |  1  |     |     |
|     |     |     |     |  5  |     |     |

</div>

### Always look for Sudoku-style deductions
The rules of Sudoku apply in Skyscrapers, and they're pretty powerful rules. Always be on the lookout for them, because they'll constantly come in crucial.

Here, we can eliminate $2$ as a candidate, because $2$ is already used in the column.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|     |     |  4  |     |  5  |     |     |
|     |     |  2  |     |  4  |  5  |     |
|  1  |  5  |***1***|***12***|  3  |  4  |  2  |
|     |     |     |  5  |  2  |     |     |
|  2  |     |  5  |  4  |  1  |     |     |
|     |     |     |     |  5  |     |     |

</div>

That leaves only $1$ as a candidate, so we can now solve the row.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|     |     |  4  |     |  5  |     |     |
|     |     |  2  |     |  4  |  5  |     |
|  1  |  5  |**1**|**2**|  3  |  4  |  2  |
|     |     |     |  5  |  2  |     |     |
|  2  |     |  5  |  4  |  1  |     |     |
|     |     |     |     |  5  |     |     |

</div>

And we can also solve this column, since we only have one unused skyscraper left.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|     |     |  4  |     |  5  |     |     |
|     |     |  2  |     |  4  |  5  |     |
|  1  |  5  |  1  |  2  |  3  |  4  |  2  |
|     |     |**3**|  5  |  2  |     |     |
|  2  |     |  5  |  4  |  1  |     |     |
|     |     |     |     |  5  |     |     |

</div>

Pencilmarking again:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|     |     |  4  |     |  5  |     |     |
|     |     |  2  |     |  4  |  5  |     |
|  1  |  5  |  1  |  2  |  3  |  4  |  2  |
|     |***14***|  3  |  5  |  2  |***14***|     |
|  2  |     |  5  |  4  |  1  |     |     |
|     |     |     |     |  5  |     |     |

</div>

We have a clash in the right column again, which allows us to solve the row.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|     |     |  4  |     |  5  |     |     |
|     |     |  2  |     |  4  |  5  |     |
|  1  |  5  |  1  |  2  |  3  |  4  |  2  |
|     |**4**|  3  |  5  |  2  |**1**|     |
|  2  |     |  5  |  4  |  1  |     |     |
|     |     |     |     |  5  |     |     |

</div>


## Endgame

At this point, the puzzle is pretty much solved. 

Can you see how we built a momentum? In fact, we've reached [critical mass](../glossary.md#critical-mass), where we have sufficient information to solve the entire puzzle 

# The Game Plan
<!-- #SQUARK live!
| dest = walk/game-plan
| capt = Where do we start?
| index = walk
| update = 2026 February 21
-->

We’re faced with a Skyscrapers puzzle. Where do we start?

There is, of course, no mandatory strategy that you *have* to follow – whatever works, works! That being said, if you’re here you might be looking for more structured ways to approach Skyscrapers, so I’ll share some of what goes through my mind when tackling a puzzle.

Like many logic puzzles, Skyscrapers is a game of *iterated deduction*. We start by filling in what we ‘obviously’ know. Then we look for more obscure deductions we can make. When we do find one, we “chase it” until we’ve exhausted all the things it affects.

We keep doing this, over and over, until we’ve solved the puzzle. The tough part is spotting a new deduction each time! The further on we go, generally the fewer ‘obvious’ deductions there’ll be available to us, and we may have to reach for more niche deductions.

Can’t talk loads about theory without showing how to apply it, so we’ll be solving this example puzzle:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  4  |  2  |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  1  |     |     |     |     |     |  3  |
|     |     |     |     |     |     |     |
|     |     |     |  5  |  3  |     |     |

</div>

Feel free to take a stab at it yourself, and compare how we approach it!


## Pregame

We start by filling in what we know.

### Fill out the obvious
There are two clues can be trivially solved immediately – the $1$-clue ([Silhouette](../cases/silhouette.md)) and the $N$-clue ([Stairs](../cases/stairs.md)). In this puzzle we’ve got both:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  4  |  2  |     |     |     |     |
|     |     |     |**5**|     |     |     |
|     |     |     |**4**|     |     |     |
|     |     |     |**3**|     |     |     |
|  1  |**5**|     |**2**|     |     |  3  |
|     |     |     |**1**|     |     |     |
|     |     |     |  5  |  3  |     |     |

</div>

### Pencilmark!
Often, like in this puzzle, you’ll find yourself unable to really make any more ‘obvious’ deductions. This is common.

The solution? [Pencilmarking](../tech/pencilmarks.md) – writing out candidates for unsolved cells. If you’re averse to this (I know I was for a while[^averse]), unfortunately it really is the most powerful tool as your disposal, so you’re freezing yourself in the foot if you don’t make use of it!

[^averse]: Mainly when solving on paper. But when it’s digital you can easily remove pencilmarks!

The start of the puzzle is when there’s the least structure to the puzzle. Pencilmarking helps elucidate some of that structure to us. Of course, it’s very possible to go overboard with pencilmarking, and then things get messy! Generally, I only pencilmark cells with two candidates (maybe three, for larger puzzles), or where the candidates are particularly notable.

### Pencilmark sequences
The easiest kind of pencilmark to make is for ascending [sequences](../glossary.md#sequence). These are a huge part of solving Skyscrapers in general.

Here, take a look at the leftmost [half-lane](../glossary.md#half-lane):

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  4  |  2  |     |     |     |     |
|     |** **|     |  5  |     |     |     |
|     |** **|     |  4  |     |     |     |
|     |** **|     |  3  |     |     |     |
|  1  |**5**|     |  2  |     |     |  3  |
|     |     |     |  1  |     |     |     |
|     |     |     |  5  |  3  |     |     |

</div>

We need four skyscrapers visible here, and the only way for that to happen is if all three skyscrapers before the $5$-skyscraper are visible (i.e. we have a sequence). Let’s pencilmark this in:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  4  |  2  |     |     |     |     |
|     |***12***|     |  5  |     |     |     |
|     |***23***|     |  4  |     |     |     |
|     |***34***|     |  3  |     |     |     |
|  1  |  5  |     |  2  |     |     |  3  |
|     |     |     |  1  |     |     |     |
|     |     |     |  5  |  3  |     |     |

</div>

So, for instance, we could have $\text{4 | 1 2 3 5}$, or $\text{4 | 2 3 4 5}$, or indeed $\text{4 | 1 3 4 5}$, or any other valid combination. We don’t know which yet! – but we *do* know the heights must be increasing.

### Always look for Sudoku-style deductions
Remember that the rules of Sudoku apply to Skyscrapers, and they’re pretty powerful rules.

Notice the $3$ candidate is actually invalid, because it would conflict with the $3$ in the same row:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  4  |  2  |     |     |     |     |
|     | *12*|     |  5  |     |     |     |
|     | *23*|     |  4  |     |     |     |
|     |***34***|     |~~3~~|     |     |     |
|  1  |  5  |     |  2  |     |     |  3  |
|     |     |     |  1  |     |     |     |
|     |     |     |  5  |  3  |     |     |

</div>

We can eliminate it, meaning that cell must now contain the $4$-skyscraper:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  4  |  2  |     |     |     |     |
|     | *12*|     |  5  |     |     |     |
|     | *23*|     |  4  |     |     |     |
|     |**4**|     |  3  |     |     |     |
|  1  |  5  |     |  2  |     |     |  3  |
|     |     |     |  1  |     |     |     |
|     |     |     |  5  |  3  |     |     |

</div>

### Look for lane peaks
[Lane peaks](../glossary.md#lane-peak) ($N$-skyscrapers) are a *core* part of the ‘structure’ of a Skyscrapers grid. They provide more information than any other skyscraper, and luckily for us are also often the easiest skyscrapers to deduce.


## Midgame

A long, painful search for new leads.

### Check all clues


## Endgame

Home straight to the finish.

### Couples

### Sudoku-style

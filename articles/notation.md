# Notation
<!-- #SQUARK live!
| dest = notation
| capt = Syntax for Skyscrapers
| update = 2026 April 7
-->

Across *Skyscraping*, I sometimes use a textual notation for [lanes](glossary.md#lane) of a Skyscrapers puzzle. Since it is’t always practical to create a full diagram like this...

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  |  1  | *23*|  4  |     |  5  |     |

</div>

...for every situation, this more efficient notation allows us to more efficiently discuss possibilities and deductions.

This page describes the syntax of this notation. It’s hopefully pretty self-explanatory!


## Solved Cells

Take the following lane:

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  5  |  1  |  2  |  3  |  4  |  5  |  1  |

</div>

We notate this as:

```math
\text{5 | 1 2 3 4 5 | 1}
```

The vertical pipes “$|$” denote the edges of the [grid](glossary.md#grid), separating the [skyscrapers](glossary.md#skyscraper) from the [clues](glossary.md#clue).

Keep in mind, the direction of the ‘notated’ lane doesn’t need to be the same as in the original grid. If we were interested in looking *right-to-left* in the original lane, we would instead write it as:

```math
\text{1 | 5 4 3 2 1 | 5}
```

For consistency, the direction of interest will always be *left-to-right*. So when you see $p \text{ | 1 2 3 ... | }q$, that means we’re focusing on the $p$-clue.

The direction of the original lane is irrelevant – it very well could be a column!

<div class="puzzle">

|||||||
| :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |  3  |     |     |
|     |     |     |  2  |     |     |
|     |     |     |  3  |     |     |
|     |     |     |  1  |     |     |
|     |     |     |  4  |     |     |
|     |     |     |  1  |     |     |

</div>

Here, $\text{1 | 4 1 3 2 | 3}$ means we’re looking up the column, while $\text{3 | 2 3 1 4 | 1}$ means we’re looking down it.


## Pencilmarks

For a lane with [pencilmarks](glossary.md#pencilmarks):

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|  4  | *12*| *23*| *34*|  5  |*1234*|  2  |
|     |     |     |     |     |     |     |

</div>

We notate this as:

```math
\text{4 | [12] [23] [34] 5 [1234] | 2}
```

We surround the [candidates](glossary.md#candidates) with square brackets “$[]$”.


## Unsolved Cells

Too many pencilmarks gets a bit unwieldy, though. Sometimes, we may just want to ignore the candidates, if they’re not relevant to our current focus.

In this lane, we’re focusing on the $3$-clue. What goes between the $5$ and $4$ isn’t currently of interest to us.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|  3  | *12*| *23*|  5  |     |  4  |  2  |
|     |     |     |     |     |     |     |

</div>

We notate this as:

```math
\text{3 | [12] [23] 5 \_ 4 | 2}
```

We use underscore “$\_$” to denote an [unsolved cell](glossary.md#unsolved-cell) without explicit candidates.

We’ll use this a lot in large puzzles where explicitly showing the candidates would otherwise be more distracting than helpful.

<div class="puzzle lane">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |  4  | *56*|  7  |     |     |     |  3  |  3  |

</div>

If things become especially dire, we might omit a whole bunch of cells at once with ellipsis “$...$”. For the above lane, this would give $\text{3 | 4 [56] 7 ... 3 | 3}$.

All this helps keep the notation clean and focused!


## Half-Lane

If we don’t care what’s beyond the [lane peak](glossary.md#lane-peak) *at all* – though this is rare, since usually we need to consider the whole lane to perform deductions – we can just omit the rest:

```math
\text{3 | [12] [23] 5}
```


## Sets

We often need to talk about a particular set of numbers.

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  3  |     |     |  5  |     |     |

</div>

In the above lane, we say we have used $\{35\}$, and have not used $\{124\}$.

We surround the numbers of interest in curly braces “$\{\}$”, to represent a set where order is irrelevant (we’ll usually sort it for clarity).


## Peaks

Sometimes, we may talk about a specific chain of skyscrapers in a half-lane. Order *does* matter here, since we’re referring to the exact order the skyscrapers come in the puzzle.

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |  2  |  4  |  1  |  5  |  3  |     |

</div>

In the above lane, we say that we have placed $(24153)$, and can see $(245)$.

We surround the numbers of interest in rounded parentheses “$()$”, to represent an ordered list of skyscrapers.

> $()$ isn’t really ideal, but it’s kinda the best we’ve got since $[]$ and $\{\}$ are now taken lmao.


## Notes

Throughout all the notation we omit commas “$,$” to keep the notation compact and efficient. Since we never look at Skyscrapers of double-digit sizes, we can safely assume each digit is one individual skyscraper.

# Notation
<!-- #SQUARK live!
| dest = notation
| capt = Syntax for Skyscrapers
| update = 2026 February 25
-->

This page describes the syntax for notating [lanes](glossary.md#lane) in Skyscrapers puzzles throughout *Skyscraping*.


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

The vertical pipes “$|$” denote the edges of the grid, separating the [skyscrapers](glossary.md#skyscraper) from the [clues](glossary.md#clue).

Keep in mind, the direction of the ‘notated’ lane doesn’t need to be the same as in the original grid. If we were interested in looking *right-to-left* in the original lane, we would instead write it as:

```math
\text{1 | 5 4 3 2 1 | 5}
```

For consistency, the direction of interest will always be *left-to-right*. So when you see $p \text{ | 1 2 3 ... | }q$, that means we’re focusing on the $p$-clue.

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

The direction of the original lane is irrelevant – it very well could be a column! Here, $\text{1 | 4 1 3 2 | 3}$ means we’re looking up the column, while $\text{3 | 2 3 1 4 | 1}$ means we’re looking down the lane.


## Pencilmarks

For a lane with [pencilmarks](glossary.md#pencilmarks):

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|  4  | *12*| *23*| *34*|  5  |*1234*|  2  |
|     |     |     |     |     |     |     |

</div>

We surround the [candidates](glossary.md#candidates) with square brackets “$[]$”:

```math
\text{4 | [12] [23] [34] 5 [1234] | 2}
```


## Unsolved Cells

Too many pencilmarks gets a bit unwieldy, though. Sometimes, we may just want to ignore the candidates, if they’re not relevant to our current focus.

In this lane, we’re focusing on the $3$-clue [half-lane](glossary.md#half-lane). What goes between the $5$ and $4$ isn’t currently of interest to us.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|  3  | *12*| *23*|  5  |     |  4  |  2  |
|     |     |     |     |     |     |     |

</div>

We use underscore “$\_$” to denote an [unsolved cell](glossary.md#unsolved-cell) without explicit candidates:

```math
\text{3 | [12] [23] 5 \_ 4 | 2}
```

This helps us keep the notation clean and focused!


## Half-Lane

If we don’t care what’s beyond the [lane peak](glossary.md#lane-peak) *at all* – though this is rare, since usually we need to consider the whole lane to perform deductions – we can just omit it:

```math
\text{3 | [12] [23] 5}
```


## Sets

Sometimes we may need to talk about a particular set of numbers. For instance, in the following lane, the skyscrapers we haven’t used yet are $1$, $2$ and $4$:

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  3  |     |     |  5  |     |     |

</div>

We surround the numbers of interest in curly braces “$\{\}$”, like $\{124\}$.

Throughout all the notation we omit commas “$,$” to keep the notation compact and efficient. Since we never look at Skyscrapers of double-digit sizes, we can safely assume each digit is one individual skyscraper.

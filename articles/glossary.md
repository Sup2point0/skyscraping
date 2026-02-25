# Glossary
<!-- #SQUARK live!
| dest = glossary
| capt = (Unofficial) skyscraping jargon
| update = 2026 February 24
-->

This page defines all of the technical quasi-jargon I use throughout *Skyscraping*.

It really isn’t my intention to gatekeep beginners! In fact, I’ve made this partially for myself too, because it ensures:

- Consistency – one name for one concept.
- Unambiguity – well-defined concepts.
- Concise – no verbose “looking across this lane until we reach the skyscraper of tallest height”, just “looking across the half-lane”.  

The first two hold *me* accountable!

I wouldn’t recommend reading through this entire page – instead, use it as a reference for when you come across non-obvious unfamiliar terms. The first usage of a keyword on every page will link to this page for convenient access.


## backtrack

> *Since we spotted the [contradiction](#contradiction) early, luckily we can still backtrack.*

To undo [deductions](#deduction).


## candidates

> *$1$ and $2$ are the only candidates for this cell.*

The numbers in [pencilmarks](tech/pencilmarks.md), indicating which [skyscrapers](#skyscraper) could be placed in that cell.


## cell

A single square in the puzzle [grid](#grid).

A cell is either:

- [solved](#solved-cell), containing one [skyscraper](#skyscraper)
- [unsolved](#unsolved-cell), containing many [candidates](#candidates), which may be indicated with [pencil marks](#pencil-marks)

I'll also often use “Cell” to refer to the [skyscraper](#skysrcaper) *inside* it ([metonymy!<sup>↗</sup>](https://wikipedia.org/wiki/Metonymy)).


## closed

> *Solving closed Skyscrapers is fairly trivial, but solving open Skyscrapers is something else entirely*.

A **closed** Skyscrapers puzzle has clues along every [lane](#lane), such that it’s ‘closed off’.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |  2  |  3  |  3  |  1  |     |
|  2  |     |     |     |     |     |  1  |
|  2  |     |     |     |     |     |  2  |
|  1  |     |     |     |     |     |  4  |
|  4  |     |     |     |     |     |  2  |
|  3  |     |     |     |     |     |  3  |
|     |  2  |  3  |  1  |  2  |  4  |     |

</div>

With the maximum number of clues available, these Skyscrapers tend to require more work than thought, and aren’t particularly fun.

*Also called “dense” for historical reasons.*


## clue

> *This [lane](#lane) has a clue of $5$, so we know it must have a [sequence](#sequence).*

A number outside the puzzle [grid](#grid).

An $n$-clue indicates that in the [lane](#lane) it is adjacent to, there are precisely $n$ [skyscrapers](#skyscrapers) visible. For instance, here the clue is $3$:

```math
\text{3 | 1 4 2 3 6 5 |}
```


## concrete deduction

A deduction which we don't intend to [backtrack](#backtrack) on.

If solving Skyscrapers [‘properly’](thoughts/imagination-vs-guesswork.md), this means we are making the deduction with certainty – we can be confident the deduction is correct because it is based on logic.


## contradiction

> *Oh dear, we've found a contradiction. That means we must've gone wrong somewhere...*

A situation where a constraint cannot be satisfied (is *contradicted*).

For instance, if [half-lane](#half-lane) has a clue of $4$, but our working in its current state means 5 skyscrapers are guaranteed to be visible, then this is a contradiction. We've violated the $4$-clue, and there's no way to repair it.

Reaching a contradiction when performing [concrete](#concrete-deduction) deductions means you've made an error in your solution. Reaching a contradiction when performing [hypothetical](#hypothetical-deduction) deductions is very common, and is a strategy for ruling out potential solutions as impossible.


## counterexample

> *We've found a counterexample, so we know this [cell](#cell) can't contain a $3$-[skyscraper](#skyscraper).*

A potential configuration of candidates which leads to a [contradiction](#contradiction), which disproves the possibility of that configuration.

This is usually relevant while performing [hypothetical deductions](#hypothetical-deduction).


## couple

*Main article: [Technique: Couples](tech/couples)*

2 [unsolved cells](#unsolved-cell) in the same lane [lane](#lane) which contain the same 2 [candidates](#candidates).

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :----- | :----- | :----- | :-- |
|     |     |     |        |        |        |     |
|     |     |     |    1   |        |        |     |
|     |     |     |    2   |        |        |     |
|     |     |     |***34***|        |        |     |
|     |     |     |***34***|        |        |     |
|     |  3  |  4  |    5   |***12***|***12***|     |
|     |     |     |        |        |        |     |

</div>

In the grid above, the $[34]$ cells are couples, as are the $[12]$ cells.

*Also called “twins” and “pairs”.*


## deduction

> *Keep looking for deductions, even where you've already looked!*

A logical inference based on the currently available information.

For instance, in a lane $\text{5 | \_ \_ \_ \_ \_ \_}$ we can *deduce* the solution msut be $\text{5 | 1 2 3 4 5}$ using the rules of Skyscrapers.

Solving a Skyscrapers puzzle is just repeatedly performing deductions! [Cases](cases/) covers very specific logical deductions; [Techniques](tech/) covers general techniques that aid performing deductions when solving Skyscrapers.


## dense

Another name for a [closed](closed) Skyscrapers.


## half-lane

One ‘side’ of a [lane](#lane) – the cells from the head cell up to and including the lane peak, as well as the clue (if any) on that side.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|  3  | *12*| *23*|  5  |*123*|  4  |  2  |
|     |     |     |     |     |     |     |

</div>

The 2 half-lanes in the above lane are $\text{3 | [12] [23] 5}$ (from the left) and $\text{2 | 4 [123] 5}$ (from the right).


## head cell

> *The head cell can’t be too tall or we won’t be able to satisfy the clue.*

The first cell in a lane.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |***123***|     |     |  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

In this lane, the head cell is the one containing the [pencil marks](#pencil-marks) $[123]$.

*See also: [tail cell](#tail-cell)*


## grid

Refers specifically to the [cells](#cell) of the puzzle, without the clues.

An *NxN* Skyscrapers puzzle has a grid with dimensions $N \times N$.


## hypothetical deduction

> *my mind needs more RAM to handle these long-chain hypothetical deductions TvT*

A deduction which we most likely will have to [backtrack](#backtrack) on.

If solving Skyscrapers [‘properly’](thoughts/imagination-vs-guesswork.md), this means we are ‘imagining’ the deductions in our mind. If they lead to a [contradiction](#contradiction), then we can rule out this hypothetical solution as invalid.


## lane

> *Now that we’ve found where the $6$-skyscraper goes in this lane, solving the rest of the lane becomes much easier.*

A general term for either a **row** or **column** of a puzzle, as well as the [clues](#clue) adjacent to it.

For instance, this is the lane $\text{5 | 1 2 3 4 5 | 1}$:

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|  5  |  1  |  2  |  3  |  4  |  5  |  1  |
|     |     |     |     |     |     |     |

</div>

*See also: [half-lane](#half-lane)*


## lane peak

An $N$-skyscraper in a *NxN* Skyscrapers puzzle.


## look

> *If we look across this [half-lane](#half-lane), we need to be able to see four [skyscrapers](#skyscrapers).*

“Look” is used abstractly to describe considering the cells in a lane.

Pretty difficult to describe technically, but I’m sure you already understand it! For an intuitive explanation, please see the [Skyscraping primer](walkthrough/primer.md).


## obscured

In contrast to a [*visible* skyscraper](#visible).


## open

> *I can solve [closed](#closed) 7x7 Skyscrapers with time, but it takes ingenuity to finish an open 7x7 Skyscrapers.*

In contrast to a [closed](#closed) Skyscrapers, an **open** Skyscrapers does not have clues along every lane, but only a select few. This leaves parts of the edges of the grid ‘open’.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  1  |     |  2  |     |     |
|     |     |     |     |     |     |     |
|  2  |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  4  |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     |     |  3  |     |  1  |     |     |

</div>

With fewer but impactful clues, these Skyscrapers are much more ‘directed’ and challenging.

*Also called “sparse” for historical reasons.*


## peak

> *We’ve found 3 peaks already, but the [clue](#clue) is $4$, so there must be 1 more peak before these 3 peaks.*

A [skyscraper](#skyscraper) that is guaranteed to be visible.

Akin to a “maximum” in mathematics.


## pencil marks

> *This cell could contain a $1$ or $2$, so we’ll write those [candidates](#candidates) in as pencil marks.*

Small numbers placed in a cell to indicate what [candidates](#candidate) *could* go in there:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  2  |***45***|***1234***|     |     |     |  6  |     |
|     |     |     |     |     |     |     |     |

</div>


## puzzle

Refers to the entire [Skyscrapers](#skyscrapers) puzzle, including the [grid](#grid) and [clues](#clue).


## sequence

> *Since the clue is $4$ and we only have 3 [unsolved cells](#unsolved-cell), this [half-lane](#half-lane) must have a sequence.*

An ascending sequence of [skyscrapers](#skyscrapers), when looking across a lane from the [head cell](#head-cell) towards the [lane peak](#lane-peak).

This usually refers to a series of [unsolved cells](#unsolved-cells) with the constraint that they must be ascending. For instance, $\text{| [12] [23] [34]}$ is a sequence that could be solved to $\text{| 1 2 3}$, or $\text{| 2 3 4}$, or any mix such as $\text{| 1 3 4}$.

$\text{| [12] [123] [123]}$, in contrast, would not be a sequence, since it’s not necessarily ascending – it could end up being solved to $\text{| 2 1 3}$.


## skyscraper

> *The $5$-skyscraper must go in this cell.*

A number inside a cell of a Skyscrapers puzzle. As opposed to the a number outside the grid, which is a [clue](#clue).

For instance, a *4x4* Skyscrapers contains $4 \times 4 = 16$ skyscrapers.

$n$-skyscraper refers to the skyscraper of height $n$ (i.e. the number $n$). In an *NxN* Skyscrapers, the $N$-skyscraper refers to the tallest skyscraper of height $N$.


## Skyscrapers

> *We love solving Skyscrapers!*

A **Skyscrapers** puzzle. It’s capitalised since it refers to the *name* of the puzzle, not a [skyscraper](#skyscraper) (number) in the puzzle.

To avoid ambiguity I may sometimes use the fully qualified form “Skyscrapers puzzle”.


## solved cell

> *We’ve got loads of [pencil marks](#pencilmarks), but not many solved cells =(*

A cell which has been definitively assigned a [skyscraper](#skyscraper).

In contrast to an [*unsolved* cell](#unsolved-cell).


## sparse

Another name for an [open](#open) Skyscrapers.


## tail cell

> *Since the tail cell is a $6$ and the [clue](#clue) is $2$, the [head cell](#head-cell) must be a $5$.*

The last cell in a lane.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |  5  |**4**|     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

In this lane, the tail cell is the one containing the $4$-[skyscraper](#skyscraper).

*See also: [head cell](#head-cell)*


## unsolved cell

A cell which has not been definitively assigned a [skyscraper](#skyscraper), and may have multiple [candidates](#candidates) indicated with [pencil marks](#pencilmarks).

In contrast to a [*solved* cell](#solved-cell).


## visible

In contrast to an [*obscured* skyscraper](#obscured).

# Glossary
<!-- #SQUARK live!
| dest = glossary
| capt = (Unofficial) skyscraping jargon
| update = 2026 February 21
-->

This page defines all of the technical quasi-jargon I use throughout this site. This isn’t meant to gatekeep beginners or anything, it just makes referring to a lot of common concepts concise and unambiguous!


## candidates

> *$1$ and $2$ are the only candidates for this cell.*

The numbers in [pencil marks](tech/pencil-marks.md), indicating which [skyscrapers](#skyscraper) could be placed in that cell.


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

A number outside the puzzle grid, indicating how many [skyscrapers](#skyscrapers) are visible in the [lane](#lane) it is adjacent to.


## couple

> Main article: [Technique: Couples](tech/couples)

Pencil marks in 2 cells in a lane, which contain the same pair of digits. 

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :----- | :----- | :----- | :-- |
|     |     |     |        |        |        |     |
|     |     |     |    1   |        |        |     |
|     |     |     |    2   |        |        |     |
|     |     |     |  *34*  |        |        |     |
|     |     |     |  *34*  |        |        |     |
|     |  3  |  4  |    5   |***12***|***12***|     |
|     |     |     |        |        |        |     |

</div>

*Also called “twins” and “pairs”.*


## dense

Synonym for [closed](closed).


## half-lane

One ‘side’ of a [lane](#lane) – the cells from the head cell up to and including the lane peak.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|  3  | *12*| *23*|  5  |*123*|  4  |  2  |
|     |     |     |     |     |     |     |

</div>

The half-lanes in the above lane are $\left[ [12], [23], 5 \right]$ and $\left[ 4, [123], 5 \right]$.


## head cell

> *The head cell can’t be too tall or we won’t be able to satisfy the clue.*

The first cell in a lane.


## lane

> *Now that we’ve found where the $6$-skyscraper goes in this lane, solving the rest of the lane becomes much easier.*

A general term for either a **row** or **column**; any line of skyscrapers in the puzzle grid.


## lane peak

An $N$-skyscraper in a *NxN* Skyscrapers puzzle.


## open

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


## peak

> *We’ve found 3 peaks already, but the clue is $4$, so there must be 1 more peak before these 3 peaks.*

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


## sequence

> *Since the clue is $4$ and we only have 3 unsolved cells, this [half-lane](#half-lane) must have a sequence.*

An ascending sequence of [skyscrapers](#skyscrapers), when looking across a lane from the [head cell](#head-cell) towards the [lane peak](#lane-peak).


## skyscraper

> *The $5$-skyscraper must go in this cell.*

The numbers inside the grid of a Skyscrapers puzzle. (As opposed to the numbers outside the grid, which are [clues](#clue)).

$n$-skyscraper refers to the skyscraper of height $n$ (i.e. the number $n$). In an *NxN* Skyscrapers, the $N$-skyscraper refers to the tallest skyscraper of height $N$.


## Skyscrapers

> *We love solving Skyscrapers!*

A **Skyscrapers** puzzle. It’s capitalised since it refers to the *name* of the puzzle, not a [skyscraper](#skyscraper) (number) in the puzzle.

To avoid ambiguity I may sometimes use the fully qualified “Skyscrapers puzzle”.


## solved cell

> *We’ve got loads of [pencil marks](#pencil-marks), but not many solved cells =(*

A cell which has a definitive [skyscraper](#skyscraper) placed in it – as opposed to an [unsolved cell](#unsolved-cell), which may have multiple [candidates](#candidates) indicated with [pencil marks](#pencil-marks).


## tail cell

The last cell in a lane.


## unsolved cell 

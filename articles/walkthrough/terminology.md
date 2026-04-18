# Skyscraping Terminology
<!-- #SQUARK live!
| dest = walk/terminology
| capt = What’s all this nonsense?
| index = walk
| date = 2026 April 18
| update = 2026 April 18
-->

You’d like to explore all of the content on *Skyscraping*. Why does everything read so cryptically?

Well, talking about puzzles by text is exceptionally difficult, so I’ve standardised some terminology to make everything easier, more consistent and more generalisable.

The [Glossary](../glossary.md) exists as a quick reference with short definitions for anything you come across in *Skyscraping* that could remotely be considered a technical term.

This page is complementry to that, as an structured, ‘let-me-show-you’ walkthrough for introducing the terminology in an intuitive and digestable order. If you’re annoyed by how much terminology there is, hopefully this page helps you understand how it arose out of very natural necessity!


## The Skyscrapers Puzzle

Here’s a *5x5* “Skyscrapers” puzzle. It’s got a 5x5 [**grid**](../glossary.md#grid) with 25 [**cells**](../glossary.md#cells).

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |  3  |     |
|     |     |     |     |  5  |     |     |
|  3  |     |     |     |     |     |  3  |
|  4  |     |     |     |     |     |     |
|  1  |     |     |     |     |  3  |     |
|     |     |     |     |     |     |     |
|     |     |     |  4  |  3  |  2  |     |

</div>

It’s also got quite a few numbers. The numbers inside the grid are the [**skyscrapers**](../glossary.md#skyscrapers), the namesake of the puzzle!

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |  3  |     |
|     |     |     |     |**5**|     |     |
|  3  |     |     |     |     |     |  3  |
|  4  |     |     |     |     |     |     |
|  1  |     |     |     |     |**3**|     |
|     |     |     |     |     |     |     |
|     |     |     |  4  |  3  |  2  |     |

> Right now, the only skyscrapers present in the grid are the $5$ and $3$-skyscrapers.

</div>

The numbers outside the grid are [**clues**](../glossary.md#clues), which help to determine what skyscraper (number) each cell should contain.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |**3**|     |
|     |     |     |     |  5  |     |     |
|**3**|     |     |     |     |     |**3**|
|**4**|     |     |     |     |     |     |
|**1**|     |     |     |     |  3  |     |
|     |     |     |     |     |     |     |
|     |     |     |**4**|**3**|**2**|     |

> Puzzles will usually have several clues. They could be any number, placed anywhere around the grid, but they (alongside pre-solved cells) will produce only 1 valid solution, achievable through only logical deductions (no guesswork).

</div>

A complete Skyscrapers [**puzzle**](../glossary.md#puzzle) consists of both the grid and the clues.


## Solving the Puzzle

When we successfully determine what skyscraper goes inside a cell, we call that cell [**solved**](../glossary.md#solved). When all the cells of the grid have been solved, the puzzle has been solved!

<div class="puzzle solved">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |  3  |     |
|     |  4  |  2  |  3  |  5  |  1  |     |
|  3  |  1  |  4  |  5  |  3  |  2  |  3  |
|  4  |  2  |  3  |  4  |  1  |  5  |     |
|  1  |  5  |  1  |  2  |  4  |  3  |     |
|     |  3  |  5  |  1  |  2  |  3  |     |
|     |     |     |  4  |  3  |  2  |     |

</div>

While solving the puzzle, any cell that hasn’t been solved yet is, well, [**unsolved**](../glossary.md#unsolved).

To help keep track of what skyscrapers could go in an unsolved cell, we often [**pencilmark**](../glossary.md#pencilmark) – so named because on paper one might write them in pencil and erase them out later.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |  3  |     |
|     |     |     |     |  5  |     |     |
|  3  |     |     |     |     |     |  3  |
|  4  |***12***|     |     |     |     |     |
|  1  |     |     |     |     |  3  |     |
|     |     |     |     |     |     |     |
|     |     |     |  4  |  3  |  2  |     |

> We’ve pencilmarked $[12]$ to show that this cell could contain either $1$ or $2$, but not any of $\{345\}$.

</div>

We call those specific possibilities [**candidates**](../glossary.md#candidates).


## Navigating the Grid

This *5x5* grid has 5 horizontal [**rows**](../glossary.md#rows) and 5 vertical [**columns**](../glossary.md#columns). More generally, we call these [**lanes**](../glossary.md#lanes), which could be either horizontal or vertical – the direction doesn’t matter.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |**3**|     |
|     |     |     |     |  5  |**&ensp;**|     |
|  3  |     |     |     |     |**&ensp;**|  3  |
|  4  | *12*|     |     |     |**&ensp;**|     |
|  1  |     |     |     |     |**3**|     |
|     |     |     |     |     |**&ensp;**|     |
|     |     |     |  4  |  3  |**2**|     |

> The right column here is (top-down) $\text{3 | \_ \_ \_ 3 \_ | 2}$. This is a lane with 2 clues and 1 solved cell.

</div>

In a Skyscrapers puzzle of any size, the $1$-skyscraper is the shortest skyscraper. In an *NxN* puzzle, the $N$-skyscraper is the tallest.

The $N$-skyscrapers are so pivotal to solving puzzles that it’s worth giving them a dedicated name. I call them [**lane peaks**](../glossary.md#lane-peaks), since they’re the ‘peak’ of any lane, always visible no matter where you look from.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |  3  |     |
|     |     |     |     |  5  |     |     |
|  3  |     |     |**5**|     |     |  3  |
|  4  | *12*|     |     |     |**5**|     |
|  1  |**5**|     |     |     |  3  |     |
|     |     |**5**|     |     |     |     |
|     |     |     |  4  |  3  |  2  |     |

> At the start of a puzzle, the lane peaks are often the easiest skyscrapers to solve. Since this is a *5x5* puzzle, $N = 5$, so the $N$-skyscrapers are the $5$-skyscrapers.

</div>


## Navigating the Lane

Focusing on a particular lane, the most notable cells are the first and last cells. We call the first cell the [**head cell**](../glossary.md#head-cell) and the last cell the [**tail cell**](../glossary.md#tail-cell).

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |***head***|     |  5  |  3  |***tail***|  2  |

> Note that we are assuming the direction we’re looking is left-to-right.

</div>

The clues of a lane tell us how many skyscrapers are ‘visible’ looking across that lane. We call the skyscrapers we can see [**visible**](../glossary.md#visible), and those that we can’t [**obscured**](../glossary.md#obscured).

Often, we’ll only care about the half of the lane that comes before the lane peak. For instance, here we might only want to worry about the candidates for the first 2 cells.

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |**&ensp;**|**&ensp;**|  5  |  3  |    |  2  |

> We might not care what comes after the $5$, only what comes before.

</div>

In this case, we call this a [**half-lane**](../glossary.md#half-lane).


## Final Notes

That should be more than enough to get you going!

While I can imagine it being overwhelming at first, I hope you can see why I chose to create all this terminology. I know it seems like a lot, but I’ve genuinely tried to only allow ones that are properly deserved. Once you get used to them, who knows, you might start wishing there were more!

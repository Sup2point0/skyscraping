# Pinpoint
<!-- #SQUARK live!
| dest = tech/pinpoint
| capt = Sudoku-style elimination
| index = tech
| date = 2026 February 25
| update = 2026 February 25
-->

When solving Skyscrapers, the skyscraper visibility rules of Skyscrapers usually take centre stage. The Sudoku eliminations become sort of a ‘background’ thing that you just carry out on autopilot.[^autopilot]

[^autopilot]: Personally, I love this setup. For me the rules of Sudoku are too... dry? to warrant a full puzzle, and puzzles that build upon it with an additional constraint (e.g. Futoshiki) are far more fun.

But that doesn’t make them unimportant! Sudoku-style deductions carry a *lot* of weight, and knowing them in-and-out is really beneficial.

I’m sure you’re familiar with the basic rule of Sudoku: each [lane](../glossary.md#lane) (of 9 cells) must contain all the digits $\{123456789\}$ exactly once each, in any order. For Skyscrapers, this means in an *NxN* Skyscrapers, each lane must contain the $\{1...N\}$-skyscrapers once each.

Simple rule, but many ways to apply it. Let’s take a grid of [unsolved cells](../glossary.md#unsolved-cell):

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |       |       |       |       |       |     |
|     |*12345*|*12345*|*12345*|*12345*|*12345*|     |
|     |*12345*|*12345*|*12345*|*12345*|*12345*|     |
|     |*12345*|*12345*|*12345*|*12345*|*12345*|     |
|     |*12345*|*12345*|*12345*|*12345*|*12345*|     |
|     |*12345*|*12345*|*12345*|*12345*|*12345*|     |
|     |       |       |       |       |       |     |

</div>

Suppose we end up solving some cell to be a $5$-skyscraper:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |       |       |       |       |       |     |
|     |*12345*|*12345*|*12345*|*12345*|*12345*|     |
|     |*12345*|*12345*|*12345*|*12345*|*12345*|     |
|     |*12345*|*12345*|*12345*|*12345*|*12345*|     |
|     |*12345*|*12345*|*12345*| **5** |*12345*|     |
|     |*12345*|*12345*|*12345*|*12345*|*12345*|     |
|     |       |       |       |       |       |     |

</div>

Because a lane can only contain one $5$, this eliminates $5$ as a [candidate](../glossary.md#candidates) from this cell’s row and column:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |       |       |       |       |       |     |
|     |*12345*|*12345*|*12345*|***1234***|*12345*|     |
|     |*12345*|*12345*|*12345*|***1234***|*12345*|     |
|     |*12345*|*12345*|*12345*|***1234***|*12345*|     |
|     |***1234***|***1234***|***1234***|   5   |***1234***|     |
|     |*12345*|*12345*|*12345*|***1234***|*12345*|     |
|     |       |       |       |       |       |     |

</div>

Suppose we keep going and manage to deduce 3 more [lane peaks](../glossary.md#lane-peak) ([pencil marks](../glossary.md#pencil-marks) ommitted for clarity):

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |**5**|     |     |     |     |     |
|     |     |     |     |     |**5**|     |
|     |     |     |     |     |     |     |
|     |     |     |     |  5  |     |     |
|     |     |**5**|     |     |     |     |
|     |     |     |     |     |     |     |

</div>

There’s precisely five $5$-skyscrapers in a *5x5* puzzle, so we have one more to find. If we put the pencilmarks in the middle column back, what do we notice?

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |  5  |     |*1234*|     |     |     |
|     |     |     |*1234*|     |  5  |     |
|     |     |     |***12345***|     |     |     |
|     |     |     |*1234*|  5  |     |     |
|     |     |  5  |*1234*|     |     |     |
|     |     |     |     |     |     |     |

</div>

Only the middle cell contains $5$ as a candidate. That’s because every row contains a $5$, except the middle row.

In this situation, we can ***pinpoint*** that the final $5$-skyscraper must go in the middle cell. There’s nowhere else it could go.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |  5  |     |     |     |     |     |
|     |     |     |     |     |  5  |     |
|     |     |     |**5**|     |     |     |
|     |     |     |     |  5  |     |     |
|     |     |  5  |     |     |     |     |
|     |     |     |     |     |     |     |

> If you looked at every skyscraper in a solved puzzle in isolation, it’d have this staggered pattern!

</div>

If you’ve solved any Sudoku or Skyscrapers puzzles before, this will probably already be familiar to you. But you might underestimate how often it pops up, especially in comparison to plain Sudoku.

Because of all the added logical deduction, we can very easily end up with very few candidates in a lane. Take this situation:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |  2  |     |
|  4  |     |     |     |  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |  4  |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Applying [Slide](../cases/slide.md) to the $4$-clue [half-lane](../glossary.md#half-lane), we get a [sequence](../glossary.md#sequence):

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |  2  |     |
|  4  |***12***|***23***|***34***|  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |  4  |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Then for the upper-right cell, using Sudoku-style elimination we get $[123]$ as candidates:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |  2  |     |
|  4  | *12*| *23*| *34*|  5  |***123***|     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |  4  |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

But now look carefully at the top row.

Among all the cells, only one contains $4$ as a candidate. This means we can pinpoint $4$ to that cell. Bingo!

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |  2  |     |
|  4  | *12*| *23*|**4**|  5  |*123*|     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |  4  |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Very simple, but powerful deduction. Always be on the watch out for this, because it can sometimes sneak by you, especially in larger puzzles!

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |  2  |     |     |
|     |     |     |     |     |     |     |     |
|     |  5  |     |     |     |     |     |     |
|  2  | *34*|  2  | *13*|  6  |     |*345*|     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |  6  |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |

> Can you spot a deduction here?

</div>

This example also happens to illustrate why [pencilmarking](pencilmarking.md) can be so essential. What happens if we pencilmark the remaining cell here? (using [Leap of Faith](../cases/leap-of-faith.md))

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |**2**|     |     |
|     |     |     |     |     |***45***|     |     |
|     |  5  |     |     |     |     |     |     |
|  2  | *34*|  2  | *13*|  6  |***134***|*345*|     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |  6  |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

Once we have pencil marks in all cells of a row, we might notice there’s a skyscraper we can pinpoint which we didn’t see before...

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |  2  |     |     |
|     |     |     |     |     | *45*|     |     |
|     |  5  |     |     |     |     |     |     |
|  2  | *34*|  2  | *13*|  6  |*134*|**5**|     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |  6  |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

If we hadn’t pencilmarked, we might’ve missed that! If this were an easier puzzle, we’d probably end up reaching that later on anyway, but in a tough puzzle this could be the *only* deduction we’re able to make, and if we didn’t spot it we’d be stuck.


<br>

# A Curious Crossways
<!-- #SQUARK live!
| dest = solutions/curious-crossways
| capt = 24 May 2025
| index = solutions
| date = 2025 May 24
-->

This was a *5x5* which I thought I could speedrun, but I ended up running into a hitch which took some careful consideration to overcome.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |  1  |
|  4  |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     |     |     |     |     |     |  2  |
|     |     |     |     |  2  |     |     |

</div>

Original puzzle is from [brainbashers.com<sup>↗</sup>](https://www.brainbashers.com/p566608).


## Opening

The start is straightforward, pretty speedrunnable.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |**5**|**1**|
|  4  |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     |     |     |     |     |     |  2  |
|     |     |     |     |  2  |     |     |

</div>

This pinpoints the $5$ skyscraper for the $4$ clue...

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |  5  |  1  |
|**4**|     |     |     |**5**|     |     |
|  3  |     |     |     |     |     |     |
|     |     |     |     |     |     |  2  |
|     |     |     |     |  2  |     |     |

</div>

Which pinpoints that for the lowermost $3$ clue...

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |  5  |  1  |
|  4  |     |     |     |  5  |     |     |
|**3**|     |     |**5**|     |     |     |
|     |     |     |     |     |     |  2  |
|     |     |     |     |  2  |     |     |

</div>

And that pinpoints the $5$ for the vertical $3$ clue, putting the final $5$ in the top-left.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |**3**|     |     |     |     |
|     |**5**|     |     |     |     |     |
|  3  |     |     |     |     |  5  |  1  |
|  4  |     |     |     |  5  |     |     |
|  3  |     |     |  5  |     |     |     |
|     |     |**5**|     |     |     |  2  |
|     |     |     |     |  2  |     |     |

</div>

The only place for $4$ in the left column is in the last row, since $3$ and $4$ clues can’t have a $4$ in front of them.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |  5  |     |     |     |     |     |
|  3  |     |     |     |     |  5  |  1  |
|  4  |     |     |     |  5  |     |     |
|  3  |     |     |  5  |     |     |     |
|     |**4**|  5  |     |     |     |  2  |
|     |     |     |     |  2  |     |     |

</div>

This means the $3$ in the last row must go in front of the leftwards $2$ clue.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |  5  |     |     |     |     |     |
|  3  |     |     |     |     |  5  |  1  |
|  4  |     |     |     |  5  |     |     |
|  3  |     |     |  5  |     |     |     |
|     |  4  |  5  |     |     |**3**|  2  |
|     |     |     |     |  2  |     |     |

</div>

From the upwards $2$ clue we can deduce it has to be $[2, 1]$, and this fills the final cell in the last row with the $1$ skyscraper.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |  5  |     |     |     |     |     |
|  3  |     |     |     |     |  5  |  1  |
|  4  |     |     |     |  5  |     |     |
|  3  |     |     |  5  |**1**|     |     |
|     |  4  |  5  |**1**|**2**|  3  |  2  |
|     |     |     |     |  2  |     |     |

</div>


## Marking

Now we start making marks, except... nothing really pops up?

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |        |    3   |        |        |         |     |
|     |    5   |        |        |***34***|         |     |
|  3  |        |        |        |***34***|    5    |  1  |
|  4  |***12***|***23***|***34***|    5   |***124***|     |
|  3  |***23***|***34***|    5   |    1   | ***24***|     |
|     |    4   |    5   |    1   |    2   |    3    |  2  |
|     |        |        |        |    2   |         |     |

</div>

With nothing to really go off, I just marked up some more of the grid. The interesting “crossways” we’ve got here is the two $3$ clues we’ve got in the upper-left, both opposite terminal $5$ skyscrapers. So by [Middle Ground](../cases/middle-ground.md) we know the second cell in each of those lanes can’t be a $3$.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |         |     3   |     |     |     |     |
|     |     5   |***123***|     | *34*|     |     |
|  3  |***123***|***124***|     | *34*|  5  |  1  |
|  4  |   *12*  |   *23*  | *34*|  5  |*124*|     |
|  3  |   *23*  |   *34*  |  5  |  1  | *24*|     |
|     |     4   |     5   |  1  |  2  |  3  |  2  |
|     |         |         |     |  2  |     |     |

</div>


## Crux

At this point I was stuck. The lower $4$ and $3$ clues don’t really give anything, so we know the secret must lie in the interaction of the two $3$ clues.

It turned out to be exactly that! Let’s think about the vertical $3$ clue. If the first cell were $1$, we could have $[1, 4, 2, 3, 5]$, which is chill.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |  5  |**1**|     | *34*|     |     |
|  3  |*123*|**4**|     | *34*|  5  |  1  |
|  4  |*12* | *23*| *34*|  5  |*124*|     |
|  3  |*23* | *34*|  5  |  1  | *24*|     |
|     |  4  |  5  |  1  |  2  |  3  |  2  |
|     |     |     |     |  2  |     |     |

</div>

*But* if we put a $2$ there, $[2, 4, -, -, 5]$ wouldn’t leave any place for $1$. So this forces the $1$ into the second cell...

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |  5  |**2**|     | *34*|     |     |
|  3  |*123*|**1**|     | *34*|  5  |  1  |
|  4  |*12* | *23*| *34*|  5  |*124*|     |
|  3  |*23* | *34*|  5  |  1  | *24*|     |
|     |  4  |  5  |  1  |  2  |  3  |  2  |
|     |     |     |     |  2  |     |     |

</div>

But then our only possible order is $[2, 1, 3, 4, 5]$, which would be 4 visible skyscrapers, not 3.

Hence there aren’t any valid configurations for the column if we put the $2$ in the first cell. So we eliminate it from the options.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |    3   |     |     |     |     |
|     |  5  |***13***|     | *34*|     |     |
|  3  |*123*|  *124* |     | *34*|  5  |  1  |
|  4  |*12* |   *23* | *34*|  5  |*124*|     |
|  3  |*23* |   *34* |  5  |  1  | *24*|     |
|     |  4  |    5   |  1  |  2  |  3  |  2  |
|     |     |        |     |  2  |     |     |

</div>

Now do the same for the $2$ in the second cell. If we start the column with $1$, we have $[1, 2, -, -, 5]$, which will exceed 3 visible skyscrapers no matter what. If we start with $3$, we have $[3, 2, -, -, 5]$. But notice the third cell can only be $3$ or $2$, so we can’t use both of them in the first two cells.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |    3   |     |     |     |     |
|     |  5  |  **3** |     | *34*|     |     |
|  3  |*123*|  **2** |     | *34*|  5  |  1  |
|  4  |*12* |***23***| *34*|  5  |*124*|     |
|  3  |*23* |  *34*  |  5  |  1  | *24*|     |
|     |  4  |    5   |  1  |  2  |  3  |  2  |
|     |     |        |     |  2  |     |     |

</div>

Like before, we can conclude the second cell can’t be a $2$.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |    3   |     |     |     |     |
|     |  5  |  *13*  |     | *34*|     |     |
|  3  |*123*|***14***|     | *34*|  5  |  1  |
|  4  |*12* |   *23* | *34*|  5  |*124*|     |
|  3  |*23* |   *34* |  5  |  1  | *24*|     |
|     |  4  |    5   |  1  |  2  |  3  |  2  |
|     |     |        |     |  2  |     |     |

</div>

Now there’s only one place for the $2$ in that column!

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |  5  |*13* |     | *34*|     |     |
|  3  |*123*|*14* |     | *34*|  5  |  1  |
|  4  |*12* |**2**| *34*|  5  |*124*|     |
|  3  |*23* | *34*|  5  |  1  | *24*|     |
|     |  4  |  5  |  1  |  2  |  3  |  2  |
|     |     |     |     |  2  |     |     |

</div>

After that fiddly deduction it’s plain sailing, and we clear the rest with Sudoku deductions.


## Solve

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |  5  |*13* |     | *34*|     |     |
|  3  |***23***|*14* |     | *34*|  5  |  1  |
|  4  |**1**|  2  | *34*|  5  |***14***|     |
|  3  |*23* | *34*|  5  |  1  | *24*|     |
|     |  4  |  5  |  1  |  2  |  3  |  2  |
|     |     |     |     |  2  |     |     |

</div>

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |  5  |*13* |     | *34*|     |     |
|  3  |*23* |*14* |     | *34*|  5  |  1  |
|  4  |  1  |  2  | *34*|  5  |**4**|     |
|  3  |*23* | *34*|  5  |  1  |**2**|     |
|     |  4  |  5  |  1  |  2  |  3  |  2  |
|     |     |     |     |  2  |     |     |

</div>

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |  5  |*13* |     | *34*|**1**|     |
|  3  |*23* |*14* |     | *34*|  5  |  1  |
|  4  |  1  |  2  |**3**|  5  |  4  |     |
|  3  |**3**|*34* |  5  |  1  |  2  |     |
|     |  4  |  5  |  1  |  2  |  3  |  2  |
|     |     |     |     |  2  |     |     |

</div>

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |  5  |*13* |     | *34*|  1  |     |
|  3  |**2**|*14* |     | *34*|  5  |  1  |
|  4  |  1  |  2  |  3  |  5  |  4  |     |
|  3  |  3  |**4**|  5  |  1  |  2  |     |
|     |  4  |  5  |  1  |  2  |  3  |  2  |
|     |     |     |     |  2  |     |     |

</div>

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |  5  |**3**|     | *34*|  1  |     |
|  3  |  2  |**1**|     | *34*|  5  |  1  |
|  4  |  1  |  2  |  3  |  5  |  4  |     |
|  3  |  3  |  4  |  5  |  1  |  2  |     |
|     |  4  |  5  |  1  |  2  |  3  |  2  |
|     |     |     |     |  2  |     |     |

</div>

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |  5  |  3  |     |**4**|  1  |     |
|  3  |  2  |  1  |     |**3**|  5  |  1  |
|  4  |  1  |  2  |  3  |  5  |  4  |     |
|  3  |  3  |  4  |  5  |  1  |  2  |     |
|     |  4  |  5  |  1  |  2  |  3  |  2  |
|     |     |     |     |  2  |     |     |

</div>

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |
|     |**5**|**3**|**2**|**4**|**1**|     |
|  3  |**2**|**1**|**4**|**3**|**5**|  1  |
|  4  |**1**|**2**|**3**|**5**|**4**|     |
|  3  |**3**|**4**|**5**|**1**|**2**|     |
|     |**4**|**5**|**1**|**2**|**3**|  2  |
|     |     |     |     |  2  |     |     |

</div>

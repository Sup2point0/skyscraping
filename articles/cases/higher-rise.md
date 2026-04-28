# Case: Higher-Rise
<!-- #SQUARK live!
| dest = cases/higher-rise
| capt = $N$ pinned between $3$-clues
| index = cases
| date = 7 April 2026
| update = 28 April 2026
-->

<div class="case">

  <div class="quicklinks">

  [Explanation](#explanation) · [Challenges](#challenges)

  </div>

In a *5x5* Skyscrapers, when the [lane peak](../glossary.md#lane-peak) is exactly halfway between two $3$-clues, a $2$ or $3$-skyscraper in one of the [edge cells](../glossary.md#edge-cell) pinpoints the $1$-skyscraper to the other edge cell.

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |     |  5  |     |     |  2  |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |***23***|     |  5  |     |     |  2  |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  | *23*|     |  5  |     |**1**|  2  |

  </div>
</div>

</div>


## Explanation

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |     |  5  |     |     |  3  |

</div>

Via [Meet in the Middle](meet-in-the-middle.md), we obtain 2 [dense sequences](../glossary.md#dense-sequence) in each of the [half-lanes](../glossary.md#half-lane):

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |***low***|***high***|  5  |***high***|***low***|  3  |

</div>

Every skyscraper must be visible. For the $1$-skyscraper, that means it can only go in one of the edge cells.

If one of them becomes taken, then the $1$ is forced to go in the other.

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |**X**|     |  5  |     |     |  3  |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |  X  |     |  5  |     |**1**|  3  |

  </div>
</div>

If that other edge cell was taken by a $2$, then we’re now left with 2 [unsolved cells](../glossary.md#unsolved-cell) containing the [candidates](../glossary.md#candidate) $[34]$.

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |**2**|     |  5  |     |  1  |  3  |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |  2  |***34***|  5  |***34***|  1  |  3  |

  </div>
</div>

If it was instead taken by a $3$, then we can solve the entire lane! That half-lane must have the sequence $(345)$, and on the other side we must have $(125)$.

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |**3**|     |  5  |     |  1  |  3  |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |  3  |**4**|  5  |**2**|  1  |  3  |

  </div>
</div>

Notice we can’t say anything much about the converse – if one terminal cell is taken up by a $1$, the following cell could still be any of $\{234\}$, and on the other side we just get $\text{| [23] [34]}$.

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |**1**|     |  5  |     |     |  3  |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |  1  |***234***|  5  |***34***|***23***|  3  |

  </div>
</div>

It’s a very nice symmetry, and only exists in odd-size puzzles. The next time you encounter it is *7x7*, but there it gets unwieldy; with a *5x5*, it’s at the perfect size to have some nice structure and tight deductions.


## Challenges

Solve as much as you can (including pencilmarks) with the available context!

### Puzzle 1
<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |  5  |     |     |     |     |     |
|  3  |     |     |     |     |     |  3  |
|     |  2  |     |     |     |     |     |
|     |  3  |     |     |     |     |     |

</div>

#### Solution
<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |  5  |     |     |     |     |     |
|  3  |**3**|**4**|**5**|**2**|**1**|  3  |
|     |  2  |     |     |     |     |     |
|     |  3  |     |     |     |     |     |

</div>

#### Explanation
First, we can pinpoint the lane peak by [Meet in the Middle](meet-in-the-middle.md).

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |  5  |     |     |     |     |     |
|  3  |     |     |**5**|     |     |  3  |
|     |  2  |     |     |     |     |     |
|     |  3  |     |     |     |     |     |

</div>

Then, in the left column we need a $3$ or $4$ between the $2$ and $5$.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |  5  |     |     |     |     |     |
|  3  |***34***|     |  5  |     |     |  3  |
|     |  2  |     |     |     |     |     |
|     |  3  |     |     |     |     |     |

</div>

Now we can apply Higher-Rise! Since the $1$ isn’t in the left edge cell, it must be in the right edge cell.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |  5  |     |     |     |     |     |
|  3  | *34*|     |  5  |     |**1**|  3  |
|     |  2  |     |     |     |     |     |
|     |  3  |     |     |     |     |     |

</div>

Also, notice the left edge cell can’t actually contain a $4$, since then we wouldn’t be able to see 3 skyscrapers. That leaves $3$ as the only option.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |  5  |     |     |     |     |     |
|  3  |**3**|     |  5  |     |  1  |  3  |
|     |  2  |     |     |     |     |     |
|     |  3  |     |     |     |     |     |

> If we had $4$, we’d only see $(45)$, so we wouldn’t be able to satisfy the $3$-clue.

</div>

So we must then have $\text{| 3 4 5}$ in the left half-lane, which then makes the other half-lane $\text{| 1 2 5}$.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |  5  |     |     |     |     |     |
|  3  |  3  |**4**|  5  |**2**|  1  |  3  |
|     |  2  |     |     |     |     |     |
|     |  3  |     |     |     |     |     |

</div>

### Puzzle 2
<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |  3  |     |     |
|     |     |  2  |     |     |     |     |
|     |     |     |     |     |     |  2  |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |  3  |     |     |

</div>

#### Solution
<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |  3  |     |     |
|     |     |  2  |     |**1**|     |     |
|     |     |     |     |***23***|***34***|  2  |
|     |     |     |     |**5**|     |     |
|     |     |     |     |**4**|     |     |
|     |     |     |     |***23***|     |     |
|     |     |     |     |  3  |     |     |

</div>

#### Explanation
As usual, we can pinpoint the lane peak by Meet in the Middle.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |  3  |     |     |
|     |     |  2  |     |     |     |     |
|     |     |     |     |     |     |  2  |
|     |     |     |     |**5**|     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |  3  |     |     |

</div>

From here, it might not be clear where to proceed.

The key lies in considering the $4$-skyscraper. There are only 2 cells it can go in:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |  3  |     |     |
|     |     |  2  |     |     |     |     |
|     |     |     |     |***4***|     |  2  |
|     |     |     |     |  5  |     |     |
|     |     |     |     |***4***|     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |  3  |     |     |

</div>

However, notice the $2$-clue on the right, and consider that upper cell carefully.

By [Ascendant](ascendant.md) we know that in a $2$-clue half-lane, the $4$ can go anywhere *except* the second cell. That means $4$ can’t go in that cell, which pinpoints it to the lower cell!

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |  3  |     |     |
|     |     |  2  |     |     |     |     |
|     |     |     |     |~~4~~|     |  2  |
|     |     |     |     |  5  |     |     |
|     |     |     |     |**4**|     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |  3  |     |     |

> If we place the $4$ in the upper cell, we wouldn’t be able to satisfy the $2$-clue.

</div>

Now let’s start pencilmarking. Normally, the top edge cell could be $[123]$.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |  3  |     |     |
|     |     |  2  |     |***123***|     |     |
|     |     |     |     |     |     |  2  |
|     |     |     |     |  5  |     |     |
|     |     |     |     |  4  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |  3  |     |     |

</div>

But the $2$ has already been used in the top row, so we can eliminate it as a candidate. We also can’t have $3$ – we’d need $(345)$, but the $4$ has been used on the other side of the lane peak.

Hence we’re left with just $1$, solving the cell.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |  3  |     |     |
|     |     |  2  |     |**1**|     |     |
|     |     |     |     |     |     |  2  |
|     |     |     |     |  5  |     |     |
|     |     |     |     |  4  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |  3  |     |     |

</div>

This is as far as we can get, and we don’t have enough information to solve any more cells. To finish, we’ll pencilmark in the remaining candidates to set us up for future deductions.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |  3  |     |     |
|     |     |  2  |     |  1  |     |     |
|     |     |     |     |***23***|***34***|  2  |
|     |     |     |     |  5  |     |     |
|     |     |     |     |  4  |     |     |
|     |     |     |     |***23***|     |     |
|     |     |     |     |  3  |     |     |

</div>

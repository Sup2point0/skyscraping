# Case: High-Rise
<!-- #SQUARK live!
| dest = cases/high-rise
| capt = $N$ pinned between $2$-clues
| index = cases
| update = 2026 April 18
-->

<div class="case">

  <div class="quicklinks">

  [Examples](#examples) · [Explanation](#explanation)

  </div>

When a [lane](../glossary.md#lane) has $2$-[clues](../glossary.md#clue) on both sides, one [head cell](../glossary.md#head-cell) must contain the $N-1$ skyscraper.

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |     |     |     |     |  2  |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |***N-1***|     |     |     |***N-1***|  2  |

  </div>
</div>

</div>


## Examples

### Case 1
<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |     |     |     |     |     |  2  |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

The 2 possibilities are:

<div class="puzzles">
  <div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |**4**|     |     |     |     |  2  |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

  </div>

  <div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |     |     |     |     |**4**|  2  |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

  </div>
</div>

### Case 2
<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |     |     |     |     |     |  2  |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

As in case 1, we note the $4$ must go in one of the head cells of the row:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |***4***|     |     |     |***4***|  2  |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

However, notice in the left column, the $4$ cannot go in the 2nd cell, since then there would be no way to have 2 skyscrapers visible in that column.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |~~2~~|     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |~~4~~|     |     |     | *4* |  2  |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

> We can’t place the lane peak before the $4$, since then we see only $(5)$, but if we put it after, we see $(x45)$.

</div>

That eliminates the $4$ from that cell, leaving it with just the other head cell to go in.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |     |     |     |     |**4**|  2  |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>


## Explanation

From [Ascendant](ascendant.md) we know in a half-lane with a $2$-clue, the $N-1$ skyscraper must either be past-peak or in the head cell.

When we have two $2$-clues on either side, though, we get an interesting crossfire of these constraints.

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |     |  5  |     |     |  2  |

</div>

Let’s start with the left half-lane. The $N-1$ skyscraper is $4$. It could go in the head cell, in which case happy days; but suppose it doesn’t. What then?

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |**3**|     |  5  |     |     |  2  |

> Let’s take the head cell to not be $4$, but a $3$, for example.

</div>

Well, it must be past-peak.

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |  3  |     |  5  |***4***|***4***|  2  |

</div>

But wait, we’ve got the restrictions from the $2$-clue on the other side too!

From the perspective of the other half-lane, the $4$ is pre-peak, which means it must go in the head cell.

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |  3  |     |  5  |     |**4**|  2  |

</div>

The same logic applies for the other side, since it’s all symmetric. And that’s it!

Delightfully simple, but very powerful.

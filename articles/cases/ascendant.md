# Case: Ascendant
<!-- #SQUARK live!
| dest = cases/ascendant
| capt = The clue of $2$
| index = cases
| date = 2026 May 18
| update = 2026 June 12
-->

<div class="case">

  <div class="quicklinks">

<!-- TODO examples -->
  [Explanation](#explanation)

  </div>

In a $2$-clue [lane](../glossary.md#lane), the $N-1$ skyscraper must either be in the [head cell](../glossary.md#head-cell) or [past-peak](../glossary.md#past-peak).

<div class="deduction">
  <div class="puzzle lane">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |     |     |  7  |     |     |     |     |

  </div>
  
  <div class="puzzle lane">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |***6***|     |     |  7  |***6***|***6***|***6***|     |

  </div>
</div>

### Recursion
If the $N-1$ skyscraper is past-peak, this case recurses with the $N-2$ skyscraper, $N-3$, and so on.

<div class="deduction">
  <div class="puzzle lane">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |     |  N  | ... |*N-1*| ... |*N-k*|     |

  </div>
  
  <div class="puzzle lane">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |***N-k-1***|     |  N  | ... |*N-1*| ... |*N-k*|     |

  </div>
</div>

</div>


## Explanation

Really, this case arises because the $N-1$ skyscraper cannot be both [pre-peak](../glossary.md#pre-peak) and not in the head cell (in a $2$-clue lane).

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |  5  |     |  6  |     |     |     |

</div>

If this is the case, the $N$ and $N-1$ are guaranteed to be [visible](../glossary.md#visible). But we also have unsolved cells before the $N$, of which at least 1 will be visible too. This means we’ll have at least 3 skyscrapers visible in total, which [contradicts](../glossary.md#contradiction) the $2$-clue.

<div class="puzzle lane contradiction">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|~~2~~|**&ensp;**|  5  |     |  6  |     |     |     |

> This cell before the $5$-skyscraper ($N-1$) must be shorter than both $5$ and $6$, so must be visible. But now we have 3 visible skyscrapers, not 2 as required!

</div>

Therefore, if the $N-1$ is pre-peak, it *has* to go in the head cell.

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |**5**|     |     |  6  |     |     |     |

> The only pre-peak cell for the $5$ is the head cell so it obscures the other pre-peak skyscrapers.

</div>

If it’s past-peak, well, then it makes no difference to the [half-lane](../glossary.md#half-lane) where it goes, so it can be anywhere.

<div class="puzzles">
  <div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |     |     |  6  |**5**|     |     |

  </div>
  
  <div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |     |     |  6  |     |**5**|     |

  </div>

</div>

<div class="puzzle">

> Both of these are possible, since we’re outside the half-lane so the $2$-clue can’t affect us.

</div>


## See Also

- [Case: Blockade](blockade.md)
- [Case: High-Rise](high-rise.md)

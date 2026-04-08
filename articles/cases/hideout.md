# Case: Hideout
<!-- #SQUARK live!
| dest = cases/hideout
| capt = Obscured skyscrapers
| index = cases
| date = 2026 April 7
| update = 2026 April 8
-->

<div class="case">

If we have determined that the minimum number of guaranteed [peaks](../glossary.md#peaks) in a [half-lane](../glossary.md#half-lane) satisfies the [clue](../glossary.md#clue), then we can deduce that some intermediate [cells](../glossary.md#cells) must be [obscured](../glossary.md#obscured).

<div class="deduction">
  <div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |  4  |     |     |  6  |     |     |

  </div>

  <div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |  4  |***123***|***123***|  6  |     |     |

  </div>

  <div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |  4  |*123*|*123*|  6  |**5**|     |

  </div>
</div>

</div>

During [peak descent](../tech/peak-descent.md) we find cells that are guaranteed to be peaks. Here, we have 3 guaranteed peaks – the [solved cells](../glossary.md#solved-cells) containing the $4$ and $6$ skyscrapers, as well as the [unsolved](../glossary.md#unsolved) [head cell](../glossary.md#head-cell).

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |**&ensp;**|**4**|     |     |**6**|     |     |

> These 3 cells are guaranteed to be visible.

</div>

This means we’re *already* guaranteed to satisfy the clue. Which means we can’t then have another peak between the $4$ and $6$ – since then we’d have not 3, but 4 skyscrapers [visible](../glossary.md#visible).

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|~~3~~|**&ensp;**|**4**|**5**|     |**6**|     |     |

> If we had another peak ($5$) in between the $4$ and $6$, we’d have 4 cells guaranteed to be visible, [contradicting](../glossary.md#contradiction) the $3$-clue.

</div>

This means those intermediate cells must be obscured, i.e. shorter than $4$.

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |  4  |***123***|***123***|  6  |     |     |

> $\{123\}$ are the available skyscrapers shorter than $4$.

</div>

In this situation, this also lets us [pinpoint](../tech/pinpoint.md) the $5$. It can’t go in the head cell, so it must be in the [tail cell](../glossary.md#tail-cell).

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |  4  |*123*|*123*|  6  |**5**|     |

</div>

<!-- TODO? more to say? -->

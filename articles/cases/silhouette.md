# Case: Silhouette
<!-- #SQUARK live!
| dest = cases/silhouette
| capt = Clue of $1$
| index = cases
| update = 2026 April 18
-->

<div class="case">

  <div class="quicklinks">

  [Examples](#examples) · [Explanation](#explanation)

  </div>

A [half-lane](../glossary.md#half-lane) with a [clue](../glossary.md#clue) of $1$ must have the $N$-skyscraper in the [head cell](../glossary.md#head-cell).

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  1  |     |     |     |     |     |     |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  1  |**N**|     |     |     |     |     |

  </div>
</div>

</div>


## Examples

### Case 1
<div class="deduction">
  <div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  1  |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |  1  |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

  </div>

  <div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  1  |     |     |     |     |
|     |     |**5**|     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |**5**|  1  |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

  </div>
</div>


## Explanation

A $1$-clue means we can only [see](../glossary.md#visible) 1 skyscraper. The only way to achieve this is if we see the tallest skyscraper (the $N$-skyscraper), [obscuring](../glossary.md#obscured) all the rest behind it.

If we picked any other skyscraper as our 1 visible skyscraper, we’d still be able to see the $N$-skyscraper behind it as well, since the $N$-skyscraper is taller than all other skyscrapers.

<!-- TODO add illustration -->

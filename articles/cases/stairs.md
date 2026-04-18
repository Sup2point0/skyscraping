# Case: Stairs
<!-- #SQUARK live!
| dest = cases/stairs
| capt = Clue of $N$
| index = cases
| update = 2026 April 18
-->

<div class="case">

  <div class="quicklinks">

  [Examples](#examples) · [Explanation](#explanation)

  </div>

A [half-lane](../glossary.md#half-lane) with a [clue](../glossary.md#clue) of $N$ must have the solution $\text{| 1 2 3 ... } (N-1) \ N$.

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  N  |     |     |     |     |     |  .  |

  </div>
  
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  N  |**1**|**2**|**...**|**N-1**|**N**|  .  |

  </div>
</div>

</div>


## Examples

<div class="deduction">
  <div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |  5  |     |     |     |     |

  </div>
  
  <div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |**5**|     |     |     |     |
|     |     |**4**|     |     |     |     |
|     |     |**3**|     |     |     |     |
|     |     |**2**|     |     |     |     |
|     |     |**1**|     |     |     |     |
|     |     |  5  |     |     |     |     |

  </div>
</div>


## Explanation

An $N$-clue means we can see $N$ skyscrapers, so all the skyscrapers are visible. The only ordering that achieves this is where all the skyscrapers are in ascending order.

Any other ordering, and we wouldn’t be able to see all the skyscrapers – we’d have a taller one blocking a shorter one behind it!

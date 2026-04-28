# Case: Meet in the Middle
<!-- #SQUARK live!
| dest = cases/meet-in-the-middle
| capt = $C_1 + C_2 = N+1$
| index = cases
| update = 2026 April 28
-->

<div class="case">

  <div class="quicklinks">

  [Examples](#examples) · [Explanation](#explanation)

  </div>

When we have a [lane](../glossary.md#lane) with [clues](../glossary.md#clue) on both sides that add up to $N+1$, we can pinpoint the [lane peak](../glossary.md#lane-peak).

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |     |**6**|     |     |     |  4  |

</div>

</div>


## Examples

### Case 1
<div class="puzzle">

|||||||
| :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|  2  |     |     |     |     |  3  |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |

</div>

The clues add up to $2 + 3 = 5$, which is $1$ above $4$ (since this a *4x4* puzzle), so the case applies.

<div class="puzzle">

|||||||
| :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|  2  |     |**4**|     |     |  3  |
|     |     |     |     |     |     |
|     |     |     |     |     |     |
|     |     |     |     |     |     |

</div>

### Case 2
<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  3  |  3  |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |  5  |  4  |  3  |     |     |     |

</div>

This is a *6x6* puzzle, so we require a sum of $6 + 1 = 7$.

$2 + 5 = 7$ and $3 + 4 = 7$, so we can pinpoint the lane peaks in those lanes.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  3  |  3  |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |**6**|     |     |     |     |     |
|     |     |     |**6**|     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |  5  |  4  |  3  |     |     |     |

</div>

We can’t apply the case to the remaining lane, but we can actually still pinpoint the $6$! Together, the $3$-clues constrict it to these two cells:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  3  |  3  |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |  6  |     |     |     |     |     |
|     |     |     |  6  |***6***|     |     |     |
|     |     |     |     |***6***|     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |  5  |  4  |  3  |     |     |     |

</div>

But of course, in the upper cell’s row the $6$ has already been taken, so we’re left with just the lower cell.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  3  |  3  |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |  6  |     |     |     |     |     |
|     |     |     |  6  |     |     |     |     |
|     |     |     |     |**6**|     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |  5  |  4  |  3  |     |     |     |

</div>


## Explanation

Take a look at the constraints on where the $6$ can go produced by the $3$ and $4$ clues:

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |     |***6***| *6* | *6* | *6* |     |
|     | *6* | *6* |***6***|     |     |     |  4  |

</div>

There’s only 1 spot for the $6$!

This happens whenever the 2 clues add up to $N+1$, which is in fact the highest any 2 opposite clues can ever add up to. If they added up to more, the lane would be unsolvable!

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|~~4~~|     |     |     |     |     |     |~~4~~|
|  4  |     |     |     | *6* | *6* | *6* |     |
|     | *6* | *6* | *6* |     |     |     |  4  |

> Nowhere for $6$ to go!

</div>

This deduction is a small reason why [closed](../glossary.md#closed) Skyscrapers are easier than [open](../glossary.md#open) ones – since every clue has an opposite clue, it’s far more likely you’ll be able to use this deduction to pinpoint a lane peak!

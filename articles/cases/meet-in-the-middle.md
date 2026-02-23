# Case: Meet in the Middle
<!-- #SQUARK live!
| dest = cases/meet-in-the-middle
| capt = $C_1 + C_2 = N+1$
| index = cases
| update = 2026 February 23
-->

When we have a [lane](../glossary.md#lane) with [clues](../glossary.md#clue) on both sides that add up to $N+1$, we can pinpoint the [lane peak](../glossary.md#lane-peak).

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |     |     |**6**|     |     |     |  4  |
|     |     |     |     |     |     |     |     |

</div>

Take a look at the constraints on where the $6$ can go produced by the $3$ and $4$ clues:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |     |     |***6***| *6* | *6* | *6* |     |
|     | *6* | *6* |***6***|     |     |     |  4  |
|     |     |     |     |     |     |     |     |

</div>

There’s only 1 spot for the $6$!

This happens whenever the 2 clues add up to $N+1$, which is in fact the highest any 2 opposite clues can ever add up to. If they added up to more, the lane would be unsolvable!

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|~~4~~|     |     |     |     |     |     |~~4~~|
|  4  |     |     |     | *6* | *6* | *6* |     |
|     | *6* | *6* | *6* |     |     |     |  4  |
|     |     |     |     |     |     |     |     |

> Nowhere for $6$ to go!

</div>

This deduction is a small reason why [closed](../glossary.md#closed) Skyscrapers are easier than [open](../glossary.md#open) ones – since every clue has an opposite clue, it’s far more likely you’ll be able to use this deduction to pinpoint a lane peak!

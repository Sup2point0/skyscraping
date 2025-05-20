# Case: Blockade
<!-- #SQUARK live!
| dest = cases/blockade
| capt = $N$ opposite clue of $2$
| index = cases
| date = 2025 May 20
-->

When we have a clue of $2$, and skyscraper $N$ is at the back of that lane, then we know skyscraper $N-1$ must lie immediately in front of that clue.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |**4**|     |     |     |  5  |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

The $N-1$ blocks all skyscrapers behind it except the tallest one. If it weren’t at the front, we’d be able to see more in front of it, leaving at least 3 skyscrapers in view.

> [!Tip]
> This is reminiscent of [Singularity](singularity.md).

This deduction only applies if $N$ is at the **very end of the lane**. If it’s not, then $N-1$ could be hiding behind it. In that case we’d have [Haven](haven.md).

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  | *4* |     |     |  5  | *4* |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

However, notice that if the cell(s) behind the $N$ can’t contain $N-1$, then the only place for the $N-1$ to go is at the front of the lane.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |**4**|     |     |  5  |     |     |
|     |     |     |     |     |  4  |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

It’s like this the lane has shrunk such that $N$ is effectively at the back.

So overall, if $N-1$ can go behind $N$ then anything could happen. But if it can’t hide, then it must be directly in front of the $2$ clue.

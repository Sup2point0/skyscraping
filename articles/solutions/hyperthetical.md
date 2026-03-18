# Solution: Hyperthetical
<!-- #SQUARK live!
| dest = solutions/hyperthetical
| index = solutions
| date = 2026 March 17
| update = 2026 March 17
-->

Solving this involved some pretty insane [hypothetical deductions](../glossary.md#hypothetical-deduction).

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |  3  |  1  |     |     |     |     |
|     |     |     |     |     |     |  3  |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |  5  |
|     |     |     |     |     |     |     |     |
|  4  |     |     |  3  |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |  4  |     |  3  |  3  |     |     |

</div>


## Opening

The opening is fairly long and painful. We'll start by [skylining](../tech/skylining.md) as always.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |  3  |  1  |     |     |     |     |
|     |     |     |**6**|     |     |  3  |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |  5  |
|     |     |     |     |     |     |     |     |
|  4  |     |     |  3  |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |  4  |     |  3  |  3  |     |     |

</div>

By [Meet in the Middle](../cases/meet-in-the-middle.md) we can find another [lane peak]().

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |  3  |  1  |     |     |     |     |
|     |     |     |  6  |     |     |  3  |     |
|     |     |     |     |     |     |     |     |
|     |     |**6**|     |     |     |     |  5  |
|     |     |     |     |     |     |     |     |
|  4  |     |     |  3  |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |  4  |     |  3  |  3  |     |     |

</div>

By [firing range](../tech/firing-range.md) we can find another.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |  3  |  1  |     |     |     |     |
|     |     |     |  6  |     |     |  3  |     |
|     |     |     |     |     |     |     |     |
|     |     |  6  |     |     |     |     |  5  |
|     |     |     |     |     |     |     |     |
|  4  |     |     |  3  |     |     |**6**|     |
|     |     |     |     |     |     |     |     |
|     |     |  4  |     |  3  |  3  |     |     |

</div>

This also [pinpoints](../tech/pinpoint.md) one more.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |  3  |  1  |     |     |     |     |
|     |     |     |  6  |     |     |  3  |     |
|     |     |     |     |     |     |     |     |
|     |     |  6  |     |     |     |     |  5  |
|     |     |     |     |     |     |     |     |
|  4  |     |     |  3  |     |     |  6  |     |
|     |**6**|     |     |     |     |     |     |
|     |     |  4  |     |  3  |  3  |     |     |

</div>

> Unfortunately, the last 2 lane peaks will come ...much later.

By [Blockade](../cases/blockade.md) we can also solve the $2$-clue [half-lane]() on the left.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |  3  |  1  |     |     |     |     |
|     |**5**|     |  6  |     |     |  3  |     |
|     |     |     |     |     |     |     |     |
|     |     |  6  |     |     |     |     |  5  |
|     |     |     |     |     |     |     |     |
|  4  |     |     |  3  |     |     |  6  |     |
|     |  6  |     |     |     |     |     |     |
|     |     |  4  |     |  3  |  3  |     |     |

</div>

Finally, we'll fill in the candidates for the $5$-clue half-lane.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |  3  |  1  |     |     |     |     |
|     |  5  |     |  6  |     |     |  3  |     |
|     |     |     |     |     |     |     |     |
|     |     |  6  |***45***|***34***|***23***|***12***|  5  |
|     |     |     |     |     |     |     |     |
|  4  |     |     |  3  |     |     |  6  |     |
|     |  6  |     |     |     |     |     |     |
|     |     |  4  |     |  3  |  3  |     |     |

</div>

That wraps up the opening, and now we look for the non-obvious!


## The Long Road Ahead

The most fruitful lane here will be the $4$-clue row. First, we know the [head cell]() can only contain $[123]$.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |  3  |  1  |     |     |     |     |
|     |  5  |     |  6  |     |     |  3  |     |
|     |     |     |     |     |     |     |     |
|     |     |  6  | *45*| *34*| *23*| *12*|  5  |
|     |     |     |     |     |     |     |     |
|  4  |***123***|     |  3  |     |     |  6  |     |
|     |  6  |     |     |     |     |     |     |
|     |     |  4  |     |  3  |  3  |     |     |

</div>

However, $3$ is already taken in the lane, so we're left with $[12]$.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |  3  |  1  |     |     |     |     |
|     |  5  |     |  6  |     |     |  3  |     |
|     |     |     |     |     |     |     |     |
|     |     |  6  | *45*| *34*| *23*| *12*|  5  |
|     |     |     |     |     |     |     |     |
|  4  |***12***|     |  3  |     |     |  6  |     |
|     |  6  |     |     |     |     |     |     |
|     |     |  4  |     |  3  |  3  |     |     |

</div>

Now consider the second cell. Continuing the sequence, the candidates are $[1234]$. Again, $3$ is taken, so we're left with $[124]$.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  2  |  3  |  1  |     |     |     |     |
|     |  5  |     |  6  |     |     |  3  |     |
|     |     |     |     |     |     |     |     |
|     |     |  6  | *45*| *34*| *23*| *12*|  5  |
|     |     |     |     |     |     |     |     |
|  4  | *12*|***124***|  3  |     |     |  6  |     |
|     |  6  |     |     |     |     |     |     |
|     |     |  4  |     |  3  |  3  |     |     |

</div>



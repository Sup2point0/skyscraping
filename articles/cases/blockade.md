# Case: Blockade
<!-- #SQUARK live!
| dest = cases/blockade
| capt = $N$ opposite $2$-clue
| index = cases
| update = 2026 June 13
-->

<div class="case">

  <div class="quicklinks">

  [Examples](#examples) · [Explanation](#explanation)

  </div>

In a $2$-[clue](../glossary.md#clue) [lane](../glossary.md#lane) with the $N$-skyscraper ([lane peak](../glossary.md#lane-peak)) in the [tail cell](../glossary.md#tail-cell), the [head cell](../glossary.md#head-cell) must contain the $N-1$ skyscraper.

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |     | ... |     |  N  |     |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |***N-1***|     | ... |     |  N  |     |

  </div>
</div>

### Recursion
<div class="recursion">

This case recurses by incrementing the clue, and increasing the number of [high](../glossary.md#high) skyscrapers in the back of the lane. This decrements the skyscraper in the head cell.

<div class="deduction">
  <div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  2  |     |     |     |     |     |  6  |     |
|  3  |     |     |     |     |  5  |  6  |     |
|  4  |     |     |     |  4  |  5  |  6  |     |
|  5  |     |     |  3  |  4  |  5  |  6  |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |

  </div>

  <div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  2  |**5**|     |     |     |     |  6  |     |
|  3  |**4**|     |     |     |  5  |  6  |     |
|  4  |**3**|     |     |  4  |  5  |  6  |     |
|  5  |**2**|     |  3  |  4  |  5  |  6  |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |

  </div>
</div>

For more details see [Recursion & Abstraction](../tech/recursion-and-abstraction.md).

</div>

</div>


## Examples

### Case 1
<div class="deduction">
  <div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |     |     |     |     |  5  |     |
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
|  2  |**4**|     |     |     |  5  |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

  </div>
</div>


## Explanation

This is a super common pattern, and one of the first deductions you might learn!

### Blocking the Bridge
Let's take this lane in a *5x5* puzzle.

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |     |     |     |  5  |     |

</div>

The $2$-clue means we need 2 skyscrapers visible. 1 of those must be the lane peak (which is always visible).

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |     |     |     |**5**|     |

> The $5$ is always visible since the other skyscrapers $\{1234\}$ are all shorter than it.

</div>

Then, let's consider where the other skyscrapers can go. We'll start with the $4$-skyscraper. Let's try placing it here:

<div class="hypothetical puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |     |**4**|     |  5  |     |

</div>

Now we've guaranteed we can see at least 2 skyscrapers. But, we should continue our [hypothetical deductions](../glossary.md#hypothetical-deduction), because we might also see *more* than 2 skyscrapers, which would [contradict](../glossary.md#contradiction) the $2$-clue.

Indeed, we could now place the $3$ in the head cell, which would mean we now see 3 skyscrapers, not 2!

<div class="hypothetical puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|~~2~~|**3**|     |  4  |     |  5  |     |

> Oh no, contradiction! In the lane, $(345)$ will be visible, so the $2$-clue is not satisfied.

</div>

The same argument applies for all the other cells – except the head cell!

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |**4**|     |     |     |  5  |     |

</div>

Here, the $3$ can no longer be placed before the $4$, because $4$ is the very first skyscraper. So now we only see $(45)$ – 2 skyscrapers, as required.

You can check that no matter how we place the rest of the skyscrapers, only these 2 will be visible, since the $4$ will hide all of $\{123\}$.

### Beware the Prerequisites
If you're just starting out, be careful! This deduction *only applies* if the lane peak is in the tail cell (the last cell).

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |     |     |  5  |     |     |

</div>

When the lane peak is not in the tail cell, the $N-1$ could very well be hiding behind it.

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |     |     |  5  |**4**|     |

> We can't be certain the $4$ is in the head cell, because it could be hiding here behind the $5$.

</div>

More precisely, it only applies when the lane peak is [effectively](../glossary.md#effectively) in the tail cell – see [Case: Outflanked Blockade](outflanked.md#outflanked-blockade).


## See Also

- [Case: Outflanked Blockade](outflanked.md#outflanked-blockade)
- [Case: Ascendant](ascendant.md)
- [Case: High-Rise](high-rise.md)

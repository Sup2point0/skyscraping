# Case: Higher-Rise
<!-- #SQUARK live!
| dest = cases/higher-rise
| capt = $N$ pinned between $3$-clues
| index = cases
| date = 7 April 2026
| update = 28 April 2026
-->

<div class="case">

  <div class="quicklinks">

  [Examples](#examples) · [Explanation](#explanation)

  </div>

In a *5x5* Skyscrapers, when the [lane peak](../glossary.md#lane-peak) is exactly halfway between two $3$-clues, a $2$ or $3$-skyscraper in one of the [edge cells](../glossary.md#edge-cell) pinpoints the $1$-skyscraper to the other edge cell.

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |     |  5  |     |     |  2  |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |***23***|     |  5  |     |     |  2  |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  | *23*|     |  5  |     |**1**|  2  |

  </div>
</div>

</div>


## Examples

<!-- TODO -->


## Explanation

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |     |  5  |     |     |  3  |

</div>

Via [Meet in the Middle](meet-in-the-middle.md), we obtain 2 [dense sequences](../glossary.md#dense-sequence) in each of the [half-lanes](../glossary.md#half-lane):

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |***low***|***high***|  5  |***high***|***low***|  3  |

</div>

Every skyscraper must be visible. For the $1$-skyscraper, that means it can only go in one of the edge cells.

If one of them becomes taken, then the $1$ is forced to go in the other.

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |**X**|     |  5  |     |     |  3  |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |  X  |     |  5  |     |**1**|  3  |

  </div>
</div>

If that other edge cell was taken by a $2$, then we’re now left with 2 [unsolved cells](../glossary.md#unsolved-cell) containing the [candidates](../glossary.md#candidate) $[34]$.

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |**2**|     |  5  |     |  1  |  3  |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |  2  |***34***|  5  |***34***|  1  |  3  |

  </div>
</div>

If it was instead taken by a $3$, then we can solve the entire lane! That half-lane must have the sequence $(345)$, and on the other side we must have $(125)$.

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |**3**|     |  5  |     |  1  |  3  |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |  3  |**4**|  5  |**2**|  1  |  3  |

  </div>
</div>

Notice we can’t say anything much about the converse – if one terminal cell is taken up by a $1$, the following cell could still be any of $\{234\}$, and on the other side we just get $\text{| [23] [34]}$.

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |**1**|     |  5  |     |     |  3  |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |  1  |***234***|  5  |***34***|***23***|  3  |

  </div>
</div>

It’s a very nice symmetry, and only exists in odd-size puzzles. The next time you encounter it is *7x7*, but there it gets unwieldy; with a *5x5*, it’s at the perfect size to have some nice structure and tight deductions.

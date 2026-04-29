# Case: Middle Ground
<!-- #SQUARK live!
| dest = cases/middle-ground
| capt = 2nd cell in a $3$-clue lane
| index = cases
| update = 2026 April 29
-->

<div class="case">

  <div class="quicklinks">

  [Examples](#examples) · [Explanation](#explanation) · [Challenges](#challenges)

  </div>

In a $3$-clue [lane](../glossary.md#lane) with the [lane peak](../glossary.md#lane-peak) in the [tail cell](../glossary.md#tail-cell), the 2nd [cell](../glossary.md#cell) can contain all other skyscrapers, **except** the $N-2$ skyscraper.

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |**C**| ... | ... |  N  |     |

> Where $C = \{1, 2, ..., N-3, N-1\}$.

</div>

</div>


## Examples

### Case 1
<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |  5  |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

The $N-2$ skyscraper is the $3$-skyscraper, so the 2nd cell can contain $[124]$ but not $3$.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |***124***|     |     |  5  |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

### Case 2
<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |  6  |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |  6  |     |     |     |     |     |
|     |     |     |     |  3  |     |     |     |

</div>

The $N-2$ skyscraper is the $4$-skyscraper. In the left column, the 2nd cell can contain $[1235]$ but not $4$. In the right column, the case doesn't apply since the lane peak ($6$) isn't in the tail cell.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  3  |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |***1235***|     |  6  |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |  6  |     |     |     |     |     |
|     |     |     |     |  3  |     |     |     |

</div>

### Case 3
<div class="puzzle">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |
|     |     |  1  |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |  7  |     |
|     |     |     |     |     |     |     |     |     |
|     |     |  2  |     |     |     |     |     |     |

</div>

The $N-2$ skyscraper is the $5$-skyscraper, so the 2nd cell can contain $[12346]$ but not $5$.

<div class="puzzle">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |
|     |     |  1  |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |
|  3  |     |***12346***|     |     |     |     |  7  |     |
|     |     |     |     |     |     |     |     |     |
|     |     |  2  |     |     |     |     |     |     |

</div>

Then, we can note that $1$ has already been used in the column, and by [Ascendant](ascendant.md) we know the $6$ cannot go in the 2nd cell of the $2$-clue column. This lets us eliminate a few more candidates.

<div class="puzzle">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |
|     |     |  1  |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |
|  3  |     |***234***|     |     |     |     |  7  |     |
|     |     |     |     |     |     |     |     |     |
|     |     |  2  |     |     |     |     |     |     |

</div>


## Explanation

The most significant skyscrapers in a Skyscrapers puzzle are the $1$ and $N$ skyscrapers. After those, we can often make meaningful deductions about the $N-1$ skyscrapers. But the others are just sort of... ‘uninteresting’, and exist only to fill in the blanks.

That being said, in a $3$-clue lane exclusively, there’s a very unique constraint around the $N-2$ skyscraper![^unique]

[^unique]: I know, it sounds outlandish...

Consider the following lane:

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |     |     |     |     |  6  |     |

</div>

The $N-1$ skyscraper here is the $4$-skyscraper. Think about which cells we could place it in.

It could very well go in the [head cell](../glossary.md#head-cell), leaving the $5$ to go somewhere in the gap:

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |**4**| *5* | *5* | *5* | *5* |  6  |     |

</div>

And you might think the $4$ could go in any of the other cells too. Suppose we put it in this one here:

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |     |     |**4**|     |  6  |     |

</div>

Now, by the rules of Skyscrapers we know the $5$ can’t go between the $4$ and $6$:

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |     |     |  4  |~~5~~|  6  |     |

</div>

If this were the case, then we’d see 4 or more skyscrapers, because there’s guaranteed to be at least 1 unobscured skyscraper before the $4$.

In this situation, we know the $5$ must come *before* the $4$:

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     | *5* | *5* |  4  |     |  6  |     |

</div>

This way, it obscures the $4$, giving us 2 guaranteed peaks, with the last one coming someplace before the $5$. Keep this constraint in mind!

Now... notice we couldn’t place the $5$ in the head cell, because this would allow only 2 visible skyscrapers, not 3:

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |~~5~~|     |     |  4  |     |  6  |     |

</div>

<!-- TODO future sequences 3 can't have 5 -->
This is pretty obvious, but here’s the trick – combine it with our previous constraint.

We said that (1) $5$ must come before $4$, and (2) $5$ can’t go in the head cell. What happens, then, if $4$ is in the 2nd cell?

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |**4**|     |     |     |  6  |     |

</div>

We need to place the $5$ before it, but we can't, because the cell before it is the head cell. There’s nowhere valid to place the $5$!

We've reached a contradiction, so we can conclude $4$ cannot go in the 2nd cell.

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |***1235***|    |     |     |  6  |     |

</div>

Pretty crazy, huh? Unexpected that the $4$ is randomly gone.

So $1$, $2$, $3$ can all go in any cell in the lane, but specifically $4$, the $N-2$ skyscraper, cannot go in the 2nd cell.

This deduction works for any *NxN* puzzle – but only in a $3$-clue lane, because that’s what facilitates this interaction of constraints.


## Challenges

### Puzzle 1
<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  3  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |  1  |  .  |
|     |  .  |  .  |  .  |  .  |  .  |  2  |     |

</div>

#### Solution
<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  3  |     |***1235***|     |     |     |**6**|  .  |
|  .  |     |     |     |     |     |  1  |  .  |
|     |  .  |  .  |  .  |  .  |  .  |  2  |     |

</div>

#### Explanation
The $1$-skyscraper in front of the $2$-clue means that the next skyscraper must be the lane peak, since this is the only way to have 2 visible skyscrapers.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  3  |     |     |     |     |     |**6**|  .  |
|  .  |     |     |     |     |     |  1  |  .  |
|     |  .  |  .  |  .  |  .  |  .  |  2  |     |

</div>

Now we have the lane peak in the tail cell of the $3$-clue lane, so the case applies. The $N-2$ skyscraper is $4$, so we exclude that candidate.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  3  |     |***1235***|     |     |     |  6  |  .  |
|  .  |     |     |     |     |     |  1  |  .  |
|     |  .  |  .  |  .  |  .  |  .  |  2  |     |

</div>

### Puzzle 2
<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |  6  |     |     |  .  |
|  .  |     |     |     | *12*|     |     |  .  |
|  .  |     |     |     | *12*|     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |  6  |     |     |     |  2  |
|  .  |     |     |     |     |     |     |  .  |
|     |  .  |  .  |  .  |  3  |  .  |  .  |     |

</div>

#### Solution
<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |  6  |     |     |  .  |
|  .  |     |     |     | *12*|     |     |  .  |
|  .  |     |     |     | *12*|     |     |  .  |
|  .  |     |     |     |**5**|     |     |  .  |
|  .  |     |     |  6  |**3**|     |     |  2  |
|  .  |     |     |     |**4**|     |     |  .  |
|     |  .  |  .  |  .  |  3  |  .  |  .  |     |

</div>

#### Explanation
Applying the case, we have all candidates except $4$.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |  6  |     |     |  .  |
|  .  |     |     |     | *12*|     |     |  .  |
|  .  |     |     |     | *12*|     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |  6  |***1235***|     |     |  2  |
|  .  |     |     |     |     |     |     |  .  |
|     |  .  |  .  |  .  |  3  |  .  |  .  |     |

</div>

However, since the two $[12]$ cells form a [couple](../tech/couples.md), between them they consume $\{12\}$ so we eliminate those as candidates.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |  6  |     |     |  .  |
|  .  |     |     |     | *12*|     |     |  .  |
|  .  |     |     |     | *12*|     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |  6  |***35***|     |     |  2  |
|  .  |     |     |     |     |     |     |  .  |
|     |  .  |  .  |  .  |  3  |  .  |  .  |     |

</div>

Then, by [Ascendant](ascendant.md) we know the $5$ must be [past-peak](../glossary.md#past-peak) in the $2$-clue row, which leaves $3$ as the solution.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |  6  |     |     |  .  |
|  .  |     |     |     | *12*|     |     |  .  |
|  .  |     |     |     | *12*|     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |  6  |**3**|     |     |  2  |
|  .  |     |     |     |     |     |     |  .  |
|     |  .  |  .  |  .  |  3  |  .  |  .  |     |

</div>

Now, to have 3 visible skyscrapers, we know the sequence must be $(456)$.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |  6  |     |     |  .  |
|  .  |     |     |     | *12*|     |     |  .  |
|  .  |     |     |     | *12*|     |     |  .  |
|  .  |     |     |     |**5**|     |     |  .  |
|  .  |     |     |  6  |  3  |     |     |  2  |
|  .  |     |     |     |**4**|     |     |  .  |
|     |  .  |  .  |  .  |  3  |  .  |  .  |     |

</div>

### Puzzle 3
<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  3  |  .  |     |
|  .  |     |     |     |     |  2  |     |  .  |
|  .  |  3  |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |  6  |     |  .  |
|  .  |     |  5  |     |  6  |     |     |  3  |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |

</div>

#### Solution
<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  3  |  .  |     |
|  .  |     |     |     |     |  2  |     |  .  |
|  .  |  3  |     |     |     |***15***|     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |  6  |     |  .  |
|  .  |     |  5  |     |  6  |***34***|***123***|  3  |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |

</div>

#### Explanation
In the lowermost row, the $3$-clue creates a [dense sequence](../glossary.md#dense-sequence).

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  3  |  .  |     |
|  .  |     |     |     |     |  2  |     |  .  |
|  .  |  3  |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |  6  |     |  .  |
|  .  |     |  5  |     |  6  |***234***|***123***|  3  |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |

</div>

Notice this means the $5$ cannot go in the tail cell of the $3$-clue lane, so the case [effectively](../glossary#effectively) applies.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  3  |  .  |     |
|  .  |     |     |     |     |  2  |     |  .  |
|  .  |  3  |     |     |     |***1235***|     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |  6  |     |  .  |
|  .  |     |  5  |     |  6  |*234*|*123*|  3  |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |

</div>

The $2$ and $3$ have already been used in the column and row, respectively, so we can eliminate those candidates.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  3  |  .  |     |
|  .  |     |     |     |     |  2  |     |  .  |
|  .  |  3  |     |     |     |***15***|     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |     |  .  |
|  .  |     |     |     |     |  6  |     |  .  |
|  .  |     |  5  |     |  6  |***34***|*123*|  3  |
|     |  .  |  .  |  .  |  .  |  .  |  .  |     |

</div>

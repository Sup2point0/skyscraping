# Case: Slide
<!-- #SQUARK live!
| dest = cases/slide
| capt = Dense sequences
| index = cases
| date = 2026 April 17
-->

<div class="case">

  <div class="quicklinks">

  [Examples](#examples) · [Explanation](#explanation)

  </div>

In a [half-lane]() with clue $c$, if the [lane peak]() is in the $c$-th cell, then all skyscrapers in the half-lane must be [visible]() (forming a [dense]() [sequence]()).

<div class="step deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  c  | *1* | *2* | ... |*c-1*|  N  |     |     |

  </div>
  
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  c  |  p  |  q  | ... |  t  |  N  |     |     |

> Where $p < q < ... < t < N$.

  </div>
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
|  3  |     |     |**5**|     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

This is a *5x5* puzzle, so the lane peak is the $5$-skyscraper. It’s in the 3rd cell, which is the same number as the clue, so the case applies.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |***low***|***high***|  5  |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

The [lowest-case]() sequence we could have is $(125)$, and the [highest-case]() is $(345)$. Hence the candidates for the [head cell]() are $\{123\}$ and for the second cell $\{234\}$.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |***123***|***234***|  5  |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

> Remember there is hidden structure in these candidates, which you might convey on paper by drawing $\lt$ in the edge between them.

</div>

### Case 2
<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |  5  |     |     |     |  4  |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Here the lane peak is 4 cells away from the $4$-clue, so the case applies.

The lowest sequence we could have is $(1235)$, and the highest $(2345)$. So for the head cell, we have $\{12\}$; then $\{23\}$ for the next, and so on.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |  5  |***34***|***23***|***12***|  4  |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

### Case 3
<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |  3  |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |  4  |     |     |     |

</div>

Now we have a *6x6* skyscraper so the lane peak is the $6$-skyscraper. Notice we can pinpoint a lane peak by [Meet in the Middle](meet-in-the-middle.md) since $3 + 4 = 6 + 1$.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |  3  |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |**6**|     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |  4  |     |     |     |

</div>

This is 3 cells away from the $3$ clue, and 4 cells away from the 4 cells away from the $4$ clue, so the case applies on both sides.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |  3  |     |     |     |
|     |     |     |     |***p &amp;lt; q***|     |     |     |
|     |     |     |     |***q &amp;lt; 6***|     |     |     |
|     |     |     |     |  6  |     |     |     |
|     |     |     |     |***z &amp;lt; 6***|     |     |     |
|     |     |     |     |***y &amp;lt; z***|     |     |     |
|     |     |     |     |***x &amp;lt; y***|     |     |     |
|     |     |     |     |  4  |     |     |     |

</div>

On the $3$-clue side the lowest sequence is $(126)$ and the highest $(456)$, giving $\{1234\}$ and $\{2345\}$ for the candidates.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |  3  |     |     |     |
|     |     |     |     |***1234***|     |     |     |
|     |     |     |     |***2345***|     |     |     |
|     |     |     |     |  6  |     |     |     |
|     |     |     |     |*z &amp;lt; 6*|     |     |     |
|     |     |     |     |*y &amp;lt; z*|     |     |     |
|     |     |     |     |*x &amp;lt; y*|     |     |     |
|     |     |     |     |  4  |     |     |     |

</div>

On the $4$-clue side we have $(1236)$ up to $(3456)$, giving $\{123\}$, $\{234\}$ and $\{345\}$.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |  3  |     |     |     |
|     |     |     |     |*1234*|     |     |     |
|     |     |     |     |*2345*|     |     |     |
|     |     |     |     |  6  |     |     |     |
|     |     |     |     |***345***|     |     |     |
|     |     |     |     |***234***|     |     |     |
|     |     |     |     |***123***|     |     |     |
|     |     |     |     |  4  |     |     |     |

</div>


## Explanation

### The Structure
When the lane peak is in the $c$-th cell of a half-lane, then the greatest possible number of visible skyscrapers is $c$. For instance, if it were in the tail cell of a *6x6* puzzle, i.e. the *5th* cell...

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  .  |     |     |     |     |**6**|     |  .  |

</div>

...then we could have a maximum of 5 skyscrapers visible, by having a sequence of skyscrapers with none [obscured]():

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  .  |**1**|**2**|**3**|**4**|  6  |     |  .  |

</div>

Of course, this isn’t the only such sequence. We could very well have had $(12356)$, $(23456)$, etc. to achieve 5 visible skyscrapers.

If the clue were, say, $3$, then we'd need to choose which cells contain visible skyscrapers, and there are many different ways of doing that.[^choose]

[^choose]: Specifically, $^{4}C_{2}$ different choices of visible cells. (The lane peak is always visible so must be included in the choice, which is why it's not $^{5}C_{3}$.)

<div class="puzzles">
  <div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |**&ensp;**|**&ensp;**|     |     |**6**|     |  .  |

> We could have the first 2 cells visible in addition to the lane peak...

  </div>
  
  <div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |     |**&ensp;**|**&ensp;**|**6**|     |  .  |

> ...or maybe have the 2 cells next to lane peak visible. There are many choices!

  </div>
</div>

But if the clue were $5$, then the *only* way to have 5 skyscrapers visible is if every cell is visible.

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  5  |**&ensp;**|**&ensp;**|**&ensp;**|**&ensp;**|**6**|     |  .  |

</div>

The lane peak is guaranteed to be visible, so we need 4 more visible to make up the required 5. There are only 4 cells between the clue and lane peak – so they must all be visible!

When the lane peak is further away, we have a choice between the gaps. But when it's in the $c$-th cell (as close as it can be), it leaves no wiggle room, so we have only 1 choice, which is to have all cells visible.

### The Numbers

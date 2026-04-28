# Case: Slide
<!-- #SQUARK live!
| dest = cases/slide
| capt = Dense sequences
| index = cases
| date = 2026 April 18
-->

<div class="case">

  <div class="quicklinks">

  [Examples](#examples) · [Explanation](#explanation)

  </div>

In a [half-lane]() with clue $c$, if the [lane peak]() is in the $c$-th cell, then all skyscrapers in the half-lane must be [visible]() (forming a [dense sequence]()).

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
|     |     |     |     |     |**6**|     |     |

</div>

...then we could have a maximum of 5 skyscrapers visible, by having a sequence of skyscrapers with none [obscured]():

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |**1**|**2**|**3**|**4**|  6  |     |     |

</div>

Of course, this isn’t the only such sequence. We could very well have had $(12356)$, $(23456)$, etc. to achieve 5 visible skyscrapers.

If the clue were, say, $3$, then we’d need to choose which cells contain visible skyscrapers, and there are many different ways of doing that.[^choose]

[^choose]: Specifically, $^{4}C_{2}$ different choices of visible cells. (The lane peak is always visible so must be included in the choice, which is why it’s not $^{5}C_{3}$.)

<div class="puzzles">
  <div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |**&ensp;**|**&ensp;**|     |     |**6**|     |     |

> We could have the first 2 cells visible in addition to the lane peak...

  </div>
  
  <div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  3  |     |     |**&ensp;**|**&ensp;**|**6**|     |     |

> ...or maybe have the 2 cells next to lane peak visible. There are many choices!

  </div>
</div>

But if the clue were $5$, then the *only* way to have 5 skyscrapers visible is if every cell is visible.

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  5  |**&ensp;**|**&ensp;**|**&ensp;**|**&ensp;**|**6**|     |     |

</div>

The lane peak is guaranteed to be visible, so we need 4 more visible to make up the required 5. There are only 4 cells between the clue and lane peak – so they must all be visible!

When the lane peak is further away, we have a choice between the gaps. But when it’s in the $c$-th cell (as close as it can be), it leaves no wiggle room, so we have only 1 choice.

### The Numbers
The structure that ensures all cells are visible is a *dense sequence* – a chain of skyscrapers where each is taller than the last. For instance, $\text{| 1 2 3 4 5}$ is a sequence, since $1 < 2 < 3 < 4 < 5$. All of these skyscrapers would be visible in the half-lane.

However, while we do have only 1 possible structure (all visible), there’s more than 1 sequence that could satisfy that structure. We can’t say for certain which one it is, so we can only [pencilmark](../tech/pencilmark.md).

For instance, if we need 2 visible skyscrapers...

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |  5  |     |     |     |     |

</div>

...then we could have $(15)$, $(25)$, $(35)$, or $(45)$. That’s a lot of options!

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |***1234***|  5  |     |     |     |     |

</div>

Let’s compare this to a sequence of 4 visible skyscrapers:

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  |     |     |     |  5  |     |     |

</div>

Well, one sequence we could choose is $(1235)$. But there’s nothing guaranteeing that – we could also have $(1245)$. Or $(1345)$. Or $(2345)$.

Focusing on the head cell, in all of the possible sequences it’s either $1$ or $2$. This makes sense because if it were $3$, the longest sequence we could have is $(345)$, which only has 3 skyscrapers, not 4 as the clue requires.

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  |***12***|     |     |  5  |     |     |

</div>

For the next cell, it’s $2$ and $3$. It needs to definitely be taller than $1$, and it can’t be $4$, since then we would only be able to see a maximum of 3 skyscrapers.

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  | *12*|***23***|     |  5  |     |     |

</div>

Continuing with the same logic, for the last cell we have $3$ and $4$.

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  | *12*| *23*|***34***|  5  |     |     |

</div>

In general, to find the candidates for each cell, we only need to consider the lower and upper bounding sequences. The lower bound is the sequence containing the shortest possible skyscrapers, and the upper bound contains the tallest possible skyscrapers. From there we know our candidates are all the skyscrapers between the lower and upper bound (inclusive).

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  |     |     |     |  6  |     |     |  .  |

</div>

For the lower bound, we start with the shortest possible skyscraper, $1$, and then keep picking the shortest available skyscraper. That gives $(1236)$.

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  |***1***|***2***|***3***|  6  |     |     |  .  |

</div>

For the upper bound, we can work backwards. Preceding the $6$, the tallest possible skyscraper is $5$, and then we keep picking the tallest available skyscraper. That gives $6, 5, 4, 3$, so we have the sequence $(3456)$.

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  |***13***|***24***|***35***|  6  |     |     |  .  |

</div>

Finally, we just need to add in all the intermediate values. For example, in first cell the range is $[1, 3]$, which gives $\{123\}$.

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  |***123***|***234***|***345***|  6  |     |     |  .  |

</div>


## Solving

As we obtain information on the sequence, we can leverage its structure to actually solve some of these cells.

### Forcing the Rest
The head cell acts as a ‘lower bound’ on the sequence, dictating where it starts from. If it starts from the tallest candidate, then every cell afterwards must also have their tallest candidates!

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  | *12*| *23*| *34*|  5  |     |     |

</div>

Suppose here we manage to find that the head cell is $2$, which is the tallest of $\{12\}$.

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  |**2**| *23*| *34*|  5  |     |     |

</div>

Then the only possible sequence collapses to $(2345)$, so we can solve the half-lane!

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  |  2  |**3**|**4**|  5  |     |     |

> We could also achieve this via Sudoku-style eliminations!

</div>

This doesn’t just apply for the head cell, though. At any point, if a cell is solved to be its tallest candidate, then all following cells must also contain their tallest candidate.

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  5  | *12*| *23*| *34*| *45*|  6  |     |     |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  5  | *12*|**3**| *34*| *45*|  6  |     |     |

> $3$ is the tallest of $\{23\}$, so...

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  5  | *12*|  3  |**4**|**5**|  6  |     |     |

> ...all following cells must contain their tallest candidate. This is also deducable via Sudoku-style deductions.

  </div>
</div>

On the flip side, if a cell is solved to be its shortest candidate, then all preceding cells must also contain their shortest candidate!

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  5  | *12*| *23*| *34*| *45*|  6  |     |     |

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  5  | *12*| *23*|**3**| *45*|  6  |     |     |

> $3$ is the shortest of $\{34\}$, so...

  </div>

  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  5  |**1**|**2**|  3  | *45*|  6  |     |     |

> ...all preceding cells must contain their shortest candidate. Again, this is deducable through Sudoku-style deductions.

  </div>
</div>

All make sense? It’s important to not lose sight of it in larger puzzles when cells start to have more candidates. For instance:

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  |*123*|*234*|*345*|  6  |     |     |  .  |

</div>

Let’s say we find that the middle unsolved cell is $4$.

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  |*123*|**4**|*345*|  6  |     |     |  .  |

</div>

Purely relying on Sudoku-style eliminations, we’d leave the last unsolved cell as $[35]$.

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  |*123*|  4  |***35***|  6  |     |     |  .  |

</div>

But we can actually solve it, because there’s the sequence structure! Since every cell must be visible, we know it can’t be a $3$ since that’d be obscured. It must be a $5$.

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  |*123*|  4  |**5**|  6  |     |     |     |

</div>

This is why it’s important to remember these pencilmarks aren’t just plain pencilmarks, they also encode the sequence structure. When I look at them, I don’t actually think about the individual numbers, I just think “This is a sequence” – i.e. each skyscraper needs to be taller than the one before it.

### Narrowing the Band

![Viewing the sequence as a chain of bands]({base}/cases/slide-bands.png)

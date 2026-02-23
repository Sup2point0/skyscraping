# Case: Leap of Faith
<!-- #SQUARK live!
| dest = cases/leap-of-faith
| capt = Clue of $2$
| index = cases
| date = 2026 February 23
| update = 2026 February 23
-->

The $2$-clue is one of the most impactful clues in a Skyscrapers puzzle, and it's also an exception to many rules surrounding [sequences](../glossary.md#sequence).

> [!Note]
> This ‘case’ could probably be split into multiple cases, but some of them are really too tiny to warrant their own page :P

From [Blockade](blockade.md) we've seen a simple case where we have a $2$-clue and the [lane peak](../glossary.md#lane-peak) is in the [tail cell](../glossary.md#tail-cell), allowing us to deduce the [head cell](../glossary.md#head-cell) must be $N-1$.

But what about when the lane peak isn't at the end?


## Close and Intimate

The closest the lane peak can be is in the 2nd cell:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |     |**5**|     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Here, the head cell could be anything, because any skyscraper would be shorter than the $5$.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |***1234***|  5 |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Not very helpful!


## Older and Younger Sibling

Moving the lane peak one more cell away:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |     |     |**5**|     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Now we have some structure. The head cell must obscure the 2nd cell:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |***tall***|***short***|  5  |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

We need $\text{tall} > \text{short}$. That means $\text{tall}$ can't be $1$, and $\text{short}$ can't be $4$:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |***234***|***123***|  5  |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Fairly straightforward.


## Long-Distance

What happens when we push the lane peak further back? Now the void is really feeling large.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |     |     |     |**5**|     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Don't fall into the trap of thinking the head cell is still guaranteed to be $N-1$, that only happens when the lane peak is at the *very* end!

Notice here, there's still space behind the lane peak where $N-1$ could go:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |     |     |     |  5  |**4**|     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

We'll handle the head cell and the cells in between (the [hideout](../tech/hideout.md)) separately.

### The Head Cell
Now it's less certain what the head cell could be, so let's try some candidates and see what we find.

First, could we put a $1$-skyscraper there?

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |**1**|     |     |  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Certainly not, because any skyscraper that comes after the $1$ would be visible, giving us at least 3 visible skyscrapers, not 2.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|~~2~~|  1  |~~*234*~~|     |  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Now let's try a $2$-skyscraper.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |**2**|     |     |  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Since we're [hypothesising](../glossary.md#hypothetical-deduction) whether $2$ *could be possible* here, we want to consider the **best case** – could we find a valid solution, if everything goes right?

We could start by placing a $1$ after it, which would be [obscured](../glossary.md#glossary) as we want.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |  2  |**1**|     |  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

But what now? No matter what we place in the remaining [unsolved cell](../glossary.md#unsolved-cell), we'll end up having 3 skyscrapers visible, not 2 as we want.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|~~2~~|  2  |  1  |~~*34*~~|  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

So we can't have $2$ in the head cell either.

Does the same apply for $3$?

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |**3**|     |     |  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

If we place the $4$ between the $3$ and $5$ it of course fails.

But we could place $1$ and $2$, leaving the $4$ in the tail cell:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |  3  |**1**|**2**|  5  |**4**|     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Now this *does* work. So we could have $3$ in the head cell.

$4$ will of course always be valid, so combining all this, we arrive at our final candidates:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  | *34*|     |     |  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>


### The Hideout
Now let's consider the cells in the hideout.

We again need to consider the best case, because we can't rule out solutions that *might* be possible. That means we'll let the head cell be $4$, since then it's the most capable of obscuring skyscrapers after it.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |**4**|     |     |  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Finding the candidates is pretty chill, since every available skyscraper is shorter than $4$:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |  4  |*123*|*123*|  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

[Backtracking](..glossary.md#backtracking) on our hypothetical deduction, we arrive at these candidates for the [half-lane](../glossary.md#half-lane):

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  | *34*|*123*|*123*|  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

So the 2 cases are:

- $3$ goes in the head cell, so we get $\text{2 | 3 [12] [12] 5}$
- $4$ goes in the head cell, so we get $\text{2 | 4 [123] [123] 5}$ (nothing happens to the hideout)

### Sizing Up
Can you notice any structure in this?

This happens when the lane peak is sufficiently far away. A *5x5* skyscraper is pretty small, so let's size up and look at a *6x6*:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|  2  |     |     |     |  6  |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

I'll skip the details (it'll become intuition eventually), but we get the same similar structure:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|  2  |***45***|***1234***|***1234***|  6  |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

What happens if we move the lane peak further away again?

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|  2  | *45*|*1234*|*1234*|***1234***|**6**|     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

Nothing, the candidates stay the same!

We might wonder, “wait that's strange, this can't continue forever, because there wouldn't be enough candidates”.

Indeed, it doesn't continue forever – because the lane peak will hit the edge of the grid! At this point, it collapses to Blockade, with the hideout cells using all the remaining candidates between them:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|  2  |**5**|*1234*|*1234*|*1234*|*1234*|**6**|     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

So to illustrate them all in parallel, check out the different structures we obtain depending on where the lane peak lies:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  2  |*12345*|  6  |     |     |     |     |     |
|  2  |*2345*|*1234*|  6  |     |     |     |     |
|  2  |*345*|     |     |  6  |     |     |     |
|  2  |     |     |     |     |  6  |     |     |
|  2  |     |     |     |     |     |  6  |     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>


## What Did We Learn?

The key constraint here is that the head cell must be **taller** than all skyscrapers after it (until the lane peak).

Or, looking at it from the other angle, all the skyscrapers between the head cell and lane peak must be **shorter** than the head cell.

Illustrating abstractly, we have this structure:

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |*tall*|*short*| *...* |*short*|  N  |

</div>

### The Hideout
How can we determine what could go in the $\text{short}$ cells?

> Well technically, we could pull out a bit of cheeky mathematical induction 😎 but that might be a bit overkill here, so we'll just do it intuitively.

Well, we know $N-1$ is off-limits, because only $N$ (which is already used) could obscure it:

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|~~2~~|*&amp;lt; N-1*|  |~~*N-1*~~|     |  N  |     |

> We end up with at least 3 visible skyscrapers here!

</div>

But $N-2$ is definitely fine, because we can place $N-1$ in the head cell to obscure it:

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |***N-1***|     |***N-2***|     |  N  |     |

> This could be a solution, so we can't rule out $N-2$.

</div>

The same applies for any skyscraper shorter than $N-2$, hence the possible candidates are:

```math
1 \leq h \leq N-2
```

To put it more concretely, here's what they'd be for various puzzle sizes:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  2  |     | *12*|  4  |     |     |     |     |
|  2  |     |*123*|*123*|  5  |     |     |     |
|  2  |     |*1234*|*1234*|*1234*|  6  |     |     |
|  2  |     |*12345*|*12345*|*12345*|*12345*|  7  |     |
|     |     |     |     |     |     |     |     |

</div>

### The Head Cell
The head cell must be able to obscure all of these $1 \leq h \leq N-2$ in the best case.

$N-1$ is always able to do this, but whether the others will be able to do this depends on how far away the lane peak is.

To illustrate this effectively we'll bring out the *7x7* big guns:

<div class="puzzle">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |     |
|  2  |     |*12345*|  7  |     |     |     |     |     |
|  2  |     |*12345*|*12345*|  7  |     |     |     |     |
|  2  |     |*12345*|*12345*|*12345*|  7  |     |     |     |
|  2  |     |*12345*|*12345*|*12345*|*12345*|  7  |     |     |
|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |

> First and last possible cases are ommitted since they're uninteresting.

</div>

The first half-lane here is straightforward:

<div class="puzzle">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |     |
|  2  |***23456***|*12345*|  7  |     |     |     |     |     |
|  2  |     |*12345*|*12345*|  7  |     |     |     |     |
|  2  |     |*12345*|*12345*|*12345*|  7  |     |     |     |
|  2  |     |*12345*|*12345*|*12345*|*12345*|  7  |     |     |
|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |

</div>

Next for the last half-lane, in the best case the hideout is some permutation of $\text{1 2 3 4}$, so we *could* obscure them all with a $5$-skyscraper or taller:

<div class="puzzle">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |     |
|  2  |*23456*|*12345*|  7  |     |     |     |     |     |
|  2  |     |*12345*|*12345*|  7  |     |     |     |     |
|  2  |     |*12345*|*12345*|*12345*|  7  |     |     |     |
|  2  |***56***|*12345*|*12345*|*12345*|*12345*|  7  |     |     |
|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |

</div>

Applying the same logic to the half-lane above, we need anything that could obscure $\text{1 2 3}$, so anything $4$ or taller would work:

<div class="puzzle">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |     |
|  2  |*23456*|*12345*|  7  |     |     |     |     |     |
|  2  |     |*12345*|*12345*|  7  |     |     |     |     |
|  2  |***456***|*12345*|*12345*|*12345*|  7  |     |     |     |
|  2  | *56*|*12345*|*12345*|*12345*|*12345*|  7  |     |     |
|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |

</div>

And for the last half-lane:

<div class="puzzle">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |     |
|  2  |*23456*|*12345*|  7  |     |     |     |     |     |
|  2  |***3456***|*12345*|*12345*|  7  |     |     |     |     |
|  2  |*456*|*12345*|*12345*|*12345*|  7  |     |     |     |
|  2  | *56*|*12345*|*12345*|*12345*|*12345*|  7  |     |     |
|     |     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |     |

</div>

Aha! There's some obvious structure here, you love to see it. While the hideout cells remain unchanged, the head cell's candidates change depending on how far away the lane peak is. The closer the lane peak, the more possible candidates for the head cell, and vice versa.

This should make sense – the more cells there are between the head cell and lane peak, the more skyscrapers it must obscure – hence the greater its minimum height must be.

We can now formulate a formula for the candidates by inspection (of course, you could rigorously prove it, but we'll skip that here).

The tallest candidate is $N-1$. The shortest is given by how many cells there are in the half-lane before the lane peak – for instance in the first row above, there's 2 since the half-lane looks like $\text{2 | \_ \_ 7}$. Hence the candidates for the head cell are:

```math
\text{\# of unsolved cells} \leq h \leq N-1
```

Whew! That was a damn lot of heavylifting. Unfortunate result of trying to abstract and generalise, but the more you do it, the more intuitive it'll become.

And just to clarify, you don't need to and shouldn't memorise these formulae! The goal is to internalise the intuition behind them; the ‘offsets’ will come naturally. Everything we talked about here, and most of solving Skyscrapers, is visualising skyscrapers obscuring skyscrapers, and the interactions between the clue and lane peak.

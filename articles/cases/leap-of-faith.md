# Case: Leap of Faith
<!-- #SQUARK live!
| dest = cases/leap-of-faith
| capt = Clue of $2$
| index = cases
| update = 2026 February 23
-->

The $2$-clue is one of the most impactful clues in a Skyscrapers puzzle, and it's also an exception to many rules surrounding [sequences](../glossary.md#sequence).


## The Head Cell

From [Blockade](blockade.md) we've seen what happens when we have a $2$-clue and the [lane peak](../glossary.md#lane-peak) is in the [tail cell](../glossary.md#tail-cell) – the [head cell](../glossary.md#head-cell) must be $N-1$.

But what about when the lane peak isn't at the end?

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |     |     |     |  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Don't fall into the trap of thinking the head cell is still guaranteed to be $N-1$, because notice – now there's space behind the lane peak where $N-1$ could go!

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

So, here it's less certain what could go in the head cell. Let's try some candidates and see what we find.

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


## The Hideout

Now let's consider what could go between the head cell and lane peak (the [hideout](../tech/hideout.md)).

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

Can you notice any structure in this?

While most clues produce a sequence with steadily more candidates across the half-lane ([Slide](slide.md)), the $2$-clue instead gives this ‘inverted’ structure with only 2 candidates for the head cell.

As we'll see very soon, this generalises to larger puzzle sizes!


## Moving the Lane Peak

Alright, but what happens if we change where the lane peak is?

Well, there are clearly some places the above rules are irrelevant – if the lane peak is in the 2nd cell, there is no hideout!

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
|  2  |*1234*|  5 |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Moving it one further:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |*tall*|*short*|5 |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Here we need “tall” > “short”. That means “tall” can't be $1$, and “short” can't be $4$:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  2  |*234*|*123*|  5  |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |

</div>

Not quite the same as before. In the *5x5* Skyscrapers, the 


## Generalising!

The key constraint here is that the head cell must be **taller** than all skyscrapers after it (until the lane peak).

Or, looking at it from the other angle, all the skyscrapers between the head cell and lane peak must be **shorter** than the head cell.

Illustrating abstractly, we have this structure:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|  2  |*tall*|*short*| *...* |*short*|  N  |
|     |     |     |     |     |     |     |

</div>

How can we determine what could go in the “short” cells?

> Well technically, we could pull out a bit of cheeky mathematical induction 😎 but that might be a bit overkill here, so we'll just do it intuitively.

For cells in the hideout, we know $N-1$ is off-limits, because only $N$ (which is already used) can obscure it:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|~~2~~|*&amp;lt; N-1*|  | N-1 |     |  N  |     |
|     |     |     |     |     |     |     |

> We end up with at least 3 visible skyscrapers here!

</div>

But $N-2$ is definitely fine, because we can place $N-1$ in the head cell to obscure it:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|  2  | N-1 |     | N-2 |     |  N  |     |
|     |     |     |     |     |     |     |

> This could be a solution, so we can't rule out $N-2$.

</div>

The same applies for any skyscraper shorter than $N-2$, hence the possible candidates are $1 \leq h \leq N-2$.

To put it more concretely, here's what they'd be for various puzzle sizes:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|     |     | *12*|  4  |     |     |     |     |
|  2  |     |*123*|*123*|  5  |     |     |     |
|  2  |     |*1234*|*1234*|*1234*|  6  |     |     |
|  2  |     |*12345*|*12345*|*12345*|*12345*|  7  |     |
|     |     |     |     |     |     |     |     |

</div>

Then for the head cell, it must be able to obscure all of these $1 \leq h \leq N-2$ in the best case.

$N-1$ is always able to do this, but whether the others will be able to do this 

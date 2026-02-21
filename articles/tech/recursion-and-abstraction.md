# Look Past The Numbers
<!-- #SQUARK live! dev!
| dest = tech/recursion-and-abstraction
| index = tech
| update = 2026 February 21
-->

Take a look at the following 2 lanes:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |     |     |  5  |     |     |  6  |     |
|  2  |     |     |  6  |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

In the $3$-clue lane, we’ve solved the $5$ and $6$ skyscrapers, so we only have $[1234]$ left to work with. None of these are taller than $5$ or $6$, so we know those 2 will be visible peaks.

This means before the $5$, there must be 1 more peak (so that we have 3 in total). The only way for that to happen, is for the skyscraper in the 1st cell to obscure that in the 2nd cell:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |***234***|***123***|  5  |     |     |  6  |     |
|  2  |     |     |  6  |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

Now look at the $2$-clue lane. We’ve found the lane peak $6$, so we know there’s 1 more peak before it. Again, the only way for this to happen is if the 1st obscures the 2nd:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |*234*|*123*|  5  |     |     |  6  |     |
|  2  |***2345***|***1234***|  6  |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

Now, I want you to look past the numbers. What kind of *structure* did we deduce here?

The skyscraper in the 1st cell obscures that in the 2nd cell. So we’ve got a “high” followed by a “low”.

Let’s replace our pencil marks with just those indicators:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |***H***|***L***|  5  |     |     |  6  |     |
|  2  |***H***|***L***|  6  |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

Aha! Now you see, really, these are *the same problem*. The numbers are a little different, of course, but the underlying constraint is the same – even though the clues and lanes are different.

This is the key intuition I want to illustrate: it’s not the numbers that are important, it’s the structure. The numbers are just symbols for the underlying structure. It’d be no different if we had a 99x99 Skyscrapers:

<div class="puzzle">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |     |
|  3  |***H***|***L***|  98  |     |     | ... |  99 |     |
|  2  |***H***|***L***|  99  |     |     | ... |     |     |
|     |     |     |     |     |     |     |     |     |

</div>

In fact, who said our skyscrapers even needed to have consecutive heights. It’s irrelevant, the only necessity is that they’re unique so that a strictly increasing sequence can be formed.

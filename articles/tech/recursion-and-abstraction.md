# Recursion and Abstraction
<!-- #SQUARK live! dev!
| dest = tech/recursion-and-abstraction
| capt = Look Past The Numbers
| index = tech
| date = 2026 February 21
| update = 2026 February 25
-->


## Recursion

Take a look at the following 2 [half-lanes](../glossary.md#half-lane):

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |     |     |  5  |     |     |  6  |     |
|  2  |     |     |  6  |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

In $\text{3 | \_ \_ 5 \_ \_ 6 |}$, we only have $\{1234\}$ left to work with. None of these are taller than $5$ or $6$, so we know those 2 will be [peaks](../glossary.md#peak).

This means before the $5$, there must be 1 more peak (so that we have 3 in total). The only way for that to happen, is for the skyscraper in the [head cell](../glossary.md#head-cell) to obscure that in the 2nd cell:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |***234***|***123***|  5  |     |     |  6  |     |
|  2  |     |     |  6  |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

Now look at $\text{2 | \_ \_ 6 \_ \_ \_ |}$. We know there’s 1 more peak before the [lane peak](../glossary.md#lane-peak) $6$. Again, the only way for this to happen is if the head cell obscures the 2nd cell:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |*234*|*123*|  5  |     |     |  6  |     |
|  2  |***2345***|***1234***|  6  |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

Now, I want you to look past the numbers. What kind of *structure* did we deduce here?

The skyscraper in the 1st cell obscures that in the 2nd cell. So we’ve got a “high” followed by a “low”. Let’s replace our pencil marks with just those indicators:

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  3  |***high***|***low***|  5  |     |     |  6  |     |
|  2  |***high***|***low***|  6  |     |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

Aha! Now you see, really, these are *the same problem*. The numbers are a little different, of course, but the underlying constraint is the same – even though the clues and lanes are different.

Why exactly is that? Well, we’ve guaranteed 2/3 of the peaks the $3$-clue half-lane needs, so we need exactly 1 more peak. And we've guaranteed 1/2 of the skyscrapers the $2$-clue half-lane needs, so we... also need exactly 1 more peak.

Once we've deduced enough peaks in the $3$-clue lane, it *reduces into* a $2$-clue lane.

We can illustrate this even clearer with a higher clue:

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  4  |     |     |     |     |     |  6  |     |
|     |     |     |     |     |     |     |     |

</div>

With only the lane peak solved, we still need 3 more skyscrapers visible. This ‘feels like’ solving a $4$-clue.

Suppose we find another peak:

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  4  |     |     |     |     |**5**|  6  |     |
|     |     |     |     |     |     |     |     |

</div>

Now we have 2 skyscrapers guaranteed to be visible, so we need 2 more. Notice this ‘feels like’ solving a $3$-clue!

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  4  |     |     |     |     |  5  |  6  |     |
|**3**|     |     |     |     |  6  |     |     |
|     |     |     |     |     |     |     |     |

> In both half-lanes, we need 2 peaks.

</div>

And as we find another peak, meaning we only need 1 more, it now ‘feels like’ solving a $2$-clue.

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  4  |     |     |     |**4**|  5  |  6  |     |
|**2**|     |     |     |  6  |     |     |     |
|     |     |     |     |     |     |     |     |

</div>

So as we find more peaks, the problem reduces into a smaller version of itself, which we can solve recursively.

We don't *care* what comes after the first current peak, because they can't change:

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  4  |     |     |     |  4  |**5**|**6**|     |
|     |     |     |     |     |     |     |     |

> The $5$ and $6$ are gonna be visible no matter where we go from here.

</div>

So, we can ‘mentally ignore’ those later skyscrapers, and treat the current first peak as the lane peak! Then we just have to decrease the clue accordingly:

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|**2**|     |     |     |  N  |  -  |  -  |     |
|     |     |     |     |     |     |     |     |

> Of course, it's not actually the $N$-skyscraper, but we can think of it as the lane peak.

</div>

Now we have a much simpler problem on our hands.

> [!Note]
> I'm not saying you need to write this out explicitly – I personally visualise this process in my head. But actually, you totally could write it out! Then you're just keeping track of “how many more skyscrapers do I need visible”?[^more-visible]

[^more-visible]: How many more *+1*, technically. Damn off-by-one errors.

The important part is, we can leverage all the deductions we already know that apply to $2$-clues. This isn't a *literal* $2$-clue, but it's *effectively* a $2$-clue.

For instance, in this particular case we know $3$ must go in the head cell (via [Blockade](../cases/blockade.md)):

<div class="puzzle lane">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|  2  |**3**|     |     |  4  |  5  |  6  |     |
|     |     |     |     |     |     |     |     |

</div>

There's a good chance you already knew this intuitively, but now you can see why it works. You're not applying a special-case deduction for $4$-clues with 3 solved peaks; you're using the simple rules you already know in an originally complex situation that has been simplified!


## Abstraction

Recursion also illuminates a closely entangled idea: when solving Skyscrapers, it’s not the numbers that are important, it’s the structure.

The numbers are just symbols for the underlying structure. Looking back at the *high* and *low* we had earlier, it’d be no different if we had a 99x99 Skyscrapers:

<div class="puzzle">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |     |
|  3  |*high*|*low*|  98  |     |     | ... |  99 |     |
|  2  |*high*|*low*|  99  |     |     | ... |     |     |
|     |     |     |     |     |     |     |     |     |

</div>

Regardless of what the concrete numbers may be, the abstract structure remains the same. It's the abstract structure that we work with, reason about, and perform logical deductions with.

We might as well use emojis for our skyscrapers, though that would make puzzle-solving pretty painful.

In fact, who said our skyscrapers even needed to have consecutive heights?! We could have a *6x6* Skyscrapers with the digits $\{013679\}$. It’s irrelevant, really, the only necessity is that they’re unique so that the rules of Sudoku can be applied.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|     |  6  |  9  |  3  |  7  |  1  |  0  |     |
|     |  1  |  3  |  0  |  6  |  7  |  9  |     |
|     |  5  |  7  |  1  |  0  |  6  |  3  |     |
|     |  2  |  6  |  9  |  3  |  0  |  1  |     |
|     |  3  |  0  |  7  |  1  |  9  |  6  |     |
|     |  4  |  1  |  6  |  9  |  3  |  7  |     |
|     |     |     |     |     |     |     |     |

> Cursed, lmao.

</div>

Having consecutive numbers just makes checking which numbers have and haven't been used significantly faster.

Anyway, all this is to say – remind yourself to not get too lost in the numbers sometimes. They're great for us as humans; we can use them as a crux to speed up a lot of logic and facilitate intuition. But at the end of the day, they're only a syntax for describing the true underlying logical constraints.

To truly *feel* a Skyscrapers puzzle, look past the numbers and immerse yourself in the abstract structure hidden within.


<br>

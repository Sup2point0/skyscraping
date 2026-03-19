# Technique: Firing Range
<!-- #SQUARK live!
| dest = tech/firing-range
| index = tech
| date = 2026 March 19
| update = 2026 March 19
-->

> *Note: This article is currently unfinished.*

> *Recommended reading: [Skyling](skylining.md)*

There's many ways we can think of the relationship between [clues]() and [lane peaks]() when skylining. One way I quite like is to visualise the clues firing ‘lasers’, and the lane peaks trying to find a ‘safe spot’ where they aren't hit.


## Laser Tag

As always, an example will probably explain the best. We're going to find the lane peaks of this *5x5* puzzle, i.e. the $5$-skyscrapers.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |  4  |  3  |  4  |     |  2  |     |

</div>

Let's start with the bottom row.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |**&ensp;**|**&ensp;**|**&ensp;**|**&ensp;**|**&ensp;**|     |
|     |  4  |  3  |  4  |     |  2  |     |

> It might already be obvious to you where the $5$ should go, but bear with me.

</div>

Well, $5$ blocks all skyscrapers behind it, so if we're placing it as in the [head cell]() of a lane, then the only clue that could be satisfied is the $1$-clue. ([Silhouette](../cases/silhouette.md))

<div class="puzzle hypothetical">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |~~5~~|     |     |     |     |     |
|     |~~4~~|  3  |  4  |     |  2  |     |

> If we place the $5$ in front of the $4$-clue, we definitely can't see 4 skyscrapers.

</div>

So we can think of the clues as firing lasers which prohibit the lane peak from being in their column.

<div class="puzzle hypothetical">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |~~×~~|~~×~~|~~×~~|     |~~×~~|     |
|     |~~×~~|~~×~~|~~×~~|     |~~×~~|     |
|     |~~×~~|~~×~~|~~×~~|     |~~×~~|     |
|     |~~×~~|~~×~~|~~×~~|     |~~×~~|     |
|     |~~×~~|~~×~~|~~×~~|     |~~×~~|     |
|     |  4  |  3  |  4  |     |  2  |     |

> Remember, we're only talking about the bottom row here.

</div>

Very vividly, there is only one safe column, and so that's where the $5$ must go.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |**5**|     |     |
|     |  4  |  3  |  4  |     |  2  |     |

</div>

<aside>

Of course, this isn't *really* any different from [pencilmarking]() the [candidates]() for each head cell and then applying Sudoku-style deductions. We'd get the same result.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |***12***|***123***|***12***|     |***1234***|     |
|     |  4  |  3  |  4  |     |  2  |     |

> After pencilmarking, we can notice there's only one cell left for the $5$.

</div>

That's normal, and this is an important idea to recognise – the same deduction can often be made in ‘different’ ways. Ultimately, they're just different ways of *abstracting* upon the same fundamental logic.

Why even think of them differently then? Well, as humans, abstraction is very useful for us! They make spotting higher-level structure and logic much easier. In general, having multiple perspectives for the same thing can deepen your appreciation and intuition for it. It's quite cool to see how all the different constraints interact and combine. You'll become faster, more flexible, and most importantly, be able to recognise increasingly obscure deductions.

</aside>


## Advancing the Front Line

The use of this firing range analogy might become a bit more apparent once we consider the rows higher up.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |**&ensp;**|**&ensp;**|**&ensp;**|     |**&ensp;**|     |
|     |**&ensp;**|**&ensp;**|**&ensp;**|     |**&ensp;**|     |
|     |**&ensp;**|**&ensp;**|**&ensp;**|     |**&ensp;**|     |
|     |**&ensp;**|**&ensp;**|**&ensp;**|     |**&ensp;**|     |
|     |     |     |     |  5  |     |     |
|     |  4  |  3  |  4  |     |  2  |     |

</div>

Of course, the clues don't fire lasers indefinitely; then there couldn't be a lane peak at all, which wouldn't make sense.

The value of the clue is what tells us how far the laser travels. For a clue $n$, the first cell which could contain a lane peak is the $n$th cell of the lane.

Take this lane with a $4$-clue. The laser travels 3 cells, so the first safe cell for the lane peak is the 4th cell.

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  4  |~~×~~|~~×~~|~~×~~|***5***|     |     |

</div>

Applying this to all the columns, see the structure we obtain?

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |~~×~~|     |~~×~~|     |     |     |
|     |~~×~~|~~×~~|~~×~~|     |     |     |
|     |~~×~~|~~×~~|~~×~~|  5  |~~×~~|     |
|     |  4  |  3  |  4  |     |  2  |     |

> The lasers themselves even look like skyscrapers! xD

</div>

Now what happens when we consider the next row above?

As before, the $3$ and $4$-clue lanes are off-limits, since a $5$ would block those lanes and prevent the clue from being satisfiable.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |~~×~~|     |~~×~~|     |     |     |
|     |~~×~~|~~×~~|~~×~~|**&ensp;**|**&ensp;**|     |
|     |~~×~~|~~×~~|~~×~~|  5  |~~×~~|     |
|     |  4  |  3  |  4  |     |  2  |     |

</div>

The 4th column already has a $5$, so it can't go there either. The only safe place left is in the rightmost column.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |~~×~~|     |~~×~~|     |     |     |
|     |~~×~~|~~×~~|~~×~~|~~×~~|**5**|     |
|     |~~×~~|~~×~~|~~×~~|  5  |~~×~~|     |
|     |  4  |  3  |  4  |     |  2  |     |

</div>

TODO


## The Lone Scout

The example above was a fairly trivial one. Let's look at a less obvious case with a *6x6* Skyscrapers.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     | *36*|     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     | *36*|     |
|  2  |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|     |     |     |  6  |     |     |     |     |
|     |     |  2  |     |  4  |  5  |     |     |

</div>

We're going to try and find the lane peak (now the $6$-skyscraper) in the $2$-clue row.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     | *36*|     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     | *36*|     |
|  2  |***6***|***6***|***6***|***6***|***6***|***6***|     |
|     |     |     |     |     |     |     |     |
|     |     |     |  6  |     |     |     |     |
|     |     |  2  |     |  4  |  5  |     |     |

</div>

As usual we can ignore the head cell (because of course, the $2$-clue also fires its own laser!). The $6$ already present in the 3rd column also eliminates that as an option.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     | *36*|     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     | *36*|     |
|  2  |~~×~~| *6* |~~×~~| *6* | *6* | *6* |     |
|     |     |     |     |     |     |     |     |
|     |     |     |  6  |     |     |     |     |
|     |     |  2  |     |  4  |  5  |     |     |

</div>

This still leaves things fairly open. Now we turn our attention to the clues at the bottom. These are firing lasers upwards, which could restrict where our $6$ can reside.

The $2$-clue's laser only spans 1 cell, so isn't of concern.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     | *36*|     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     | *36*|     |
|  2  |     | *6* |     | *6* | *6* | *6* |     |
|     |     |     |     |     |     |     |     |
|     |     |~~×~~|  6  |     |     |     |     |
|     |     |**2**|     |  4  |  5  |     |     |

</div>

However, the $4$ and $5$-clues fire lasers that *do* hit our $6$.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     | *36*|     |
|     |     |     |     |     |~~×~~|     |     |
|     |     |     |     |~~×~~|~~×~~| *36*|     |
|  2  |     | *6* |     |~~6~~|~~6~~| *6* |     |
|     |     |     |     |~~×~~|~~×~~|     |     |
|     |     |     |  6  |~~×~~|~~×~~|     |     |
|     |     |  2  |     |**4**|**5**|     |     |

</div>

This means those cells aren't safe, and the $6$ can't go in them.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     | *36*|     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     | *36*|     |
|  2  |     | *6* |     |~~×~~|~~×~~| *6* |     |
|     |     |     |     |     |     |     |     |
|     |     |     |  6  |     |     |     |     |
|     |     |  2  |     |  4  |  5  |     |     |

</div>

<aside>

Again, we could've noticed this by pencilmarking, but with these [high]() clues, we often refrain from doing so because it creates a mess.

<div class="puzzle">

|||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     | *36*|     |
|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     | *36*|     |
|  2  |     | *6* |     |***12345***|***1234***| *6* |     |
|     |     |     |     |***1234***|***123***|     |     |
|     |     |     |  6  |***123***|***12***|     |     |
|     |     |  2  |     |  4  |  5  |     |     |

> So many digits...

</div>

Usually, we might only pencilmark after we've found the lane peak in that column, particularly if it's in the first possible cell (leading to a [dense sequence]()).

So you might ask, but doesn't that mean we could miss out on deductions by not pencilmarking, like we probably would have here?

Certainly, such is the nature of puzzle-solving! But more often that not, massive candidate sets are pretty useless for us, and can actively hinder spotting useful constraints by cluttering the grid.

This is *exactly* why all this abstract ‘lasers’ nonsense is helpful: it allows us to focus on the fundamental constraint behind those sequences (“The lane peak can't come too early”) as opposed to the huge set of irrelevant candidates. With this abstraction, we can internally note the constraints in our mind very simply and apply them when needed, instead of committing to writing down a whole bunch of numbers.

> *See also: [Recursion & Abstraction](recursion-and-abstraction.md)*

</aside>

In fact, this laser metaphor is pretty general, and is sort of how I think about Sudoku-style eliminations as well. Any time a skyscraper can't go in a lane because it would conflict with a duplicate, or block a clue, you can visualise it as that duplicate or clue firing a laser at your skyscraper, which your skyscraper must dodge.

<div class="puzzle">

||||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |     |     |
|     |  7  |~~×~~|~~×~~|~~×~~|~~×~~|~~×~~|~~×~~|     |
|     |~~×~~|  6  |     |     |     |     |     |     |
|     |~~×~~|     |     |     |     |     |     |     |
|     |~~×~~|     |~~×~~|     |~~×~~|     |     |     |
|     |~~×~~|     |~~×~~|     |~~×~~|~~×~~|~~×~~|  4  |
|     |~~×~~|     |~~×~~|~~×~~|~~×~~|     |     |     |
|     |~~×~~|     |~~×~~|~~×~~|~~×~~|     |~~×~~|  2  |
|     |     |     |  5  |  3  |  5  |     |     |     |

> Sometimes, skyscraping can feel a bit like dodging lasers.

</div>

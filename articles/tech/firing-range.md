# Technique: Firing Range
<!-- #SQUARK live!
| dest = tech/firing-range
| index = tech
| date = 2026 March 19
| update = 2026 March 19
-->

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

<div class="blockquote">

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

</div>


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

Now, we're going to think of the lane peaks conducting an ‘assault’ downwards. In each column, the lane peak needs to find a safe spot. They can't enter the cells where the lasers hit, and we still need to uphold Sudoku rules, so none of the lane peaks can be in the same row.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |***5***|***5***|***5***|     |***5***|     |
|     |***5***|***5***|***5***|     |***5***|     |
|     |~~×~~|***5***|~~×~~|     |***5***|     |
|     |~~×~~|~~×~~|~~×~~|     |***5***|     |
|     |~~×~~|~~×~~|~~×~~|  5  |~~×~~|     |
|     |  4  |  3  |  4  |     |  2  |     |

</div>

Ok, we could try filling the lane peaks in either from top to down, or from down to top. We'll go with the latter here, since it's probably easier to understand.

We've already got a lane peak in the bottom row. So let's consider the next row up.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     | *5* | *5* | *5* |     | *5* |     |
|     | *5* | *5* | *5* |     | *5* |     |
|     |~~×~~| *5* |~~×~~|     | *5* |     |
|     |~~×~~|~~×~~|~~×~~|**&ensp;**|***5***|     |
|     |~~×~~|~~×~~|~~×~~|  5  |~~×~~|     |
|     |  4  |  3  |  4  |     |  2  |     |

</div>

There's only one $5$ that could advance this far, since one of the columns already has that first $5$ we found which led the charge. This leaves only one spot for the $5$.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     | *5* | *5* | *5* |     |     |     |
|     | *5* | *5* | *5* |     |     |     |
|     |~~×~~| *5* |~~×~~|     |     |     |
|     |~~×~~|~~×~~|~~×~~|     |**5**|     |
|     |~~×~~|~~×~~|~~×~~|  5  |~~×~~|     |
|     |  4  |  3  |  4  |     |  2  |     |

</div>

Now we look at the next row up.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     | *5* | *5* | *5* |     |     |     |
|     | *5* | *5* | *5* |     |     |
|     |~~×~~|***5***|~~×~~|**&ensp;**|**&ensp;**|     |
|     |~~×~~|~~×~~|~~×~~|     |  5  |     |
|     |~~×~~|~~×~~|~~×~~|  5  |~~×~~|     |
|     |  4  |  3  |  4  |     |  2  |     |

</div>

Same thing here, the right two columns already have their $5$-skyscrapers. This means the $5$ that advances this far must go in the second column.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     | *5* | *5* | *5* |     |     |     |
|     | *5* | *5* | *5* |     |     |
|     |~~×~~| *5* |~~×~~|**&ensp;**|**&ensp;**|     |
|     |~~×~~|~~×~~|~~×~~|     |  5  |     |
|     |~~×~~|~~×~~|~~×~~|  5  |~~×~~|     |
|     |  4  |  3  |  4  |     |  2  |     |

</div>


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
|  2  |**&ensp;**|**&ensp;**|**&ensp;**|**&ensp;**|**&ensp;**|**&ensp;**|     |
|     |     |     |     |     |     |     |     |
|     |     |     |  6  |     |     |     |     |
|     |     |  2  |     |  4  |  5  |     |     |

> Where should the $6$ go in this row?

</div>

As usual we can ignore the head cell. The $6$ in the 3rd column also eliminates that as an option.

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

This still leaves things fairly open. Here's where the lasers come in.

# Case: Outflanked
<!-- #SQUARK live!
| dest = cases/outflanked
| capt = The effective tail cell
| index = cases
| update = 2026 April 7
-->

In some cases which require the [lane peak](../glossary.md#lane-peak) to be in the [tail cell](../glossary.md#tail-cell), we may still be able to apply the deduction if there are suitable constraints on the [past-peak](../glossary.md#past-peak) [cells](../glossary.md#cell).


## Outflanked Blockade

The cleanest example of this is [Blockade](blockade.md). Usually, this is only applicable with the lane peak in the tail cell like so:

<div class="deduction">
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |     |     |     |  5  |     |

  </div>
  
  <div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |**4**|     |     |     |  5  |     |

  </div>
</div>

However, could we also apply Blockade in this situation?

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |     |     |     |  5  |  2  |     |

</div>

Well, the lane peak isn’t in the tail cell, but there aren’t any [unsolved cells](../glossary.md#unsolved-cells) [past-peak](../glossary.md#past-peak). So all the places the $4$ can go are [pre-peak](../glossary.md#pre-peak).

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |***4***|***4***|***4***|  5  |  2  |     |

</div>

And of course, the only valid one is the [head cell](../glossary.md#head-cell).

<div class="puzzle lane">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|  2  |**4**|     |     |  5  |  2  |     |

</div>

Well, that just felt like Blockade, didn’t it?!

This works because the solved past-peak cells are irrelevant when considering the $4$. As far as the $4$ is concerned, the lane peak *is* in the tail cell, since the $4$ can’t be past-peak.

We can ‘outflank’ Blockade with other constraints, too! Here, we do have an unsolved cell past-peak:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |     |  4  |  .  |
|  .  |     |     |     |     |     |  .  |
|  2  |     |     |     |  5  |     |  .  |
|  .  |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |  .  |
|     |  .  |  .  |  .  |  .  |  .  |     |

> The only past-peak cell here is the tail cell.

</div>

We know from [Successor](successor.md) that the $4$-skyscraper must either be in the head cell or past-peak.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |     |  4  |  .  |
|  .  |     |     |     |     |     |  .  |
|  2  |***4***|     |     |  5  |***4***|  .  |
|  .  |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |  .  |
|     |  .  |  .  |  .  |  .  |  .  |     |

</div>

But, notice the other $4$ already in the column of the tail cell. This means we can’t place a $4$ in the tail cell, since the two would conflict.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |     |  4  |  .  |
|  .  |     |     |     |     |     |  .  |
|  2  | *4* |     |     |  5  |~~4~~|  .  |
|  .  |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |  .  |
|     |  .  |  .  |  .  |  .  |  .  |     |

</div>

This means it must be pre-peak, and of course the only pre-peak cell it can go in is the head cell.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |     |  4  |  .  |
|  .  |     |     |     |     |     |  .  |
|  2  |**4**|     |     |  5  |     |  .  |
|  .  |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |  .  |
|     |  .  |  .  |  .  |  .  |  .  |     |

</div>

Again, this feels just like Blockade, right?

The other $4$ is cutting off that past-peak tail cell, so it’s like it doesn’t even exist. So really, the ‘lane’ as it appears to the $4$ we want to place is just these first 4 cells:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |     |
|  .  |     |     |     |     |  4  |  .  |
|  .  |     |     |     |     |     |  .  |
|  2  |**&ensp;**|**&ensp;**|**&ensp;**|**5**|*/*|  .  |
|  .  |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |  .  |
|     |  .  |  .  |  .  |  .  |  .  |     |

</div>

Which means, as far as the $4$ is concerned, the lane peak *is* in the tail cell, so Blockade *does* apply. Pretty cool, right?

We can perform this outflanking as long as all the past-peak cells have constraints preventing the $N-1$ from being placed in them.

We’ve seen two such constraints here – a literally solved cell and a $4$ already in the lane – but any others work also work. Two easily spottable concrete ones are:

- A [laser](../tech/firing-range.md)

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |     |
|  4  |     |     |     |     |     |  .  |
|  .  |     |  5  |     |     |     |  .  |
|  .  |     |     |     |     |     |  .  |
|  .  |     |     |     |     |     |  .  |
|  .  |     |**4**|     |     |     |  .  |
|     |  .  |  2  |  .  |  .  |  .  |     |

> The $4$-clue prevents a $4$-skyscraper from being placed in the tail cell.

</div>

- A [couple](../tech/couples.md)

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |  .  |  .  |  .  |  .  |  .  |     |
|  .  | *14*|     |     |     |     |  .  |
|  .  | *14*|     |     |     |     |  .  |
|  .  |     |     |     |     |     |  .  |
|  .  |     |  5  |     |     |**4**|  2  |
|  .  |     |     |     |     |     |  .  |
|     |  .  |  .  |  .  |  .  |  .  |     |

> The $4$-skyscraper in the leftmost column appears in the couple, so it can’t be in the tail cell.

</div>

Other more subtle ones will be revealed through [pencilmarking](../tech/pencilmarks.md) ;)


## Recursive Outflanked Blockade

Now take a look at this situation, and again we’ll try to apply Blockade.

[=]

Blockade usually talks about the $N-1$ skyscraper (here, the $5$), except here the $5$ has already been used in the tail cell.

But, just like before, since all the past-peak cells are solved, the lane peak is *effectively* in the tail cell. The structure we need is the same:

[=&]

To obscure all the intermediate cells, we need the tallest currently available skyscraper. Usually that’s $N-1$, but here $5$ has been taken, so the next tallest is the $4$, and that’s the skyscraper we use for Blockade.

[=]

The logic is the same as Blockade, but we used the $N-2$ skyscraper instead of the $N-1$ skyscraper.

And we can keep going – even for a monstrous *9x9* puzzle, this recursive logic still holds.

[=]

Remember that the head cell skyscraper we want is the *tallest* available one, not just any available one. Here, the past-peak skyscrapers aren’t a consecutive set:

[=7]

> What goes in the head cell here?

There’s $\{653\}$, with a gap of $4$ – that’s the skyscraper we want, not the ‘next’ ($2$).

Also, if even one past-peak cell is unsolved, this won’t necessarily apply


## Recursive Outflanked Middle Ground

# Solution: A Masterclass in Ascendant
<!-- #SQUARK live!
| dest = solutions/masterclass-ascendant
| index = solutions
| date = 2026 June 22
| update = 2026 June 22
-->

A perfect masterclass in the power of [Case: Ascendant](../cases/ascendant.md).

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|  2  |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     |     |     |     |     |     |  2  |
|     |     |     |     |     |     |     |

</div>


## Opening

First, we have an obvious [lane peak]() as a result of [lasers](../tech/firing-range.md).

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|  2  |     |     |     |**5**|     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     |     |     |     |     |     |  2  |
|     |     |     |     |     |     |     |

> This is the only spot where the $5$ does not block a $2$-clue.

</div>

But from here, we're really in a pickle. All we've got are a bunch of $2$-clues, no [opposing]() clues, and not much interaction between them.

But as we'll find out, the secret is *all* in the interaction between them.


## Blockade

The first [lane]() we might want to look at is the top row, since we have the most constraints here.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|**2**|**&ensp;**|**&ensp;**|**&ensp;**|**5**|**&ensp;**|     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     |     |     |     |     |     |  2  |
|     |     |     |     |     |     |     |

> More constraints means more information, so we're more likely to be able to make a deduction.

</div>

A good question to consider here is, “Must the [head cell]() be the $4$-skyscraper?”

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|  2  |***4***|     |     |  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     |     |     |     |     |     |  2  |
|     |     |     |     |     |     |     |

> Is there anything saying we *must* have a $4$ here?

</div>

Well, we could also put the $4$ after the peak, and everything would be fine, so we can't say this for sure yet.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|  2  |     |     |     |  5  |***4***|     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     |     |     |     |     |     |  2  |
|     |     |     |     |     |     |     |

</div>

For now, we'll pencil in $[34]$ and $[123]$ via [Case: Leap of Faith](../cases/leap-of-faith.md).

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|  2  |***34***|***123***|***123***|  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     |     |     |     |     |     |  2  |
|     |     |     |     |     |     |     |

</div>

Now let's focus on the bottom row, and consider where the lane peak can go. The 2nd column is taken, so that leaves just the last 3 columns.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|  2  | *34*|*123*|*123*|  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     |***5***|***5***|***5***|     |     |  2  |
|     |     |     |     |     |     |     |

</div>

Now [Case: Blockade](../cases/blockade.md) comes in. Consider these two adjacent $2$-clue columns. In these lanes, if the $5$ is in the [tail cell](), then the $4$ must be in the head cell.

<div class="puzzle hypothetical">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|  2  | *34*|*123*|**4**|  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     | *5* | *5* |**5**|     |     |  2  |
|     |     |     |     |     |     |     |

</div>

But we've already deduced the candidates for those head cells to be $[123]$, so a $4$ can't go there. So contrapositively, the $5$ cannot go there.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|  2  | *34*|*123*|*123*|  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     | *5* |~~5~~|~~5~~|     |     |  2  |
|     |     |     |     |     |     |     |

</div>

And that leaves only this spot for the $5$. Nice!

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|  2  | *34*|*123*|*123*|  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     |**5**|     |     |     |     |  2  |
|     |     |     |     |     |     |     |

</div>

Now we can actually use Blockade, putting a $4$ here.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|  2  | *34*|*123*|*123*|  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     |  5  |     |     |     |**4**|  2  |
|     |     |     |     |     |     |     |

</div>

And *now* we can determine with certainty that original head cell must be a $4$, since the right column now has the $4$ consumed.

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |  2  |  2  |     |  2  |     |
|  2  |**4**|*123*|*123*|  5  |     |     |
|     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |
|  3  |     |     |     |     |     |     |
|     |  5  |     |     |     |  4  |  2  |
|     |     |     |     |     |     |     |

</div>

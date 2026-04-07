# Technique: Skylining
<!-- #SQUARK live!
| dest = tech/skylining
| capt = Peaking the Grid
| index = tech
| date = 2026 February 25
| update = 2026 March 15
-->
<!-- TODO -->

The most important skyscrapers in an *NxN* Skyscrapers puzzle are the $N$-skyscrapers. For instance, in a *5x5* Skyscrapers they’re the five $5$-skyscrapers:

<div class="puzzle">

||||||||
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
|     |     |     |     |     |     |     |
|     |  3  |  1  |**5**|  4  |  2  |     |
|     |  2  |  3  |  4  |**5**|  1  |     |
|     |  4  |**5**|  1  |  2  |  3  |     |
|     |  1  |  4  |  2  |  3  |**5**|     |
|     |**5**|  2  |  3  |  1  |  4  |     |
|     |     |     |     |     |     |     |

</div>

I call these ***lane peaks***. Following the namesake of the puzzle, if we were to visualise the skyscrapers in the grid we’d have an urban city skyline of buildings. The $N$-skyscrapers would be the tallest buildings, visible from any of the four sides.

Solving the lane peaks is central to solving a Skyscrapers puzzle. Abstractly, they’re the heart of the structure of the puzzle which everything else centers around. Concretely, most logical deductions we could make *require* the lane peak to be solved.

We can still make some general deductions in a lane even without a lane peak, and these can even assist in finding the lane peak. But we really just want to find the lane peak. In short, *specificity beats generality*.

There’s not much else to really say here. To really feel the importance of lane peaks, you just need to solve a lot of Skyscrapers. So, from here we’ll just look at many example scenarios where finding the lane peak is helpful.

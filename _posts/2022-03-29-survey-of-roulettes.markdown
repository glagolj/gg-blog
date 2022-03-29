---
layout: post
title:  "Survey of roulettes"
date:   2022-03-29 12:15:46 +0100
categories: roulette
---



The goal of this article is to try to systematically survey [2nd order roulette curves][my-article-1]. Or gear-in-hoop-in-wheel spirograph.
Three [most important parameters][my-article-3] are 3 numbers T, T<sub>1</sub>, and T<sub>3</sub> that form ratios or frequencies
F=(T<sub>1</sub>/T,T<sub>3</sub>/T). 
However that is one parameter too many for any systematic display, since 2D grids work best. At least for me.
But it turns out that T is the [least important][my-article-3] parameter.
For instance look at the expression for the number of rotational symmetries: n<sub>symm</sub>=gcd(T<sub>1</sub>,T<sub>3</sub>), 
it **does not** contain T.


Since T is less important parameter we can make T<sub>1</sub> vs T<sub>3</sub> grid of curves.
Though that still leaves a question of how to select a "representative" value of T.
I have a few hundred "nice" looking curves in few galleries. 
That set has various parameters, but on average it seems that T is close to about 0.8T<sub>1</sub> for most of the curves.
Such a choice (pick an integer T close to 0.8T<sub>1</sub>) is a good choice, but I found one even better criterion:
It comes from the observation that when the cogs are very different in size the outcome starts to be easy to predict, such as "ropy spirograph" pattern.
Thus for a given T<sub>1</sub> and T<sub>3</sub> we can examine all possible values of T&lt;T<sub>1</sub> ([inversion procedure][my-article-1-section-8]) and select a value T that gives the smallest ratio of the wheel to gear size: n<sub>0</sub>/n<sub>3</sub>.
Such a choice forces gears to be of similar size, as much as possible, and that in turns makes lines from different cog turns cross and mix more.
That doesn't mean it will always look the best, but to me it seems that more often than not it produces striking patterns.



Finally we can produce 2D grids but aim for specific rotational symmetries, 
i.e. lets try to show for instance only n<sub>symm</sub>=7 grid.
Then the choice of X axis is T<sub>1</sub>=7x, where x is positive integer. 
Since we need to observe condition T<sub>1</sub>&lt;T<sub>3</sub> using T<sub>3</sub>=7y would make half of the plot empty.
A more compact form is to use T<sub>3</sub>=T<sub>1</sub>+7y, where y is positive integer. 
This will give **at least** 7-fold symmetry, but in quarter of the cases it will make 14-fold symmetry (e.g. x=4 and y=2), and in 1/9 cases 21-fold, etc.
I decided to keep those higher symmetries in the plot, as it looks better than leaving blank panel (click on the image for large version):


<a href="../../../../images/a004-t1_t3_grid-nsymm07-large.png"><img src="../../../../images/a004-t1_t3_grid-nsymm07-small.png" alt="Fig.1 n<sub>symm</sub>=7 grid."></a>


The image is really striking, and more ordered than naively expecting.
I did expect, for instance, that diagonal x=y resembles ordinary spirographs, as that is just doubling the frequency (i.e. T<sub>3</sub>=2T<sub>1</sub>).
But there are other patterns as well.
One strongest is for instance along the line (x=2,y=1), (x=4,y=2), (6,3) and (8,4) shapes are also similar in a way: there are individual lobes sticking out of a disk pattern. 
This is also some beating of frequencies, as numbers can be summarized as 2T<sub>3</sub>=3T<sub>1</sub>.
Patterns also separate in type. Lower-right has lobes sticking out, while the upper-left side is more disc or rose like.


And interestingly there is a strong resemblance between individual panels to other n<sub>symm</sub> values. For instance compare above plot to   n<sub>symm</sub>=5 grid:


<a href="../../../../images/a004-t1_t3_grid-nsymm05-large.png"><img src="../../../../images/a004-t1_t3_grid-nsymm05-small.png" alt="Fig.2 n<sub>symm</sub>=5 grid."></a>


And n<sub>symm</sub>=4:


<a href="../../../../images/a004-t1_t3_grid-nsymm04-large.png"><img src="../../../../images/a004-t1_t3_grid-nsymm04-small.png" alt="Fig.3 n<sub>symm</sub>=4 grid."></a>


I will give here links to other grids:
<a href="../../../../images/a004-t1_t3_grid-nsymm12-large.png">n<sub>symm</sub>=12</a>,
<a href="../../../../images/a004-t1_t3_grid-nsymm11-large.png">n<sub>symm</sub>=11</a>,
<a href="../../../../images/a004-t1_t3_grid-nsymm10-large.png">n<sub>symm</sub>=10</a>,
<a href="../../../../images/a004-t1_t3_grid-nsymm09-large.png">n<sub>symm</sub>=9</a>,
<a href="../../../../images/a004-t1_t3_grid-nsymm08-large.png">n<sub>symm</sub>=8</a>,
<a href="../../../../images/a004-t1_t3_grid-nsymm06-large.png">n<sub>symm</sub>=6</a>,
<a href="../../../../images/a004-t1_t3_grid-nsymm03-large.png">n<sub>symm</sub>=3</a>,
<a href="../../../../images/a004-t1_t3_grid-nsymm02-large.png">n<sub>symm</sub>=2</a>,
<a href="../../../../images/a004-t1_t3_grid-nsymm01-large.png">n<sub>symm</sub>=1</a>,


One has to remember that these 2D grids are still a small slice of all
possibilities: each panel represents many other curves that have same
T<sub>1</sub> and T<sub>3</sub>, but different T. Most will be boring
("ropy" pattern, ...), but some might have lines spread in different,
maybe more pleasing, way. Still, they should be in a way similar to
the displayed panels (check [previous article][my-article-3] for an
example cut along T).


Also a useful information is that on average my code was finding T values (zoom into images to read small legend next to each panel) that are very close to about T≈0.8T<sub>1</sub>.
Another detail that might be needed to reproduce the plots: during the [frequency inversion][my-article-1-section-8] one can choose integers a and b in different ways, and my code prefers values that make n<sub>1</sub>≈2n<sub>2</sub>, which in turn allows hoop separation h of about 0.5.




[my-article-1]:          https://glagolj.github.io/gg-blog/roulette/2022/03/14/second-order-roulette.html
[my-article-1-section-8]:          https://glagolj.github.io/gg-blog/roulette/2022/03/14/second-order-roulette.html#8-inversion-from-frequencies
[my-article-2]:          https://glagolj.github.io/gg-blog/roulette/2022/03/25/grid-of-roulettes.html
[my-article-3]:          https://glagolj.github.io/gg-blog/roulette/2022/03/27/roulette-parameters.html



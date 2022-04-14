---
layout: post
title:  "Digging roulettes"
date:   2022-04-14 09:15:46 +0100
categories: roulette
---


Armed with an equation that sorts patterns in [similarity][my-article-6] sets I attempt here to find more of the interesting 2nd order roulette patterns.
In the last section I attempt another survey of different curves.
TLDR: just look at the dizzying patterns in images.


## 1 Rose and ropy patterns 


So far I have been digging for interesting curves in part of the parameter space F=(T<sub>1</sub>/T,T<sub>3</sub>/T).
Most curves that I have displayed so faw were for about T<sub>3</sub> &lt; 2T<sub>1</sub>.
I have tried to tackle the rest of the space, for T<sub>3</sub> &gt; 2T<sub>1</sub>, but I didn't have much progress.
The next figure shows 3 typical outcomes in this part of the parameter space (click for larger image):


<a href="../../../../images/a007-t1_015-t3_055-large.png"><img src="../../../../images/a007-t1_015-t3_055-small.png" alt="Fig.1."></a>


The middle is the famous "ropy" pattern, and left and right are "roses" or some "flowers".
All 3 curves have the same T<sub>1</sub>=15, and T<sub>3</sub>=55, while T=11, 12, and 13.
That is truly typical outcome for T<sub>3</sub> &gt; 2T<sub>1</sub>.
Most curves will look like one of the 3 on display, or some combination of them.
To me they are somewhat less interesting.
I think that reason for that is that the smallest gear n<sub>3</sub> is much smaller than the wheel n<sub>0</sub>,
and there is less mixing of lines from different turns of cogs.
And ratio n<sub>0</sub>/n<sub>3</sub> is roughly proportional to T<sub>3</sub>/T<sub>1</sub>.


While I didn't find any way to algorithmically sort different "flowers", I found an expression that can distinguish
"ropy" outcome from "flowers":


d<sub>1</sub> = (n<sub>0</sub>/n<sub>3</sub>)  ⋅ gcd(T<sub>1</sub>,T) / T<sub>1</sub>.


The "ropy" appears when the base hypotrochoid f<sub>0</sub> (see  [here][my-article-1-section-3]) has fewer lobes. 
Or in other words when T<sub>1</sub> and T are bit commensurable.
The expression d<sub>1</sub> then compares the distance between lobes of the base hypotrochoid f<sub>0</sub> 
(roughly circumference divided by number of f<sub>0</sub> lobes) to the extent 
of hypotrochoid f<sub>1</sub> lines (roughly n<sub>3</sub>).
The larger values of d<sub>1</sub> increase the chance that we have a "ropy" curve. 
A cutoff value seems to be about 1, but it is not sharp cut, more of a gradual transformation.
The above image has values: d<sub>1</sub>=0.75, 1.92 and 0.67.



## 2 Sorting function


One of the common tasks is to search through big number of combinations to find interesting patterns.
I think this is true also when one has bunch of acrylic cogs and is trying to select for next pattern to draw on paper.
The best distance function I found to sort patterns from simple to more complex is:

d<sub>2</sub><sup>2</sup> = 
w<sub>1</sub> T<sub>1</sub><sup>2</sup> +
w<sub>3</sub> (T<sub>3</sub> - T<sub>1</sub>)<sup>2</sup> +
(T<sub>1</sub> - T<sub>1</sub>/n<sub>symm</sub> - T)<sup>2</sup>

Here w<sub>1</sub> and w<sub>3</sub> are simple numerical weights, for instance w<sub>1</sub>=4 and w<sub>3</sub>=1.
The idea is to give more weight to T<sub>1</sub>, which is the most important parameter.
The term with T in the equation is inspired from the similarity sets, as c=0 seems like a central value.
The distance function d<sub>2</sub> can be combined together with another criterion such as n<sub>0</sub>/n<sub>3</sub>&lt;15 or d<sub>1</sub>&lt;1.5.
Or we can say T<sub>1</sub>&lt;100, meaning "I do not want to roll hoop piece more than 100 times".


## 3 A survey of patterns


This is another attempt at survey of patterns, but this time I aim to display curves from different "similarity sets".
The [previous article][my-article-6] described a striking similarity of curves. For a given constant 
c=c<sub>p</sub>/c<sub>q</sub>, where c<sub>p</sub> and c<sub>q</sub> are mutually prime integers, there are 
infinitely many similar curves F=(T<sub>1</sub>/T,T<sub>3</sub>/T) and somewhat recasted equation reads:

T<sub>1</sub> = k ⋅ n<sub>symm</sub>,

T<sub>3</sub> = T<sub>1</sub> + l ⋅ c<sub>q</sub> ⋅ n<sub>symm</sub>,

T = T<sub>1</sub> - k + l ⋅ c<sub>p</sub>,

where k and l are now arbitrary positive integers (but not all possible k,l are allowed, the space is like a swiss cheese).
Rotational symmetry is n<sub>symm</sub>=gcd(T<sub>1</sub>,T<sub>3</sub>).
Similarity of curves roughly holds for T<sub>3</sub> &le; 2T<sub>1</sub>,
or until we approach "roses" and "ropy" patterns. The condition is roughly equivalent to c&ge;0. 


If we need to recover constant c from a given F=(T<sub>1</sub>/T,T<sub>3</sub>/T) we can use the inversion function:

c  = ( T<sub>1</sub> - n<sub>symm</sub>⋅(T<sub>1</sub> - T) ) / (T<sub>3</sub> - T<sub>1</sub>).




For each constant c=c<sub>p</sub>/c<sub>q</sub> we have an infinite set of similar curves  F=(T<sub>1</sub>/T,T<sub>3</sub>/T) for k and l integers.
Then we can select one curve as a representative (for instance using d<sub>2</sub> distance function).


The result is a dizzying array of patterns. Here is a plot for n<sub>symm</sub>=7 (click for large image):

<a href="../../../../images/a007-nsymm07-8x5-large.png"><img src="../../../../images/a007-nsymm07-8x5-small.png" alt="Fig.2: n<sub>symm</sub>=7."></a>


The result looks more even compared to my previous attempt at [survey][my-article-4].
Part of it is because I was now able to choose more similar "complexity" of curves by picking similar d<sub>2</sub> values.
And curves are also more varied in shape, as we are now showing patterns "orthogonal" to similarity sets.



Here is plot for n<sub>symm</sub>=5:


<a href="../../../../images/a007-nsymm05-8x5-large.png"><img src="../../../../images/a007-nsymm05-8x5-small.png" alt="Fig.3: n<sub>symm</sub>=5."></a>


There is a lot of similarity to panels from 7-fold symmetry.
And lets show n<sub>symm</sub>=6:


<a href="../../../../images/a007-nsymm06-8x5-large.png"><img src="../../../../images/a007-nsymm06-8x5-small.png" alt="Fig.4: n<sub>symm</sub>=6."></a>


What is also interesting is a plot of curves without rotational symmetry n<sub>symm</sub>=1:


<a href="../../../../images/a007-nsymm01-8x5-large.png"><img src="../../../../images/a007-nsymm01-8x5-small.png" alt="Fig.5: n<sub>symm</sub>=1."></a>


I used c&gt;0.58, as small values are boring (see c=2/3 or c=3/4).


Comparing plots for different symmetries it looks that there is some property that is captured in the value of constant
c=c<sub>p</sub>/c<sub>q</sub>.  Looking at c=3/1 for different n<sub>symm</sub> there is clearly the same "theme" on display.
But also for more complicated fractions. 
It does seem that value c<sub>p</sub>/c<sub>q</sub> is capturing some property of these curves.
However since I don't know where does it come from, nor I have any theory behind it, this is more of 
an "experimental" approach 😀.






[my-article-1]:          https://glagolj.github.io/gg-blog/roulette/2022/03/14/second-order-roulette.html
[my-article-1-section-8]:          https://glagolj.github.io/gg-blog/roulette/2022/03/14/second-order-roulette.html#8-inversion-from-frequencies
[my-article-1-section-3]:          https://glagolj.github.io/gg-blog/roulette/2022/03/14/second-order-roulette.html#3-two-special-cases-and-f_0-and-f_1
[my-article-2]:          https://glagolj.github.io/gg-blog/roulette/2022/03/25/grid-of-roulettes.html
[my-article-3]:          https://glagolj.github.io/gg-blog/roulette/2022/03/27/roulette-parameters.html
[my-article-4]:          https://glagolj.github.io/gg-blog/roulette/2022/03/29/survey-of-roulettes.html
[my-article-5]:          https://glagolj.github.io/gg-blog/roulette/2022/04/04/unexpected-similarity.html
[my-article-6]:          https://glagolj.github.io/gg-blog/roulette/2022/04/07/and-another-similarity.html


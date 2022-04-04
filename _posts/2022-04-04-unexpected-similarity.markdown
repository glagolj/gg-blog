---
layout: post
title:  "Unexpected similarity"
date:   2022-04-04 09:15:46 +0100
categories: roulette
---


The previous articles shows that there is some visual order in the world of crazy [2nd order roulette curves][my-article-1].
I particularly like the bottom rows of [the survey grids][my-article-4]: when the curve parameter T<sub>3</sub> is smallest possible: T<sub>3</sub>=T<sub>1</sub>+n<sub>symm</sub>.
What I like is how lobes are sticking out from the center.
But when I was trying to get more of that, with different cuts through parameter space, I noticed an unexpected similarity between curves.
Here is an example cut with T<sub>1</sub> on x axis, and T on Y axis, while I fixed T<sub>3</sub>=T<sub>1</sub>+n<sub>symm</sub> and rotational symmetry n<sub>symm</sub>=7
(click on the image for larger version):


<a href="../../../../images/a005-s07_dt07-8x5-large.png"><img src="../../../../images/a005-s07_dt07-8x5-small.png" alt="Fig.1: T<sub>3</sub>=T<sub>1</sub>+n<sub>symm</sub> and n<sub>symm</sub>=7."></a>


The missing panels are either because parameters do not satisfy T&lt;T<sub>1</sub>&lt;T<sub>3</sub>, or T contains a factor that divides both T<sub>1</sub> and T<sub>3</sub>.
The rows are very very similar. 
Each successive panel looks like the previous one, but with one more line added in consistent way to the rest.


Each row of such similarity can be described in a following way.
For a given curve F=(T<sub>1</sub>/T,T<sub>3</sub>/T) and rotational symmetry n<sub>symm</sub>=gcd(T<sub>1</sub>,T<sub>3</sub>), there are
similar curves with:

T<sub>1</sub>' = T<sub>1</sub> + k ⋅ n<sub>symm</sub>,

T<sub>3</sub>' = T<sub>3</sub> + k ⋅ n<sub>symm</sub>,

T' = T + k ⋅ (n<sub>symm</sub> - 1),

where k is arbitrary integer.
Though some combinations of k vs other parameters will not be possible; either because of T'&lt;T<sub>1</sub>'&lt;T<sub>3</sub>' or T' should not contain a factor that divides both T<sub>1</sub>' and T<sub>3</sub>'.
The equation is valid for n<sub>symm</sub>=1 as well.


The above expression can probably be proven in a formal way, but I think it is clear what happens:
We are literally adding another line to the design and forcing it to "beat" in the same way, or in other words have lobes in exactly the same positions like in the original pattern.


Such similarity is there for all curves, though it may not be always too obvious.
For instance this is cut for T<sub>3</sub>=T<sub>1</sub>+2n<sub>symm</sub> and n<sub>symm</sub>=7:


<a href="../../../../images/a005-s07_dt14-8x5-large.png"><img src="../../../../images/a005-s07_dt14-8x5-small.png" alt="Fig.2: T<sub>3</sub>=T<sub>1</sub>+2n<sub>symm</sub> and n<sub>symm</sub>=7."></a>


Panels in each row resemble each other, especially when contrasted in such a way.
But what is even better is to contrast the two images: each panel at the same (x,y) position in both plots resemble each other.
That is because of the (weaker) similarity of nearby T<sub>3</sub> parameters: as utilized in [the survey article][my-article-4].



I find these curves just marvelous. So two more plots, T<sub>3</sub>=T<sub>1</sub>+n<sub>symm</sub> and n<sub>symm</sub>=5:


<a href="../../../../images/a005-s05_dt05-8x5-large.png"><img src="../../../../images/a005-s05_dt05-8x5-small.png" alt="Fig.3: T<sub>3</sub>=T<sub>1</sub>+n<sub>symm</sub> and n<sub>symm</sub>=5."></a>



and T<sub>3</sub>=T<sub>1</sub>+2n<sub>symm</sub> and n<sub>symm</sub>=5:


<a href="../../../../images/a005-s05_dt10-8x5-large.png"><img src="../../../../images/a005-s05_dt10-8x5-small.png" alt="Fig.4: T<sub>3</sub>=T<sub>1</sub>+2n<sub>symm</sub> and n<sub>symm</sub>=5."></a>



I suspect that there is even a better way to show all such similarities compared to my initial prod in the [the survey article][my-article-4].


As a last note: it is becoming increasingly difficult to match these kind of designs on paper with wild gears.
I think that one can probably design a special set of wild gears to maximize "nice outcomes".
And I also do a bit of "cheating" in these plots. For instance, I use frequency inversion (T<sub>1</sub>/T,T<sub>3</sub>/T) =&gt; (n<sub>0</sub>:n<sub>1</sub>;n<sub>2</sub>:n<sub>3</sub>)  that gives hoop offset of about h=0.45, while wild gears have h parameter in larger range. In turn larger range of h bit diminishes visual similarity, but it doesn't ruin it.



[my-article-1]:          https://glagolj.github.io/gg-blog/roulette/2022/03/14/second-order-roulette.html
[my-article-1-section-8]:          https://glagolj.github.io/gg-blog/roulette/2022/03/14/second-order-roulette.html#8-inversion-from-frequencies
[my-article-2]:          https://glagolj.github.io/gg-blog/roulette/2022/03/25/grid-of-roulettes.html
[my-article-3]:          https://glagolj.github.io/gg-blog/roulette/2022/03/27/roulette-parameters.html
[my-article-4]:          https://glagolj.github.io/gg-blog/roulette/2022/03/29/survey-of-roulettes.html



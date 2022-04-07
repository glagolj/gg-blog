---
layout: post
title:  "And another similarity"
date:   2022-04-07 11:15:46 +0100
categories: roulette
---


What I like the most about the gear-in-hoop-in-wheel spirograph curves is that the incredible variety of patterns is 
relatively easily reproducible on paper with just 3 simple geared elements.
Well, maybe not all of it with the current set of wild gears, but still.
But it just keeps surprising me with the intriguing patterns that are possible.
Let me first show  plot of another axis of similarity (click on the image for large version):


<a href="../../../../images/a006-s07_c_1_1-8x5-large.png"><img src="../../../../images/a006-s07_c_1_1-8x5-small.png" alt="Fig.1: n<sub>symm</sub>=7 and c=1."></a>


The patterns are very similar to each other, and continue to infinity both to the right, and beyond the top of the image.
The succeeding patterns are very alike, with adding a lobe here and there, but in a very consistent way.
The above plot looks like some 7-sided snowflakes, and each is reminiscent of the previous one.


In [the previous article][my-article-5] I described the first unexpected similarity of patterns.
For each curve there are infinity many other curves that are similar looking.
The above plot shows that similarity axis (left-right), but also another one as well (top-bottom).
While I was further slicing and dicing the parameter space I noticed that there is another, independent, axis of similarity.
However this took quite a while to find a working equation for parameters, as it was "experimental mathematics".
I don't have formal proof for any of this, but I tested extensively for many many curves and parameters.



Equation describing similarity of curves is as follows.
For a given curve F=(T<sub>1</sub>/T,T<sub>3</sub>/T) and rotational symmetry n<sub>symm</sub>=gcd(T<sub>1</sub>,T<sub>3</sub>), there are
similar curves F'=(T<sub>1</sub>'/T',T<sub>3</sub>'/T') with:

T<sub>1</sub>' = T<sub>1</sub> + k ⋅ n<sub>symm</sub>,

T<sub>3</sub>' = T<sub>3</sub> + k ⋅ n<sub>symm</sub> + l ⋅ n<sub>symm</sub>,

T' = T + k ⋅ (n<sub>symm</sub> - 1) + c ⋅ l,

c  = ( T<sub>1</sub> - n<sub>symm</sub>⋅(T<sub>1</sub> - T) ) / (T<sub>3</sub> - T<sub>1</sub>),

where k and l are arbitrary integers, and c is a constant that can be a rational number (though often it is integer).
The part with k was topic of [the previous article][my-article-5], while we now added l terms.
The hardest part for me was figuring out c⋅l term. I don't know where does that come from.


The above plot example is completely described with n<sub>symm</sub>=7 and c=1:
 then X axis is k increasing while l constant, and Y axis is k constant and l increasing.
Such images typically have missing panels.
That is partially as we need physically possible gear system T'&lt;T<sub>1</sub>'&lt;T<sub>3</sub>' (missing top-left).
Then some (k,l) values will give a higher symmetry (multiple of n<sub>symm</sub>) or T' should not contain a factor that divides both T<sub>1</sub>' and T<sub>3</sub>'. 
And if c is fraction then c⋅l has to be an integer.
This (k,l) swiss cheese with holes reminds of sieve of Eratosthenes.
But when one looks back at (T<sub>1</sub>',T<sub>3</sub>',T') the values form a lattice (with some missing vertices).


Simpler curves are typically obtained with small integer c&ge;0, such as c=0, or 1, or 2...
Somewhat more complex curves are obtained for small fractions, such as, c=1/2, or 1/3 or 2/3.
As far as I can tell c&lt;0 is also a valid choice, but to me it looks that visual similarity is then restricted to T<sub>3</sub> &le; 2T<sub>1</sub>, 
however this needs more work.



Here is another plot with  n<sub>symm</sub>=7 and c=2:





<a href="../../../../images/a006-s07_c_2_1-8x5-large.png"><img src="../../../../images/a006-s07_c_2_1-8x5-small.png" alt="Fig.2: n<sub>symm</sub>=7 and c=2."></a>


Or n<sub>symm</sub>=5 and c=2:


<a href="../../../../images/a006-s05_c_2_1-8x5-large.png"><img src="../../../../images/a006-s05_c_2_1-8x5-small.png" alt="Fig.3: n<sub>symm</sub>=5 and c=2."></a>



n<sub>symm</sub>=3 and c=2:


<a href="../../../../images/a006-s03_c_2_1-8x5-large.png"><img src="../../../../images/a006-s03_c_2_1-8x5-small.png" alt="Fig.4: n<sub>symm</sub>=3 and c=2."></a>


Final remark: hoop offsets I used are about h=0.45, while wild gears have h parameter in larger range which would somewhat diminish visual similarity.



[my-article-1]:          https://glagolj.github.io/gg-blog/roulette/2022/03/14/second-order-roulette.html
[my-article-1-section-8]:          https://glagolj.github.io/gg-blog/roulette/2022/03/14/second-order-roulette.html#8-inversion-from-frequencies
[my-article-2]:          https://glagolj.github.io/gg-blog/roulette/2022/03/25/grid-of-roulettes.html
[my-article-3]:          https://glagolj.github.io/gg-blog/roulette/2022/03/27/roulette-parameters.html
[my-article-4]:          https://glagolj.github.io/gg-blog/roulette/2022/03/29/survey-of-roulettes.html
[my-article-5]:          https://glagolj.github.io/gg-blog/roulette/2022/04/04/unexpected-similarity.html




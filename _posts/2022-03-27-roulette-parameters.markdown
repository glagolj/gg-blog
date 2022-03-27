---
layout: post
title:  "Roulette parameters"
date:   2022-03-27 12:53:42 +0100
categories: roulette
---


Let us try to shed some light on roulette parameters and which numbers produce interesting shapes.
Just by glancing at the [grid of outcomes][my-article-2] it is clear that teeth numbers wildly change the appearance of the curves. 
A fine control is only possible through a different set of parameters, namely what I call frequencies F=(T<sub>1</sub>/T,T<sub>3</sub>/T), or simply the teeth number ratios.
This is continuation  of the topics raised in the [1st article][my-article-1].


For **TLDR**: there is a short takeaway at the end of the article.



Ordinary spirograph is rather simple to predict. For instance both (105:63) and (140:84) will produce very similar curves since the ratio of the numbers is the same f<sub>0</sub>=n<sub>0</sub>/n<sub>1</sub>. We have f<sub>0</sub>=105/63=80/48=5/3.
It is clear that any (5a:3a) spirograph will produce similar shape (a is arbitrary positive integer).


In a similar way, the 2nd order roulette (n<sub>0</sub>:n<sub>1</sub>;n<sub>2</sub>:n<sub>3</sub>) is governed with 2 ratios F=(f<sub>0</sub>,f<sub>1</sub>) where f<sub>0</sub>=n<sub>0</sub>/n<sub>1</sub> and f<sub>1</sub>=n<sub>0</sub>⋅n<sub>2</sub>/(n<sub>1</sub>⋅n<sub>3</sub>).
Somewhat of a complication is that the frequencies or ratios are best [expressed][my-article-1-section-4] 
as two fractions with smallest common denominator: F=(T<sub>1</sub>/T,T<sub>3</sub>/T). 
This is the same procedure as we would use to sum two fractions with different denominators.
But the gain is that the numbers have immediate meaning: T is the number of times we turn inside the big static wheel n<sub>0</sub>, 
T<sub>3</sub> is the number of lobes in the pattern, T<sub>1</sub> is number of hoop turns, and their greatest common divisor n<sub>symm</sub>=gcd(T<sub>1</sub>,T<sub>3</sub>) is the number of rotational symmetries.


## 1 Keep F=(T<sub>1</sub>/T,T<sub>3</sub>/T) the same

We can also calculate in the opposite direction:
The two fractions F=(T<sub>1</sub>/T,T<sub>3</sub>/T) can be [inverted][my-article-1-section-8] to predict which teeth numbers (n<sub>0</sub>:n<sub>1</sub>;n<sub>2</sub>:n<sub>3</sub>) give the same curve.
Lets use a simple example F=(10/8,15/8), which is a light 5-fold symmetric curve (5 is largest common factor of 10 and 15).
Inversion gives us teeth numbers (5a:4a;3b:2b), which is **∞<sup>2</sup>** possibilities since a and b are arbitrary positive integers.
I was still surprised to find that wild gears can be accomplish that in 12 different ways:
(75:60;24:16), (75:60;30:20), (100:80;54:36), (105:84;36:24), (110:88;30:20), (120:96;72:48), (135:108;45:30), (135:108;48:32), (135:108;63:42), (160:128;54:36), (160:128;96:64), and (200:160;81:54).
The next figure shows 3 of those 12 different cog combinations (click on the image for larger version). While the curves are not exactly the same, as other parameters (such as hoop offset h or pen-hole distance p) influence amplitudes, it is clearly the very same type of pattern.


<a href="../../../../images/a003-075_060_024_016-110_088_030_020-135_108_045_030-large.png"><img src="../../../../images/a003-075_060_024_016-110_088_030_020-135_108_045_030-small.png" alt="Fig.1 Three different ways to archive F=(10/8,15/8)."></a>


## 2 Change T for constant T<sub>1</sub> and T<sub>3</sub>



Next we can examine how does pattern change by keeping 2 out of 3 numbers T, T<sub>1</sub>, and T<sub>3</sub> the same.
So far I tried my best to keep everything reproducible with wild gears on paper. 
But from this point we are scanning through all possible combinations and not all choices are (yet?) possible with wild gears.
The numbers T<sub>1</sub> and T<sub>3</sub> directly influence rotation symmetry n<sub>symm</sub>=gcd(T<sub>1</sub>,T<sub>3</sub>), thus changing T and keeping T<sub>1</sub> and T<sub>3</sub> the same, is the smallest deviation from the nature of the pattern. 
The next figure shows T<sub>1</sub>=10 and T<sub>3</sub>=15, while T=3, 4, 6, 7, 8, and 9. Note that we have to keep T<T<sub>1</sub><T<sub>3</sub> (gears have to physically fit), and also  T=5  is not available as it would divide both T<sub>1</sub> and T<sub>3</sub>. 
The shown patterns have certain similarity. 




<a href="../../../../images/a003-t1_10-t3_15-3x2-large.png"><img src="../../../../images/a003-t1_10-t3_15-3x2-small.png" alt="Fig.2 T<sub>1</sub>=10, T<sub>3</sub>=15."></a>


A notable thing to observe is that the first panel F=(10/3,15/3) is the least interesting. 
Essentially that is because the gear elements are very different in size (the static wheel n<sub>0</sub> is much bigger than the rest). 
This suggest that attractive curves probably require values T, T<sub>1</sub> and T<sub>3</sub> of somewhat similar order of magnitude, as that will produce similar size of cog elements. 


## 3 Change T<sub>3</sub> for constant T and T<sub>1</sub>


The next experiment is to change T<sub>3</sub> while keeping T and T<sub>1</sub> fixed. 
There are two versions, as we can decide to still keep rotation symmetry the same n<sub>symm</sub>=5 (then T<sub>3</sub>=5+10k), or not (T<sub>3</sub> is arbitrary: T<sub>3</sub>>T<sub>1</sub>).
If we are to keep n<sub>symm</sub>=5 then we have progression of T<sub>3</sub> numbers: 15, 25, 35, 45, ... Value T<sub>3</sub>=20 is not avaliable as it would give n<sub>symm</sub>=10.


<a href="../../../../images/a003-t_8-t1_10-3x2-large.png"><img src="../../../../images/a003-t_8-t1_10-3x2-small.png" alt="Fig.3 T=8, T<sub>1</sub>=10, while keeping n<sub>symm</sub>=5."></a>


While there is similarity between panels (especially T<sub>3</sub>=15 and T<sub>3</sub>=25), the most apparent is how the gear n<sub>3</sub> becomes smaller and smaller and the pattern looks more and more like a "ropy" ordinary spirograph. So again for the more interesting look T, T<sub>1</sub> and T<sub>3</sub> need similar order of magnitude. 


We can also drop the requirement to keep n<sub>symm</sub>=5. And then look at any value of T<sub>3</sub>>T<sub>1</sub>, but we need odd values of T<sub>3</sub> since both T<sub>1</sub> and T are already even:


<a href="../../../../images/a003-t_8-t1_10-nosymm-3x3-large.png"><img src="../../../../images/a003-t_8-t1_10-nosymm-3x3-small.png" alt="Fig.4 T=8, T<sub>1</sub>=10, but not keeping n<sub>symm</sub>=5."></a>


This makes for  an interesting figure. Symmetry is mostly lost, and that impacts the impression. However there is still a streak of similar details across the panels. 


## 4 Change T<sub>1</sub> for constant T and T<sub>3</sub>


The last experiment is to keep T and T<sub>3</sub> same, but change T<sub>1</sub>. Due to the choosen numbers and condition T<T<sub>1</sub><T<sub>3</sub> we can't keep the same symmetry across panels:


<a href="../../../../images/a003-t_8-t3_15-nosymm-3x2-large.png"><img src="../../../../images/a003-t_8-t3_15-nosymm-3x2-small.png" alt="Fig.5 T=8, T<sub>3</sub>=15; it is not possible to keep n<sub>symm</sub>=5."></a>


Now there is less of similarity between panels. It is even hard to keep the same symmetry.  This suggests that T<sub>1</sub> is the most important in controlling the shape.


## 5 Summary


While one parameter study is not enough to be sure, our examples suggest three takeaway points:

1. Ratios F=(T<sub>1</sub>/T,T<sub>3</sub>/T) are the most important control of the curve shape.

2. Interesting patterns have 3 numbers T, T<sub>1</sub>, and T<sub>3</sub>, of similar magnitude.

3. T is least important, while T<sub>1</sub> is the most important parameter.




[my-article-1]:          https://glagolj.github.io/gg-blog/roulette/2022/03/14/second-order-roulette.html
[my-article-2]:          https://glagolj.github.io/gg-blog/roulette/2022/03/25/grid-of-roulettes.html
[my-article-1-section-4]:          https://glagolj.github.io/gg-blog/roulette/2022/03/14/second-order-roulette.html#4-general-case
[my-article-1-section-8]:          https://glagolj.github.io/gg-blog/roulette/2022/03/14/second-order-roulette.html#8-inversion-from-frequencies
[youtube-slideshow-2]:   https://youtu.be/BgFl_mQqJh4
[wild_gears_compact]:    https://www.wildgears.com/compact-gear-set.html


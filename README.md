## projecteulerbot 
This bot generates daily competitive programming/faang interview style problem sets. 

Ideally this will be extended to a more comprehensive app that ramps up users based on pedagogical best practices. 

Current problem sources supported: 
* projecteuler.net  
* atcoder.jp

### TODO:
* hackerrank 
* educative 
* custom archivals 
* topcoder SRM mathes 
* editorial support 
* extra things

## Configuration 

Currently 8 problems will be in a set of problems all though you can set the amount generated manually by doing the following in your local envioronment 

`export CUSTOM_PROBLEM_SET_LENTH = <insert desired amount of problems per problem set as a positive integer. Max is 64 problems per set.>`

More custom configuration options to be added. 

## installation 
```
npm install --save --save-dev --verbose 
node index.js 
```

## example output (project euler response object with desc in HTML)
```
<p>
For every integer $n&gt;1$, the family of functions $f_{n,a,b}$ is defined
by  <br>
$f_{n,a,b}(x)\equiv a x + b \mod n\,\,\, $ for $a,b,x$ integer and  $0&lt; a &lt;n, 0 \le b &lt; n,0 \le x &lt; n$. </p>
<p>
We will call $f_{n,a,b}$ a <i>retraction</i> if $\,\,\, f_{n,a,b}(f_{n,a,b}(x)) \equiv f_{n,a,b}(x) \mod n \,\,\,$ for every $0 \le x &lt; n$.<br>
Let $R(n)$ be the number of retractions for $n$.
</p>
<p>
$\displaystyle F(N)=\sum_{n=2}^N R(n)$. <br>
$F(10^7)\equiv 638042271 \mod 1\,000\,000\,007$.<br></p>
<p>
Find $F(10^{14})$.<br>
Give your answer modulo $1\,000\,000\,007$.
</p>
```

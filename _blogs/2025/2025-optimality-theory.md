---
title:          最优性理论
link:           2025-optimality-theory
date:           2025-03-19 00:00:00 +0800
selected:       true

abstract: >-
  对于优化问题而言, 我们主要关心以下几个方面: 最优解是否存在? 如果存在最优解, 是否唯一? 如何通过容易求解的条件来刻画最优解? 本文将简单总结上述几个问题.
cover:          

authors:
  - Pengfei Hao

layout: post

---

# 最优性理论

对于优化问题而言, 我们主要关心以下几个方面:

- 最优解是否存在?
- 如果存在最优解, 是否唯一?
- 如何通过容易求解的条件来刻画最优解?

本文将简单总结上述几个问题.

## 最优解的存在性

考虑一般的优化问题

$$
\min f(x) \qquad \text{s.t.}\quad x\in\mathcal{X},
$$

其中 $$\mathcal{X}\subseteq\mathbb{R}^n$$ 是可行集. 仿照在 $$\mathbb{R}$$ 上的情形, 有以下定理:

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**Weierstrass 定理**

设 $$f:\mathcal{X}\to(-\infty,+\infty]$$ 是一个适当且闭的函数, 如果下面三个条件中任意一个成立:

- $$\text{dom}f$$ 有界;
- 存在常数 $$\alpha$$ 使得水平集 $$C_\alpha$$ 非空且有界;
- 对任意满足 $$\|x^k\|\to+\infty$$ 的点列 $$\{x^k\}\subseteq\mathcal{X}$$, 有
    
    $$
    \lim_{k\to\infty}f(x^k)=+\infty,
    $$
    

则上述问题的最优解集是非空且紧的.

</div>
</div>

## 无约束优化问题的最优性条件

### 可微问题

无约束可微优化问题的基本形式如下:

$$
\min_{x\in\mathbb{R}^n} f(x),
$$

其中 $$f$$ 是连续可微的.

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**下降方向**

对于可微函数 $$f$$ 以及点 $$x\in\mathbb{R}^n$$, 如果向量 $$d\in\mathbb{R}^n$$ 满足

$$
\nabla f(x)^\top d<0,
$$

则 $$d$$ 称为 $$f$$ 在点 $$x$$ 处的一个下降方向.

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**一阶必要条件**

设 $$f$$ 在全空间可微, 如果 $$x^*$$ 是一个局部极小点, 则

$$
\nabla f(x^*)=0.
$$

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**二阶必要条件**

设 $$f$$ 在点 $$x^*$$ 的一个开邻域内二阶连续可微, $$x^*$$ 是 $$f$$ 的一个局部极小点, 则

$$
\nabla f(x^*)=0,\quad\nabla^2 f(x^*) \succeq0.
$$

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**二阶充分条件**

设 $$f$$ 在点 $$x^*$$ 的一个开邻域内二阶连续可微, 如果

$$
\nabla f(x^*)=0,\quad\nabla^2 f(x^*) \succ0,
$$

 则 $$x^*$$ 是 $$f$$ 的一个局部极小点.

</div>
</div>

### 凸问题

无约束凸优化问题基本形式如下:

$$
\min_{x\in\mathbb{R}^n} f(x),
$$

其中 $$f$$ 是适当且凸的函数.

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**一阶充要条件**

设 $$f$$ 是适当且凸的函数, 则 $$x^*$$ 为上述问题的最优解当且仅当

$$
0\in\partial f(x^*).
$$

</div>
</div>

### 复合优化问题

复合优化问题基本形式如下:

$$
\min_{x\in\mathbb{R}^n} f(x)+g(x),
$$

其中 $$f$$ 是光滑函数 (可能非凸), $$g$$ 是凸函数 (可能非光滑).

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**一阶必要条件**

如果 $$x^*$$ 为上述问题的局部极小点, 则

$$
-\nabla f(x^*)\in\partial g(x^*).
$$

</div>
</div>

### 非光滑非凸问题

非光滑非凸问题基本形式如下:

$$
\min_{x\in\mathbb{R}^n} f(x),
$$

其中 $$f$$ 是适当的下半连续函数.

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**Fréchet 次微分**

设 $$f:\mathbb{R}^n\to(-\infty,+\infty]$$ 是适当的下半连续函数. 对给定的 $$x\in\text{dom}f$$, 满足如下条件的所有向量 $$u\in\mathbb{R}^n$$ 的集合称为 $$f$$ 在点 $$x$$ 处的 Fréchet 次微分:

$$
\liminf_{y\to x, y\neq x}\frac{f(y)-f(x)-\langle u, y-x\rangle}{\|y-x\|}\geqslant 0,
$$

记为 $$\hat\partial f(x)$$; 如果  $$x\notin\text{dom}f$$, 定义 $$\hat\partial f(x)=\varnothing$$.

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**次微分**

$$f$$ 在点 $$x$$ 处的次微分定义为

$$
\partial f(x)=\{u\in\mathbb{R}^n:\exists x^k\to x, f(x^k)\to f(x),u^k\in\hat\partial f(x^k)\to u\}.
$$

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**一阶必要条件**

设 $$f$$ 是适当的下半连续函数, 如果 $$x^*$$ 是一个局部极小点, 则

$$
0\in\partial f(x^*).
$$

</div>
</div>

## 约束优化问题的最优性条件

约束优化问题的基本形式如下:

$$
\begin{aligned}\min f(x),&\quad
\text{s.t.}\\
c_i(x)\leqslant0,& \quad i\in\mathcal{I},\\
c_i(x)=0,& \quad i\in\mathcal{E},\\\end{aligned}
$$

其中 $$f(x)$$, $$c_i(x)$$ 为定义在 $$\mathbb{R}^n$$ 上的实值函数, $$\mathcal {I}$$, $$\mathcal E$$ 分别表示不等式约束和等式约束的下标集合. 这个问题的可行域为

$$
\mathcal X=\{x\in\mathbb{R}^n: c_i(x)\leqslant0,\,i\in\mathcal{I} \wedge
c_i(x)=0,\,i\in\mathcal{E}\}.
$$

该问题的 Lagrange 函数定义为

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**Lagrange 函数**

令 $$m=\vert\mathcal I\vert$$, $$p=\vert\mathcal E\vert$$, 则上述问题的 Lagrange 函数为 $$L:\mathbb{R}^n\times\mathbb{R}^m_+\times\mathbb{R}^p\to\mathbb{R}$$:

$$
L(x;\lambda,\nu)=f(x)+\sum_{i\in\mathcal I}\lambda_ic_i(x)+\sum_{i\in\mathcal E}\nu_ic_i(x)
$$

</div>
</div>

由于约束的存在, 并不能保证沿所有的方向前进后, 到达的点仍能够满足约束, 因此我们首先要考虑可行方向. 我们称这样的方向为切方向.

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**切锥 (可行方向锥)**

给定可行集 $$\mathcal{X}$$ 以及其中一点 $$x$$, 如果存在序列 $$\{x^k\}\subseteq\mathcal{X}$$ 且 $$x^k\to x$$, 以及正标量序列 $$\{t^k\}$$, $$t^k\to 0$$ 且使得

$$
\lim_{k\to\infty}\frac{x^k-x}{t^k}=d,
$$

则 $$d$$ 称为 $$\mathcal {X}$$ 在 $$x$$ 处的一个切向量 (可行方向). 点 $$x$$ 处所有的切向量构成的集合称为切锥, 记为 $$T_\mathcal{X}(x)$$.

</div>
</div>

### 可微问题的几何最优性条件

首先我们从几何角度考虑最优性条件.

在约束优化问题中, 与无约束优化问题类似, 我们同样也要考虑下降方向. 下降方向的定义与无约束优化相同. 

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**一阶必要条件 (几何最优性条件)**

设 $$x^*$$ 为上述问题的一个局部极小点, 如果 $$f(x)$$ 以及 $$c_i(x), \ i\in\mathcal I\,\cup\,\mathcal E$$ 在 $$x^*$$ 处是可微的, 则

$$
\forall d\in T_\mathcal X(x^*), \quad d^\top\nabla f(x^*) \geqslant0,
$$

这等价于

$$
T_\mathcal X(x^*)\,\cap\,\{d: d^\top\nabla f(x^*)<0\}=\varnothing,
$$

也就是说, 可行方向与下降方向没有交集.

</div>
</div>

由于切锥通常不容易计算, 在这里给出更容易计算的方式, 即线性化可行方向锥.

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**积极集**

对于可行点 $$x\in\mathcal X$$, 该点处的积极集为

$$
\mathcal A(x)=\mathcal E \,\cup \{i\in\mathcal I: c_i(x)=0\}
$$

即所有约束中等式成立的下标的集合.

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**线性化可行方向锥**

在可行点 $$x\in\mathcal X$$, 该点处的线性化可行方向锥定义为

$$
\mathcal F(x)=\{d: d^\top\nabla c_i(x)=0,\,i\in\mathcal E\wedge d^\top\nabla c_i(x)\leqslant0,\, i\in\mathcal A(x)\cap\mathcal I\}.
$$

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**命题**

设 $$c_i(x), i\in\mathcal E\cap\mathcal I$$ 一阶连续可微, 则对任意可行点 $$x$$ 有

$$
T_\mathcal X(x)\subseteq\mathcal F(x).
$$

</div>
</div>

一般来说, 线性化可行方向锥比切锥更大. 为了刻画两者之间的关系, 我们引入约束品性的概念. 大部分的约束品性是为了保证在最优点处有 $$T_\mathcal X(x)=\mathcal F(x).$$

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**线性无关约束品性 (LICQ)**

给定可行点 $$x$$ 以及相应的积极集 $$\mathcal A(x)$$. 如果

$$
\nabla c_i(x),\quad i\in\mathcal A(x),
$$

是线性无关的, 称线性无关约束品性在点 $$x$$ 处成立.

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**Mangasarian-Fromovitz 约束品性 (MFCQ)**

给定可行点 $$x$$ 以及相应的积极集 $$\mathcal A(x)$$. 如果存在一个向量 $$w\in\mathbb{R}^n$$, 使得

$$
\begin{aligned}w^\top\nabla c_i(x)<0,&\quad i\in\mathcal A(x)\cap\mathcal I,\\
w^\top\nabla c_i(x)=0,&\quad i\in\mathcal E,\\
\end{aligned}
$$

并且等式约束的梯度集 $$\nabla c_i(x),\,i\in\mathcal E$$ 是线性无关的, 称 MF 约束品性在点 $$x$$ 处成立.

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**线性约束品性**

如果所有的约束函数 $$c_i(x),\, i\in\mathcal I\,\cup\,\mathcal E$$ 都是线性的, 称线性约束品性成立.

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**命题**

给定可行点 $$x$$, 如果在该点处上述约束品性成立, 则

$$
T_\mathcal X(x)=\mathcal F(x).
$$

</div>
</div>

### 可微问题的 KKT 条件

接下来, 我们希望给出更易于计算的最优性条件.

根据几何最优性条件, 如果 $$x^*\in\mathcal X$$ 是局部极小值点, 则可行方向与下降方向应当没有交集. 如果在 $$x^*$$ 处满足

$$
T_\mathcal X(x)=\mathcal F(x),
$$

则上述条件等价于

$$
\left\{d: \begin{aligned}
d^\top\nabla f(x^*)&<0,\\
d^\top\nabla c_i(x^*)&=0, \ i\in\mathcal E,\\
d^\top\nabla c_i(x^*) &\leqslant0, \ i\in \mathcal A(x)\cap\mathcal I
\end{aligned}\right\}=\varnothing.
$$

由 Farkas 引理, 上式等价于

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**Karush-Kuhn-Tucker (KKT) 条件 (一阶必要条件)**

设 $$x^*$$ 为上述问题的一个局部极小点, 如果 $$f(x)$$ 以及 $$c_i(x), \ i\in\mathcal I\,\cup\,\mathcal E$$ 在 $$x^*$$ 处是可微的, 且

$$
T_\mathcal X(x^*)=\mathcal F(x^*),
$$

则存在 Lagrange 乘子 $$\lambda^*_i$$ 使得下列条件成立:

- 稳定性条件: $$\nabla_x L(x^*, \lambda^*)=\nabla f(x^*)+\sum_{i\in\mathcal I\cup\mathcal E}\lambda_i^*\nabla c_i(x^*)=0$$;
- 原始可行性条件: $$c_i(x^*)=0,\,i\in\mathcal E \,\wedge\,c_i(x^*)\leqslant0,\,i\in\mathcal I$$;
- 对偶可行性条件: $$\lambda^*_i\geqslant0,\, i\in\mathcal I$$;
- 互补松弛条件: $$\lambda_i^*c_i(x^*)=0, i\in\mathcal I$$.
</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**临界锥**

设 $$(x^*, \lambda^*)$$ 满足 KKT 条件, 定义临界锥为

$$
\mathcal C(x^*,\lambda^*)=\{d\in\mathcal F(x^*):d^\top \nabla c_i(x^*)=0,\quad i\in\mathcal A(x)\cap\mathcal I \wedge \lambda^*_i>0\},
$$

即临界锥为等式约束以及满足 $$\lambda^*_i>0$$ 的不等式约束共同确定的方向.

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**二阶必要条件**

设 $$x^*$$ 为上述问题的一个局部极小点, 如果 $$f(x)$$ 以及 $$c_i(x), \ i\in\mathcal I\,\cup\,\mathcal E$$ 在 $$x^*$$ 处是二阶连续可微的, 且

$$
T_\mathcal X(x^*)=\mathcal F(x^*),
$$

设 $$(x^*, \lambda^*)$$ 满足 KKT 条件, 则

$$
\forall d\in\mathcal C(x^*,\lambda^*), \quad d^\top\nabla^2_{xx}L(x^*,\lambda^*)d\geqslant0.
$$

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**二阶充分条件**

假设在可行点 $$x^*$$ 处, 存在 lagrange 乘子 $$\lambda^*_i$$ 使得 $$(x^*,\lambda^*)$$ 满足 KKT 条件, 如果

$$
\forall d\in\mathcal C(x^*,\lambda^*),\,d\neq0, \quad d^\top\nabla^2_{xx}L(x^*,\lambda^*)d>0,
$$

则 $$x^*$$ 为上述问题的一个严格局部极小点.

</div>
</div>

### 凸优化问题

凸优化问题的基本形式如下:

$$
\begin{aligned}\min_{x\in\mathcal D}f(x),& \quad\text{s.t.}\\
c_i(x)\leqslant0,&\quad i=1,2,\dots,m,\\
Ax=b&,
\end{aligned}
$$

其中 $$f(x)$$ 为适当凸函数, $$\mathcal D=\text{dom}f$$, $$c_i(x)$$ 为凸函数且 $$\text{dom}c_i=\mathbb{R}^n$$, $$A\in\mathbb{R}^{p\times n}$$, $$b\in\mathbb{R}^p$$. 该问题的可行域定义为

$$
\mathcal X=\{x\in \mathcal D: c_i(x)\leqslant0, \quad i=1,2,\dots,m; Ax=b\}.
$$

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**Slater 约束品性**

对于上述凸优化问题, 如果存在 $$x\in\text{ri}\,\text{dom}f$$, 则称该问题满足 Slater 约束品性.

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**强对偶原理**

如果凸优化问题满足 Slater 条件, 则强对偶原理成立, 即当对偶问题的最优值 $$d^*>-\infty$$ [等价于存在对偶可行解 $$(\lambda^*,\nu^*)$$]时, 原问题的最优值 $$p^*$$ 满足

$$
p^*=d^*.
$$

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">

**一阶充要条件 (KKT 条件)**

对于上述凸优化问题, 如果 Slater 条件成立, 则 $$x^*$$, $$\lambda^*$$ 分别是原始、对偶全剧最优解当且仅当

- 稳定性条件: $$0\in \partial f(x^*)+\sum_{i\in\mathcal I}\lambda_i^*\partial c_i(x^*)+\sum_{i\in\mathcal E}\lambda_i^*a_i$$, 其中 $$a_i$$ 是 $$A^\top$$ 的第 $$i$$  列;
- 原始可行性条件: $$c_i(x^*)\leqslant0,\,i\in\mathcal I\,\wedge\,Ax^*=b$$;
- 对偶可行性条件:$$\lambda^*_i\geqslant0,\,i\in\mathcal I$$;
- 互补约束条件: $$\lambda^*_i c_i(x^*)=0,\,i\in \mathcal I$$.
</div>
</div>

### 总结

对于可微问题来说, 从局部最优点可以得到几何最优性条件, 如果再加上一定的约束品性, 则能得出 KKT 条件; 而对于凸问题来说, 从 KKT 条件出发, KKT 条件蕴含强对偶性, 从而能得到全局极小点; 反之, 从全局极小点出发, 再加上 Slater 条件, 就可以得到 KKT 条件.
---
title:          约束优化算法
link:           2025-constrained-algorithm
date:           2025-03-24 00:00:00 +0800
selected:       true

abstract: >-
  本文主要总结适用于约束优化问题的几类算法.
cover:          

authors:
  - Pengfei Hao

layout: post

---

# 约束优化算法

## 罚函数法

罚函数方法将约束问题转化为无约束问题进行求解, 通过将约束函数转化为惩罚项加在目标函数上, 对位于可行域以外的点进行惩罚, 而对可行域以内的点不做惩罚. 以下是几种常见的罚函数:

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">


**等式约束的二次罚函数**

对于等式约束的优化问题

$$
\min f(x),\quad
\text{s.t.}\quad 
c_i(x)=0, \quad i\in\mathcal{E},
$$

定义二次罚函数为

$$
P(x,\sigma)=f(x)+\frac12\sigma\sum_{i\in\mathcal E}c_i^2(x),
$$

其中右端第二项称为惩罚项, $$\sigma$$ 称为罚因子.

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">


**一般约束问题的二次罚函数**

对一般的约束优化问题

$$
\begin{aligned}\min f(x),&\quad
\text{s.t.}\\
c_i(x)\leqslant0,& \quad i\in\mathcal{I},\\
c_i(x)=0,& \quad i\in\mathcal{E},\\\end{aligned}
$$

定义二次罚函数为

$$
P(x,\sigma)=f(x)+\frac12\sigma\left[\sum_{i\in\mathcal E}c_i^2(x)+\sum_{i\in\mathcal I}c_i^{+2}(x)\right],
$$

其中右端第二项称为惩罚项, $$\sigma$$ 称为罚因子, $$c_i^+(x)$$ 定义为

$$
c_i^+(x)=\max\{0, c_i(x)\}.
$$

</div>
</div>

以上这两种罚函数均为**外点罚函数**, 即求解过程中允许迭代点位于可行域之外, 当罚因子趋向于无穷时, 迭代点列从外部逼近最优解. 而如果想让迭代点列从内部逼近最优解, 则需要**内点罚函数**.

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">


**对数罚函数**

对不等式约束的优化问题

$$
\min f(x),\quad
\text{s.t.}
\quad c_i(x)\leqslant0, \quad i\in\mathcal{I},
$$

定义对数罚函数为

$$
P(x,\sigma)=f(x)-\sigma\sum_{i\in\mathcal I}\ln (-c_i)(x),
$$

其中右端第二项称为惩罚项, $$\sigma$$ 称为罚因子.

</div>
</div>

上面的外点和内点罚函数, 在求解时均需要让罚因子趋于无穷 (或零), 会对数值求解造成一定的困难. 下面介绍的精确罚函数, 当罚因子选取适当 (不是无穷) 时, 就能够得到原问题的最优解. 常用的精确罚函数是 $$l_1$$ 罚函数.

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">


$$l_1$$ **罚函数**

对一般的约束优化问题, 定义 $$l_1$$ 罚函数

$$
P(x,\sigma)=f(x)+\sigma\left[\sum_{i\in\mathcal E}\vert c_i\vert(x)+\sum_{i\in\mathcal I}c_i^{+}(x)\right],
$$

其中右端第二项称为惩罚项, $$\sigma$$ 称为罚因子.

</div>
</div>

### 收敛性

以等式约束的二次罚函数为例, 其收敛性如下

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">


**等式约束的二次罚函数的收敛性**

设 $$f(x)$$ 与 $$c_i(x),\,i\in\mathcal I$$ 连续可微, 正数序列 $$\varepsilon_k\to0$$, $$\sigma_k\to\infty$$, 且算法产生的迭代序列 $$x^k$$ 满足 $$\Vert\nabla_x P(x^{k+1},\sigma_k)\Vert<\varepsilon_k$$, 对 $$x^k$$ 的任意极限点 $$x^*$$, 都有 $$\nabla c_i(x^*),\,i\in\mathcal E$$ 线性无关, 则 $$x^*$$ 为原问题的 KKT 点, 且

$$
\lim_{k\to\infty}(-\sigma_kc_i(x^{k+1}))=\lambda^*_i, i\in\mathcal E,
$$

其中 $$\lambda^*_i$$ 是约束 $$c_i(x^*)=0$$ 对应的 Lagrange 乘子.

</div>
</div>

上述结论可以通过以下方式直观得到, 写出原问题的 KKT 条件

$$
\nabla_x L(x^*;\lambda^*)=\nabla f(x^*)+(\lambda^*)^\top\nabla c(x^*)=0,
$$

以及二次罚函数的梯度

$$
\nabla_xP(x^{k+1};\lambda^k)=\nabla f(x^{x+1})+\sigma_kc(x^{k+1})^\top\nabla c(x^{k+1})\to0,
$$

对比可知

$$
\sigma_kc(x^{k+1})^\top\to\lambda^*,\quad c(x^{k+1})^\top\to0,\quad\sigma_k\to\infty.
$$

可以看出, 罚因子 $$\sigma_k\to\infty$$, 这会导致子问题的数值求解非常困难, 条件数爆炸.

## 增广拉格朗日函数法

为了克服在罚函数方法中罚因子趋于零的问题, 我们通过对二次罚函数进行某种修正, 使得对有限的罚因子就可以求解出原问题的最优解.

### 等式约束的优化问题

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">


**等式约束的增广拉格朗日函数**

对于等式约束的优化问题, 定义增广拉格朗日函数为

$$
L_\sigma(x;\lambda)=f(x)+\sum_{i\in\mathcal E}\lambda_ic_i(x)+\frac12\sigma\sum_{i\in\mathcal E}c_i^2(x),
$$

 $$\sigma$$ 为罚因子.

</div>
</div>

仿照前文的方式, 写出原问题的 KKT 条件

$$
\nabla_xL(x^*;\lambda^*)=\nabla f(x^*)+\sum_{i\in\mathcal E}\lambda^*_i\nabla c_i(x^*)=0,
$$

以及增广拉格朗日函数的梯度

$$
\nabla_xL_{\sigma_k}(x^{k+1};\lambda^k)=\nabla f(x^{k+1})+\sum_{i\in\mathcal E}(\lambda^k_i+{\sigma_k}c_i(x^{k+1}))\nabla c_i(x^{k+1})\to0,
$$

得到乘子更新方式

$$

\lambda^{k+1}_i=\lambda^k_i+\sigma_k c_i(x^{k+1}),\quad i\in\mathcal E.
$$

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">


**最优性**

设 $$x^*$$, $$\lambda^*$$ 为等式约束优化问题的局部极小点和对应的乘子, 且在 $$x^*$$ 处满足 LICQ 和二阶充分条件. 那么存在一个有限的常数 $$\bar\sigma$$, 使得对于任意的 $$\sigma\geqslant\bar\sigma$$, 有 $$x^*$$ 是 $$L_\sigma(x;\lambda^*)$$ 的严格局部极小点; 反之, 如果 $$x^*$$ 是 $$L_\sigma(x;\lambda^*)$$ 的严格局部极小点, 且 $$c_i(x^*)=0,\,i\in\mathcal E$$, 则 $$x^*$$ 为局部极小点.

</div>
</div>

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">


**收敛性**

假设乘子列 $$\lambda^k$$ 有界, 罚因子 $$\sigma_k\to+\infty$$, 精度 $$\eta_k\to0$$, 迭代点列 $$x^k$$ 子列 $$x^{k_i}$$ 收敛到 $$x^*$$, 且在 $$x^*$$ 处成立 LICQ. 则存在 $$\lambda^*$$ 使得

$$
\lambda^{k_i}\to\lambda^*,
$$

$$
\nabla f(x^*)+\sum_{i\in\mathcal E}\lambda_i^{*}\nabla c_i(x^*)=0,
$$

$$
c_i(x^*)=0, \quad i\in\mathcal E.
$$

注意, 此处乘子列的有界性, 罚因子趋于无穷, 迭代点列子列收敛性是可以放宽的.

</div>
</div>

### 一般约束优化问题

首先引入松弛变量, 得到原问题的等价形式

$$
\begin{aligned}\min f(x),&\quad
\text{s.t.}\\
c_i(x)=0,& \quad i\in\mathcal{E},\\
c_i(x)+s_i=0,& \quad i\in\mathcal{I},\\
s_i\geqslant0,&\quad i\in\mathcal I.\end{aligned}
$$

<div class= "d-flex highlight">
<i class="d-none d-{{ site.data.display.mobile_width }}-block fas fa-hashtag"></i>
<div class="mx-2 mx-{{ site.data.display.mobile_width }}-0 side">


**一般约束优化问题的增广拉格朗日函数**

对于一般的优化问题, 用以上等价问题定义增广拉格朗日函数为

$$
L_\sigma(x,s;\lambda,\mu)=f(x)+\sum_{i\in\mathcal E}\lambda_ic_i(x)+\sum_{i\in\mathcal I}\mu_i(c_i(x)+s_i)+\frac12\sigma\left[\sum_{i\in\mathcal E}c_i^2(x)+\sum_{i\in\mathcal I}(c_i(x)+s_i)^2\right],\quad s_i\geqslant0, i\in\mathcal I,
$$

 $$\sigma$$ 为罚因子.

</div>
</div>

增广拉格朗日函数可以消去 $$s$$ 变成如下格式

$$
L_\sigma(x,s;\lambda,\mu)=f(x)+\sum_{i\in\mathcal E}\lambda_ic_i(x)+\frac12\sigma\sum_{i\in\mathcal E}c_i^2(x)+\frac12\sigma\sum_{i\in\mathcal I}\left(\max\left\{\frac{\mu_i}{\sigma}+c_i(x),0\right\}^2-\frac{\mu_i^2}{\sigma^2}\right).
$$

仿照前文的方式, 写出原问题的 KKT 条件

$$
\nabla_xL(x^*,s^*;\lambda^*,\mu^*)=\nabla f(x^*)+\sum_{i\in\mathcal E}\lambda^*_i\nabla c_i(x^*)+\sum_{i\in\mathcal I}\mu^*_i\nabla c_i(x^*)=0,
$$

以及增广拉格朗日函数的梯度

$$
\nabla_xL_{\sigma_k}(x^{k+1},s^{k+1};\lambda^k,\mu^k)=\nabla f(x^{k+1})+\sum_{i\in\mathcal E}(\lambda^k_i+{\sigma_k}c_i(x^{k+1}))\nabla c_i(x^{k+1})+\sum_{i\in\mathcal I}(\mu^k_i+\sigma_k(c_i(x^{k+1})+s^{k+1}_i))\nabla c_i(x^{k+1})\to0,
$$

得到乘子更新方式

$$
\begin{aligned}
\lambda^{k+1}_i=&\lambda^k_i+\sigma_k c_i(x^{k+1}),\quad i\in\mathcal E,\\
\mu^{k+1}_i=&\max\{\mu^k_i+\sigma_k c_i(x^{k+1}),0\},\quad i\in\mathcal I.\\
\end{aligned}
$$
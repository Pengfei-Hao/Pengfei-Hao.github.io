---
title:          约束优化算法
link:           2025-constrained-algorithm
date:           2025-03-24 00:00:00 +0800
selected:       true

abstract: >-
  本文主要介绍约束优化问题的优化算法. 无论目标函数是否可微或凸, 都可以使用罚函数方法将约束问题转化为无约束问题进行求解. 对可微问题和凸问题, 也可以使用增广拉格朗日函数法进行求解. 对于凸问题, 也可以使用原始对偶混合梯度法和交替方向乘子法.
cover:          

authors:
  - Pengfei Hao

layout: post

---

# 约束优化算法

本文主要介绍约束优化问题的优化算法. 无论目标函数是否可微或凸, 都可以使用罚函数方法将约束问题转化为无约束问题进行求解. 对可微问题和凸问题, 也可以使用增广拉格朗日函数法进行求解.  对于等式约束的凸问题, 由于凸问题有较好的对偶性, 也可以使用原始对偶混合梯度法, 对偶近似点梯度法和交替方向乘子法求解.

## 罚函数法

罚函数方法将约束问题转化为无约束问题进行求解, 通过将约束函数转化为惩罚项加在目标函数上, 对位于可行域以外的点进行惩罚, 而对可行域以内的点不做惩罚. 以下是几种常见的罚函数:

{% include widgets/highlight_begin.html %}

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

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

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

{% include widgets/highlight_end.html %}

以上这两种罚函数均为**外点罚函数**, 即求解过程中允许迭代点位于可行域之外, 当罚因子趋向于无穷时, 迭代点列从外部逼近最优解. 而如果想让迭代点列从内部逼近最优解, 则需要**内点罚函数**.

{% include widgets/highlight_begin.html %}

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

{% include widgets/highlight_end.html %}

上面的外点和内点罚函数, 在求解时均需要让罚因子趋于无穷 (或零), 会对数值求解造成一定的困难. 下面介绍的精确罚函数, 当罚因子选取适当 (不是无穷) 时, 就能够得到原问题的最优解. 常用的精确罚函数是 $$l_1$$ 罚函数.

{% include widgets/highlight_begin.html %}

$$l_1$$ **罚函数**

对一般的约束优化问题, 定义 $$l_1$$ 罚函数

$$
P(x,\sigma)=f(x)+\sigma\left[\sum_{i\in\mathcal E}\vert c_i\vert(x)+\sum_{i\in\mathcal I}c_i^{+}(x)\right],
$$

其中右端第二项称为惩罚项, $$\sigma$$ 称为罚因子.

{% include widgets/highlight_end.html %}

### 收敛性

以等式约束的二次罚函数为例, 其收敛性如下

{% include widgets/highlight_begin.html %}

**等式约束的二次罚函数的收敛性**

设 $$f(x)$$ 与 $$c_i(x),\,i\in\mathcal I$$ 连续可微, 正数序列 $$\varepsilon_k\to0$$, $$\sigma_k\to\infty$$, 且算法产生的迭代序列 $$x^k$$ 满足 $$\Vert\nabla_x P(x^{k+1},\sigma_k)\Vert<\varepsilon_k$$, 对 $$x^k$$ 的任意极限点 $$x^*$$, 都有 $$\nabla c_i(x^*),\,i\in\mathcal E$$ 线性无关, 则 $$x^*$$ 为原问题的 KKT 点, 且

$$
\lim_{k\to\infty}(-\sigma_kc_i(x^{k+1}))=\lambda^*_i, i\in\mathcal E,
$$

其中 $$\lambda^*_i$$ 是约束 $$c_i(x^*)=0$$ 对应的 Lagrange 乘子.

{% include widgets/highlight_end.html %}

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

{% include widgets/highlight_begin.html %}

**等式约束的增广拉格朗日函数**

对于等式约束的优化问题, 定义增广拉格朗日函数为

$$
L_\sigma(x;\lambda)=f(x)+\sum_{i\in\mathcal E}\lambda_ic_i(x)+\frac12\sigma\sum_{i\in\mathcal E}c_i^2(x),
$$

 $$\sigma>0$$ 为罚因子.

{% include widgets/highlight_end.html %}

仿照前文的方式, 写出原问题的 KKT 条件

$$
\nabla_xL(x^*;\lambda^*)=\nabla f(x^*)+\sum_{i\in\mathcal E}\lambda^*_i\nabla c_i(x^*)=0,
$$

以及增广拉格朗日函数的梯度

$$
\nabla_xL_{\sigma_k}(x^{k+1};\lambda^k)=\nabla f(x^{k+1})+\sum_{i\in\mathcal E}(\lambda^k_i+{\sigma_k}c_i(x^{k+1}))\nabla c_i(x^{k+1})\to0,
$$

简记 $$c(x)=(c_1(x),\dots,c_{\vert\mathcal E\vert}(x))^\top$$, 上下两式对比可以得到增广拉格朗日函数法的迭代格式:

{% include widgets/highlight_begin.html %}

**增广拉格朗日函数法**

给定初始点 $$x^0$$, 乘子 $$\lambda^0$$, 罚因子 $$\sigma_0>0$$, 罚因子更新常数 $$\rho>0$$, 约束违反度常数 $$\varepsilon>0$$, 精度 $$\eta_k>0$$, 每一步迭代如下:

- 使用无约束优化算法求解
    
    $$
    x^{k+1}=\argmin_{x}L_{\sigma_k}(x;\lambda^k),
    $$
    
    使得
    
    $$
    \Vert L_{\sigma_k}(x^{k+1};\lambda^k)\Vert\leqslant\eta_k.
    $$
    
- 如果约束违反度 $$\Vert c(x^{k+1})\Vert<\varepsilon$$, 则终止迭代;
- 更新乘子和罚因子

$$
\begin{aligned}
\lambda^{k+1}=&\lambda^k+\sigma_kc(x^{k+1}),\\
\sigma_{k+1}=&\rho\sigma_k.
\end{aligned}
$$

{% include widgets/highlight_end.html %}

下面给出增广拉格朗日函数的收敛性.

{% include widgets/highlight_begin.html %}

**最优性**

设 $$x^*$$, $$\lambda^*$$ 为等式约束优化问题的局部极小点和对应的乘子, 且在 $$x^*$$ 处满足 LICQ 和二阶充分条件. 那么存在一个有限的常数 $$\bar\sigma$$, 使得对于任意的 $$\sigma\geqslant\bar\sigma$$, 有 $$x^*$$ 是 $$L_\sigma(x;\lambda^*)$$ 的严格局部极小点; 反之, 如果 $$x^*$$ 是 $$L_\sigma(x;\lambda^*)$$ 的严格局部极小点, 且 $$c_i(x^*)=0,\,i\in\mathcal E$$, 则 $$x^*$$ 为局部极小点.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

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

{% include widgets/highlight_end.html %}

### 一般约束优化问题

一般的约束可以通过松弛化为等式约束的问题, 从而转化为等式约束的情况. 首先引入松弛变量, 得到原问题的等价形式

$$
\begin{aligned}\min f(x),&\quad
\text{s.t.}\\
c_i(x)=0,& \quad i\in\mathcal{E},\\
c_i(x)+s_i=0,& \quad i\in\mathcal{I},\\
s_i\geqslant0,&\quad i\in\mathcal I.\end{aligned}
$$

{% include widgets/highlight_begin.html %}

**一般约束优化问题的增广拉格朗日函数**

对于一般的优化问题, 用以上等价问题定义增广拉格朗日函数为

$$
L_\sigma(x,s;\lambda,\mu)=f(x)+\sum_{i\in\mathcal E}\lambda_ic_i(x)+\sum_{i\in\mathcal I}\mu_i(c_i(x)+s_i)+\frac12\sigma\left[\sum_{i\in\mathcal E}c_i^2(x)+\sum_{i\in\mathcal I}(c_i(x)+s_i)^2\right],\quad s_i\geqslant0, i\in\mathcal I,
$$

 $$\sigma>0$$ 为罚因子.

{% include widgets/highlight_end.html %}

增广拉格朗日函数可以消去 $$s$$ 变成如下格式

$$
L_\sigma(x;\lambda,\mu)=f(x)+\sum_{i\in\mathcal E}\lambda_ic_i(x)+\frac12\sigma\sum_{i\in\mathcal E}c_i^2(x)+\frac12\sigma\sum_{i\in\mathcal I}\left(\max\left\{\frac{\mu_i}{\sigma}+c_i(x),0\right\}^2-\frac{\mu_i^2}{\sigma^2}\right),
$$

此时

$$
s_i=\max\left\{-\frac{\mu_i}{\sigma},0\right\}, \quad i\in\mathcal I.
$$

仿照前文的方式, 写出原问题的 KKT 条件

$$
\nabla_xL(x^*,s^*;\lambda^*,\mu^*)=\nabla f(x^*)+\sum_{i\in\mathcal E}\lambda^*_i\nabla c_i(x^*)+\sum_{i\in\mathcal I}\mu^*_i\nabla c_i(x^*)=0,
$$

以及增广拉格朗日函数的梯度

$$
\nabla_xL_{\sigma_k}(x^{k+1},s^{k+1};\lambda^k,\mu^k)=\nabla f(x^{k+1})+\sum_{i\in\mathcal E}(\lambda^k_i+{\sigma_k}c_i(x^{k+1}))\nabla c_i(x^{k+1})+\sum_{i\in\mathcal I}(\mu^k_i+\sigma_k(c_i(x^{k+1})+s^{k+1}_i))\nabla c_i(x^{k+1})\to0,
$$

简记 $$c(x)=(c_1(x),\dots,c_{\vert\mathcal E\vert}(x))^\top$$, $$c(x)+s=(c_1(x)+s_1,\dots,c_{\vert\mathcal I\vert}(x)+s_{\vert\mathcal I\vert})^\top$$, 上下两式对比可以得到增广拉格朗日函数法的迭代格式:

{% include widgets/highlight_begin.html %}

**增广拉格朗日函数法**

给定初始点 $$x^0$$, 乘子 $$\lambda^0$$, $$\mu^0$$; 初始罚因子 $$\sigma_0>0$$, 罚因子更新常数 $$\rho>1$$; 令初始精度 $$\eta_0=\frac1{\sigma_0}$$, 终止精度 $$\eta>0$$; 初始违反度 $$\varepsilon_0=\frac1{\sigma^\alpha_0}$$, 终止约束违反度 $$\varepsilon>0$$, 以及更新常数 $$0\leqslant\alpha\leqslant\beta\leqslant1$$. 每一步迭代如下:

- 使用无约束优化算法求解消去 $$s$$ 后的
    
    $$
    x^{k+1}=\argmin_{x}L_{\sigma_k}(x;\lambda^k,\mu^k),
    $$
    
    使得
    
    $$
    \Vert L_{\sigma_k}(x^{k+1};\lambda^k,\mu^k)\Vert\leqslant\eta_k.
    $$
    
- 令约束违反度
    
    $$
    v_{k}=\left({\Vert c(x^{k+1})\Vert}^2+{\Vert c(x^{k+1})+s^{k+1}\Vert}^2\right)^\frac12,
    $$
    
- 如果约束违反度 $$v_{k}>\varepsilon_k$$, 则更新罚因子, 精度和约束违反度 (约束偏差太大的情况):

$$
\begin{aligned}
\lambda^{k+1}=&\lambda^k,\\
\mu^{k+1}=&\mu^k,\\
\sigma_{k+1}=&\rho\sigma_k,\\
\eta_{k+1}=&\frac1{\sigma_{k+1}},\\
\varepsilon_{k+1}=&\frac1{\sigma^\alpha_{k+1}},
\end{aligned}
$$

- 否则, 如果约束违反度 $$v_{k}<\varepsilon$$ 且 $$\Vert L_{\sigma_k}(x^{k+1};\lambda^k,\mu^k)\Vert\leqslant\eta$$, 则终止迭代;
- 否则, 更新乘子, 精度和约束违反度 (子问题精度不足, 比上边更快的降低精度和违反度):

$$
\begin{aligned}
\lambda^{k+1}_i=&\lambda^k_i+\sigma_k c_i(x^{k+1}),\quad i\in\mathcal E,\\
\mu^{k+1}_i=&\max\{\mu^k_i+\sigma_k c_i(x^{k+1}),0\},\quad i\in\mathcal I.\\
\sigma_{k+1}=&\sigma_k,\\
\eta_{k+1}=&\frac{\eta_k}{\sigma_{k+1}},\\
\varepsilon_{k+1}=&\frac{\varepsilon_k}{\sigma^\beta_{k+1}}.
\end{aligned}
$$

{% include widgets/highlight_end.html %}

可以看出, 该算法通过对约束违反度和精度的比较, 自适应的选择对其中某一个进行更新.

### 凸问题的增广拉格朗日函数法

我们主要考虑如下的凸问题

$$
\begin{aligned}\min_{x\in\mathbb R^n}f(x),& \quad\text{s.t.}\\
c_i(x)\leqslant0,&\quad i=1,2,\dots,m,\\
\end{aligned}
$$

根据上节, 其增广拉格朗日函数为

$$
L_\sigma(x;\mu)=f(x)+\frac12\sigma\sum_{i\in\mathcal I}\left(\max\left\{\frac{\mu_i}{\sigma}+c_i(x),0\right\}^2-\frac{\mu_i^2}{\sigma^2}\right),
$$

其迭代过程如下:

{% include widgets/highlight_begin.html %}

**增广拉格朗日函数法**

给定初始点 $$x^0$$, 乘子 $$\mu^0$$, 罚因子 $$\sigma_k>0$$, 每一步迭代如下:

- 通过某些非精确凸优化算法求解
    
    $$
    x^{k+1}=\argmin_{x}L_{\sigma_k}(x;\mu^k),
    $$
    
- 更新乘子和罚因子

$$
\begin{aligned}
\mu^{k+1}=&\max\{\mu^k+\sigma_k c(x^{k+1}),0\}.\\
\end{aligned}
$$

{% include widgets/highlight_end.html %}

## 对偶近似点梯度法

下面我们主要考虑无约束凸问题

$$
\begin{aligned}\min_{x\in\mathbb R^n}f(x)+g(Ax),
\end{aligned}
$$

或者等价的约束问题,

$$
\begin{aligned}\min_{x\in\mathbb R^n,y\in\mathbb R ^m}f(x)+g(y), \quad\text{s.t.}\quad
Ax=y,\\
\end{aligned}
$$

其中 $$f$$, $$g$$ 为适当的闭凸函数, $$A\in\mathbb R^{m\times n}$$. 对于约束凸问题而言, 我们可以考虑其对偶问题, 从而得到更好的性质. 其对偶问题为

$$
\begin{aligned}\max_{\lambda\in\mathbb R^m}-f^*(-A^\top \lambda)-g^*(-\lambda),
\end{aligned}
$$

如果再假设 $$f$$ 是闭的强凸函数, 可以证明 $$f^*$$ 为可微函数, 对对偶问题做近似点梯度法, 得到对偶近似点梯度法:

{% include widgets/highlight_begin.html %}

**对偶近似点梯度法**

其每一步迭代如下

$$
\lambda^{k+1}=\text{prox}_{tg^*}(\lambda^k+tA\nabla f^*(-A^\top\lambda^k)),
$$

令 $$x^k=\nabla f^*(-A^\top\lambda^k)$$, 并利用 Moreau 分解, 可以得到

$$
\begin{aligned}
x^{k+1}=&\argmin_xL(x,y^k;\lambda^k),\\
y^{k+1}=&\argmin_yL_t(x^{k+1},y;\lambda^k),\\
\lambda^{k+1}=&\lambda^k+t(Ax^{k+1}-y^{k+1}).\\
\end{aligned}
$$

其中 $$L$$, $$L_t$$ 为 Lagrange 和增广拉格朗日函数, $$t$$ 为一个常数 (罚因子).

{% include widgets/highlight_end.html %}

可以看出, 这个方法是一种交替极小化的方法, 与 ADMM 十分相似. 在某些问题上, 对偶近似点梯度法与增广拉格朗日函数法是相同的.

## 原始-对偶混合梯度 (PDHG) 法

我们同样考虑上节的问题, 注意 PDHG 方法与线性规划的原始-对偶方法不同. 我们可以将 $$g$$ 写用其共轭函数表示, 来构造出一个极小极大问题:

$$
\begin{aligned}\min_{x\in\mathbb R^n}\max_{y\in\mathbb R ^m} f(x)-g^*(y)+\langle Ax,y\rangle,\\
\end{aligned}
$$

分别对原始变量和对偶变量做近似点梯度法,

{% include widgets/highlight_begin.html %}

**原始-对偶混合梯度法**

其每一步迭代如下

$$
\begin{aligned}
y^{k+1}=&\text{prox}_{\delta_kg^*}(y^k+\delta_kAx^k),\\
x^{k+1}=&\text{prox}_{\alpha_kf}(x^k+\alpha_kAz^{k+1}),\\
\end{aligned}
$$

其中 $$\alpha_k$$, $$\delta_k$$ 分别为原始变量和对偶变量的更新步长, 上述过程是一个交替对对偶变量求极大和原始变量求极小的过程.

{% include widgets/highlight_end.html %}

由于上述函数是一个鞍函数, 可以将原问题转化为一个极小极大问题, 即对原变量求极小的同时对对偶变量求极大. PDHG 方法通过交替对原变量求极小和对偶变量求极大, 得到原问题的解.

## 交替方向乘子 (ADMM) 法

交替方向乘子法主要用于求解等式约束的凸优化问题:

$$
\begin{aligned}\min_{x_1\in\mathbb R^n,x_2\in\mathbb R^n}f_1(x_1)+f_2(x_2),\\
\text{s.t.}\quad
A_1x_1+A_2x_2=b.\\

\end{aligned}
$$

其中 $$f_1$$, $$f_2$$ 为适当的闭凸函数, $$A_1\in\mathbb R^{m\times n}$$, $$A_2\in\mathbb R^{m\times n}$$. 这个问题可以看作上一节问题的推广. 如果使用增广拉格朗日函数法, 需要同时更新 $$x_1$$, $$x_2$$, 这通常是比较困难的. 可以通过交替更新这两个变量的方式, 来求解其最优解.

{% include widgets/highlight_begin.html %}

**交替方向乘子法**

其每一步迭代如下

$$
\begin{aligned}
x_1^{k+1}=&\argmin_xL_{\sigma}(x,x_2^k;\lambda^k),\\
x_2^{k+1}=&\argmin_xL_{\sigma}(x_1^{k+1},x;\lambda^k),\\
\lambda^{k+1}=&\lambda^k+\tau\sigma(A_1x_1^{k+1}+A_2x_2^{k+1}-b).\\
\end{aligned}
$$

其中 $$L_\sigma$$ 为增广拉格朗日函数, $$\sigma$$ 为一个常数 (罚因子), $$\tau$$ 为步长.

{% include widgets/highlight_end.html %}

这个算法与对偶近似点梯度法同样有交替求极小的过程, 不同的是第一步对增广拉格朗日函数求最小值, 而 PDHG 针对的是 Lagrange 函数, 这样的优势是可以去掉强凸的条件.

## 总结

对于可微问题来说, 无约束情况主要使用梯度法和信赖域方法进行求解, 带约束的问题可以通过罚函数或增广拉格朗日函数转化为无约束问题进行求解. 对于凸问题而言, 由于凸问题有较好的对偶性, 无约束问题与约束问题可以相互转化, 原问题与对偶问题也是相互等价的, 近似点方法, 对偶近似点方法, PDHG 方法, ADMM 方法与增广拉格朗日函数法之间有密切的联系, 也是求解的主要方法. 而对于复合优化问题, 由于其中含有非光滑项, 导致梯度法无法使用, 因而主要使用近似点梯度法, BCD 算法等.
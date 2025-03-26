---
title:          无约束优化算法
link:           2025-unconstrained-algorithm
date:           2025-03-25 00:00:00 +0800
selected:       true

abstract: >-
  本文主要介绍无约束问题的优化算法, 这些算法也常作为子问题的求解器出现在约束优化问题以及其他复杂问题中. 对于可微函数来说, 有梯度类算法与信赖域算法两大类算法, 梯度类算法中又包括了梯度下降法、牛顿法、拟牛顿法等. 对于凸函数而言, 主要应用次梯度算法和近似点算法求解. 对于可微函数加凸函数这样的复合优化问题, 有近似点梯度法, FISTA 算法, BCD 算法等.
cover:          

authors:
  - Pengfei Hao

layout: post

---

# 无约束优化算法

本文主要介绍无约束问题的优化算法, 这些算法也常作为子问题的求解器出现在约束优化问题以及其他复杂问题中. 对于可微问题来说, 有梯度类算法与信赖域算法两大类算法, 梯度类算法中又包括了梯度下降法、牛顿法、拟牛顿法等. 对于凸问题而言, 主要应用次梯度算法和近似点算法求解. 对于可微函数加凸函数这样的复合优化问题, 有近似点梯度法, FISTA 算法, BCD 算法等.

## 线搜索方法

线搜索方法主要用于一元函数最小值的求解, 其一般作为下降算法的一步出现, 一般形式为

$$
\argmin_{\alpha>0} f(x^k+\alpha d^k),
$$

如果直接寻找上述问题的最小值点, 就得到了**精确线搜索方法**; 反之, 也可以不去求解上述问题的精确解, 而是满足一定的**线搜索准则**, 就得到了**非精确线搜索方法**. 常用的线搜索准则有以下几种:

{% include widgets/highlight_begin.html %}

**Armijo 准则**

设 $$d^k$$ 是 $$x^k$$ 出的一个下降方向, $$c_1\in(0,1)$$, 若

$$
f(x^k+\alpha_{*}d^k)\leqslant f(x^k)+c_1\alpha_*\nabla f(x^k)^\top d^k,
$$

则称步长 $$\alpha_*$$ 满足 Armijo 准则.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

**Armijo-Goldstein 准则**

设 $$d^k$$ 是 $$x^k$$ 出的一个下降方向, $$0<c_1<c_2<1$$, 若

$$
\begin{aligned}
f(x^k+\alpha_{*}d^k)&\leqslant f(x^k)+c_1\alpha_*\nabla f(x^k)^\top d^k,\\
f(x^k+\alpha_{*}d^k)&\geqslant f(x^k)+c_2\alpha_*\nabla f(x^k)^\top d^k,
\end{aligned}
$$

则称步长 $$\alpha_*$$ 满足 Goldstein 准则.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

**Armijo-Wolfe 准则**

设 $$d^k$$ 是 $$x^k$$ 出的一个下降方向, $$0<c_1<c_2<1$$, 若

$$
\begin{aligned}
f(x^k+\alpha_{*}d^k)&\leqslant f(x^k)+c_1\alpha_*\nabla f(x^k)^\top d^k,\\
c_2\nabla f(x^k)^\top d^k
&\leqslant \nabla f(x^k+\alpha_* d^k)^\top d^k,
\end{aligned}
$$

则称步长 $$\alpha_*$$ 满足 Wolfe 准则.

{% include widgets/highlight_end.html %}

精确线搜索可用以下方法实现:

- 黄金分割法
- 二次插值法, 以上两种是 matlab 的实现

非精确线搜索可用以下几种方法实现:

- 回退法, 这种方法无法满足 Wolfe 条件
- Fletcher 算法, 用于满足 Wolfe 条件

基于线搜索方法, 可以建立一般梯度下降方法的收敛性框架.

{% include widgets/highlight_begin.html %}

**Zoutendijk 条件**

在一定条件下, 有如下成立

$$
\sum_{k=0}^\infty\cos^2\theta_k\Vert\nabla f(x^k)\Vert^2<+\infty.
$$

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

**梯度下降方法的收敛性**

记 $$\theta_k$$ 是每一步迭代中下降方向与负梯度方向的夹角, 且存在一个 $$\gamma>0$$ 使得对任意的 $$k$$ 有

$$
\theta_k<\frac\pi2-\gamma,
$$

且 Zoutendijk 条件成立, 则

$$
\lim_{k\to\infty} \nabla f(x^k)=0.
$$

{% include widgets/highlight_end.html %}

## 梯度类算法

梯度类算法可以比喻成下山的过程. 假设从某个地点出发, 为了找到最低点, 首先需要找到一个前进的方向, 然后按照这个方向走出一定的距离, 依次循环往复, 直到走到最低点. 在前一节中已经介绍了如何按照某个方向走出一定的距离, 在本节中将要介绍下降方向如何选取, 这也是梯度类算法的核心.

- **梯度下降法**或**最速下降法**直接选择负梯度方向, 沿着函数值下降最快的方向前进, 但是这类方法收敛速度较慢.
- **共轭梯度法**选择共轭梯度方向, 这是一个与之前所有的下降方向都共轭正交的方向, 可以有效提高收敛速度.
- **Barzilai-Borwein (BB) 方法**其下降方向仍然是负梯度方向, 但是其步长并不由线搜索方法得到, 也被称为 **BB 步长**. 这是一种非单调线搜索方法.

梯度类算法收敛性的一般框架:

- 充分下降性
- 梯度上界
- KL 性质

## 牛顿类算法

牛顿类算法利用二阶信息构造下降方向, 有如下几种实现:

- **经典牛顿法**直接利用 Hessian 矩阵得到下降方向, 并且固定搜索步长为 $$1$$, 但这种方法有数值求解困难与收敛速度慢的问题.
- **修正牛顿法**主要解决经典牛顿法中 Hessian 矩阵不正定以及搜索步长固定而引起的不收敛等问题.
- **非精确牛顿法**通过非精确求解牛顿方程来提高收敛速度.

## 拟牛顿类算法

拟牛顿算法的核心思想是避免直接计算 Hessian 矩阵, 而是通过其近似矩阵或其逆矩阵的近似矩阵来计算下降方向. 有如下几种实现:

- **秩一更新 (SR1)** 每次对近似 Hessian 矩阵进行秩一修正, 其问题是无法保证近似矩阵的正定性.
- **BFGS 公式**每次对近似 Hessian 矩阵进行秩二修正, 并通过 SMW 公式得到其逆矩阵的更新表达式.
- **DFP 公式**每次对近似 Hessian 矩阵的逆矩阵进行秩二修正, 但是其整体效果不如 BFGS 公式.
- **有限内存 BFGS 方法**直接计算近似 Hessian 矩阵的逆与梯度的乘积, 从而节省内存.

## 信赖域方法

信赖域方法不同于梯度类算法, 其在迭代点的附近对目标函数进行二阶近似, 通过将这个二阶近似限制在信赖域内求解其最小值点的方式获得下一步的迭代点, 并根据函数的情况动态调整信赖域的大小. 其信赖域自问题有如下求解方式:

- **迭代法**
- **截断共轭梯度法**

## 次梯度算法

次梯度算法主要用于求解无约束凸问题的极小值点. 次梯度算法与梯度类算法有相似之处, 同样包含下降方向和步长的选取两部分, 但其选取方式与梯度类算法不同. 由于次微分是一个集合, 下降方向一般无法直接计算, 较为依赖于手工选取; 步长的选取有以下几类方式:

- 固定步长, 即步长 $$\alpha_k$$ 不变;
- 固定每次移动的距离, 即 $$\Vert x^{k+1}-x^k\Vert$$不变;
- 消失步长, $$\lim_{k\to\infty}\alpha_k=0,\,\sum_{k=0}^\infty\alpha_k=+\infty$$.

可以看出, 次梯度算法一般是非单调算法.

## 近似点算法

近似点算法主要用于求解无约束凸问题的极小值点. 近似点算法通过对凸函数进行正则化, 即在每一个子问题的目标函数上叠加一个二次函数, 可以使目标函数成为强凸函数, 同时限制每一步迭代的距离, 使得新的子问题便于求解. 子问题可以使用 $$\text{prox}$$ 算子表示和求解, 同时也是近似点梯度法的一种特殊情形.

通过在迭代点 $$x_k$$ 处二次正则化, 可以将原问题转化为如下形式:

$$
f(x)+\frac1{2t_k}\Vert x-x^k\Vert^2,
$$

可以得到近似点算法的迭代过程

{% include widgets/highlight_begin.html %}

**近似点算法**

其每一步迭代如下

$$
x^{k+1}=\text{prox}_{t_kf}(x^k),
$$

其中 $$t_k$$ 为步长. 可以使用固定步长; 也可以使用线搜索准则得到步长.

{% include widgets/highlight_end.html %}

近似点算法与增广拉格朗日算法有很强的联系. 对对偶函数使用近似点梯度法等价于对原问题用增广拉格朗日函数法. 这在对偶近似点梯度法的迭代过程中也可以看出.

## 近似点梯度法 & FISTA 算法

近似点梯度法主要处理目标函数为可微函数加凸函数的情况, 通过将子问题的可微项一阶展开, 保留凸项并添加正则项, 将原问题转化为 $$\text {prox}$$ 算子的计算. 其目标函数一般有如下形式:

$$
\begin{aligned}\min_{x\in\mathbb R^n}f(x)+g(x),
\end{aligned}
$$

其中 $$f$$ 为可微函数, $$h$$ 为适当的闭凸函数.

将目标函数在迭代点 $$x^k$$ 处的可微项一阶展开并添加正则项, 可以得到

$$
g(x)+f(x^k)+ \langle\nabla f(x^k),x-x^k\rangle+\frac1{2t_k}\Vert x-x^k\Vert^2,
$$

 从而得到近似点梯度法:

{% include widgets/highlight_begin.html %}

**近似点梯度法**

其每一步迭代如下

$$
x^{k+1}=\text{prox}_{t_kg}(x^k-t_k\nabla f(x^k)),
$$

其中 $$t_k$$ 为步长. 如果 $$f$$ 是梯度 Lipschitz 连续的, 可以使用固定步长; 也可以使用线搜索准则.

{% include widgets/highlight_end.html %}

算法的 Nesterov 加速版本称为 FISTA 算法.

{% include widgets/highlight_begin.html %}

**FISTA 算法**

其每一步迭代如下

$$
\begin{aligned}
y^{k+1}= y^k+\frac{k-1}{k+2}(y^k-y^{k-1}),\\
x^{k+1}=\text{prox}_{t_kg}(y^k-t_k\nabla f(y^k)),\\
\end{aligned}
$$

其中 $$t_k$$ 为步长.

{% include widgets/highlight_end.html %}

FISTA 算法即在近似点梯度法的基础上利用前两步的信息做了一个外推步.

## 分块坐标下降 (BCD) 算法

分块坐标下降算法主要目标函数为多元的可微函数加凸函数的无约束问题, 即按照每个分量都可微的函数复合上多个凸函数, 相当于按照每个分量都类似于近似点梯度法的目标函数, 其目标函数有如下形式:

$$
\min_{x_1,\dots,x_s}f(x_1,\dots,x_s)+r_1(x_1)+\dots+r_s(x_s),
$$

BCD 算法通过依次极小化每个分量, 进而得到原问题的极小值点, 迭代格式如下:

{% include widgets/highlight_begin.html %}

**分块坐标下降算法**

定义辅助函数

$$
f^k_i(x)=f(x^k_i,...,x^k_{i-1},x,x_{i+1}^{k-1},...,x_s^{k-1}),
$$

在每一步迭代中, 有以下三种更新方式:

- 直接更新:
    
    $$
    x^k_i=\argmin_{x_i\in X_i^k}\{f^k_i(x_i)+r_i(x_i)\}
    $$
    
- 添加了一个正则项, 使得下一步迭代点不会与当前迭代点距离过远:
    
    $$
    x_i^k=\argmin_{x_i\in X^k_i}\{f^k_i(x_i)+r_i(x_i)+\frac{L^{k-1}}{2}\Vert x_i-x_i^{k-1}\Vert^2\},
    $$
    
- 对可微项做线性化处理, 并添加正则项, 同时应用了 Nesterov 加速算法, (实际是对每个子问题使用 FISTA 算法) 使得每个子优化问题易于求解:
    
    $$
    x_i^k=\argmin_{x_i\in X^k_i}\{r_i(x_i)+\left\langle \nabla f_i^k(\hat{x}_i^{k-1}),x_i-\hat{x}_i^{k-1}\right\rangle+\frac{L^{k-1}}{2}\Vert x_i-\hat{x}_i^{k-1}\Vert^2\},
    $$
    
    其中$$\hat{x}^{k-1}_{i}$$采用外推定义:
    
    $$
    \hat{x}^{k-1}_i=x^{k-1}_i+\omega^{k-1}_i(x^{k-1}_i-x^{k-2}_i).
    $$
    

其中 $$L^k$$ 为步长, 可以取固定步长或由线搜索得到.

{% include widgets/highlight_end.html %}

## 常用转化策略

- 正则化: 近似点算法, 近似点梯度法
- Nesterov 加速: FISTA 算法
- 交替方向: BCD 算法, ADMM 算法
- 对偶: PDHG 算法, 对偶近似点梯度法
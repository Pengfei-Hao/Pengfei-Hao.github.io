---
title:          Manifold Cheat Sheet
link:           2025-manifold
date:           2025-12-26 00:00:00 +0800
selected:       true

abstract: >-
  A cheat sheet for concepts in differential manifold.
cover:          

authors:
  - Pengfei Hao

layout: post

---

# Manifold Cheat Sheet

## Manifolds

Related concepts: topological manifolds, chart, dimension, $${C}^{\infty}$$-compatible, $${C}^{\infty}$$ atlas, maximal atlas, smooth manifold

{% include widgets/highlight_begin.html %}

**Topological manifolds** is a topological space $$\mathcal{M}$$ with following properties:

* Hausdorff,
* second-countable: $$\mathcal{M}$$ has a countable basis,
* locally Euclidean: $$\forall p\in M$$, $$\exists\text{ open neighborhood }G$$ of $$p$$, such that there is a diffeomorphism $$\phi$$ from $$G$$ to a open subset $$U$$ of $${\mathbb{R}}^{n}$$.

The pair $$\left(G,\phi:G\rightarrow{\mathbb{R}}^{n}\right)$$ is a **chart**, $$n$$ is called the **dimension** of $$\mathcal{M}$$.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

Two charts $$\left(U,\phi:U\rightarrow{\mathbb{R}}^{n}\right)$$ and $$\left(V,\psi:V\rightarrow{\mathbb{R}}^{n}\right)$$ are **$${C}^{\infty}$$-compatible** if both $$\phi\circ{\psi}^{-1}$$ and $$\psi\circ{\phi}^{-1}$$ are $${C}^{\infty}$$ function in $${\mathbb{R}}^{n}$$.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

A collection $$\mathcal{U}=\left\{\left({U}_{\alpha},{\phi}_{\alpha}\right),\alpha\in\mathcal{A}\right\}$$ is a **$${C}^{\infty}$$ atlas** if $$\mathcal{U}$$ is pairwise-compatible and an open cover of $$\mathcal{M}$$.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

$$\mathcal{U}$$ is a **maximal atlas** of $$\mathcal{M}$$ if it is not contained in any atlas, i.e. $$\mathcal{U}=\mathcal{V}$$ if $$\mathcal{V}$$ is any atlas containing $$\mathcal{U}$$.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

a **smooth manifold** or **manifold** is a topological manifold with maximal atlas.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

Any atlas on a locally Eulidean space is contained in a unique maximal atlas.

{% include widgets/highlight_end.html %}

An example: $$\mathbb{R}$$ is a manifold under two different charts $$\left(\mathbb{R},\phi\left(t\right)=t\right)$$, $$\left(\mathbb{R},\phi\left(t\right)={t}^{3}\right)$$, but these two charts are not compatible.

## Smooth Maps

Related concepts: smooth function, smooth map, diffeomorphism, partial derivatives, Jacobian matrix

{% include widgets/highlight_begin.html %}

A function $$f:\mathcal{M}\rightarrow{\mathbb{R}}^{n}$$ is **smooth** at $$p$$ if there is a chart $$\left(U,\phi\right)$$ about $$p$$ such that $$f\circ{\phi}^{-1}$$ is smooth at $$\phi\left(p\right)$$. $$f$$ is **smooth** on $$M$$ if $$f$$ is smooth at each point $$p$$ on $$\mathcal{M}$$.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

Let $$\mathcal{M},\mathcal{N}$$ be two manifolds, a continuous map $$f:\mathcal{M}\rightarrow\mathcal{N}$$ is **smooth** at $$p$$ if there are two charts $$\left(U,\phi\right),\left(V,\psi\right)$$ about $$p,f\left(p\right)$$ such that $$\psi\circ f\circ{\phi}^{-1}$$ is smooth at $$\phi\left(p\right)$$. $$f$$ is **smooth** on $$\mathcal{M}$$ if $$f$$ is smooth at each point of $$\mathcal{M}$$.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

A **diffeomorphism** is a bijection $$f:\mathcal{M}\rightarrow\mathcal{N}$$ such that $$f$$ and $${f}^{-1}$$ are both smooth.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

Let $$\mathcal{M},\mathcal{N}$$ be two manifolds with dimension $$m,n$$, a continuous map $$f:\mathcal{M}\rightarrow\mathcal{N}$$ is smooth at $$p$$, let $$\left(U,\phi\right),\left(V,\psi\right)$$ be two charts about $$p$$ and $$f\left(p\right)$$, a **partial derivative** at $$p$$ is

$$
\frac{\partial{f}^{j}}{\partial{x}^{i}}\left(p\right)=\frac{\partial\psi\circ{f}^{j}\circ{\phi}^{-1}}{\partial{r}^{i}}\left(\phi\left(p\right)\right),\quad i=1,\dots,m,\quad j=1,\dots,n,
$$

the **Jacobian matrix** is

$$
J F\left(p\right)={\left(\frac{\partial{f}^{j}}{\partial{x}^{i}}\left(p\right)\right)}_{i j}.
$$

{% include widgets/highlight_end.html %}

## Tangent Space

Related concepts: germs, derivative, tangent vector, tangent space, differential, chain rule, immersion, submersion, critical point, regular point, critical value, regular value

{% include widgets/highlight_begin.html %}

Let $$\mathcal{M}$$ be a manifold, $$p\in\mathcal{M}$$, $$f:\mathcal{M}\rightarrow\mathbb{R}$$ is smooth, we can define a equivalent class $$f\sim g\Leftrightarrow\exists\text{a neighbourhood }U\text{ of }p\text{, s.t. }f=g\text{ on }U$$. The equivalent class are **germs**. We denote all the equivalent class as $${C}_{p}^{\infty}\left(\mathcal{M}\right)$$.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

A **derivative** on a manifold $$\mathcal{M}$$ and $$p\in\mathcal{M}$$ is a linear functional $$D:{C}_{p}^{\infty}\left(\mathcal{M}\right)\rightarrow\mathbb{R}$$ such that

$$
D\left(f g\right)=\left(D f\right)g+f\left(D g\right),
$$

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

A **tangent vector** at $$p$$ in $$\mathcal{M}$$ is a derivation at p in $$\mathcal{M}$$. We denote all the tangent vectors as $${T}_{p}\mathcal{M}$$, the **tangent space**.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

Tangent space is a finite dimensional linear space, and the directional derivatives

$$
\left\{\frac{\partial}{\partial{x}^{1}},\dots,\frac{\partial}{\partial{x}^{n}}\right\}
$$

are a basis of $${T}_{p}\mathcal{M}$$. This implies that the dimension of manifold is equal to the dimension of its tangent space.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

Let $$F$$ be a smooth map between $$\mathcal{M}$$ and $$\mathcal{N}$$. At point $$p\in\mathcal{M}$$, **differential** $${F}_{*}$$ is induced by $$F$$, $${F}_{*}$$ is a linear maps bewteen tangent spaces $${T}_{p}\mathcal{M}$$ and $${T}_{F\left(p\right)}\mathcal{N}$$:

$$
{F}_{*,p}\left({X}_{p}\right)f={X}_{p}\left(f\circ F\right).
$$

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

Let $$\mathcal{M},\mathcal{N}$$ be two manifolds with dimension $$m,n$$, $$F:\mathcal{M}\rightarrow\mathcal{N}$$ is smooth at $$p$$, let $$\left(U,\phi\right),\left(V,\psi\right)$$ be two charts about $$p$$ and $$F\left(p\right)$$, the Jacobian matrix of $$F$$ is $$J F\left(p\right)={\left(\frac{\partial{f}^{j}}{\partial{x}^{i}}\left(p\right)\right)}_{i j}$$, then the matrix of $${F}_{*,p}$$ (as a linear map) is $$J F\left(p\right)$$.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

**(Chain Rule)** Let $$F:\mathcal{M}\rightarrow\mathcal{N}$$, $$G:\mathcal{N}\rightarrow\mathcal{P}$$ are smooth, the differential of composition $$G\circ F$$ equals the composition of differential

$$
{\left(G\circ F\right)}_{*,p}={G}_{*,F\left(p\right)}\circ{F}_{*,p}.
$$

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

Let $$F:\mathcal{N}\rightarrow\mathcal{M}$$ is a diffeomorphism at $$p$$, then $${F}_{*,p}:{T}_{p}\mathcal{N}\rightarrow{T}_{f\left(p\right)}\mathcal{M}$$ is an isomorphism. This implies that if $$F$$ is a diffeomorphism, then $$\dim\mathcal{N}=\dim\mathcal{M}$$.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

Let $$F:\mathcal{N}\rightarrow\mathcal{M}$$ be smooth, and $$p\in\mathcal{N}$$. $$F$$ is an **immersion** iff $${F}_{*,p}$$ is an injective.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

Let $$F:\mathcal{N}\rightarrow\mathcal{M}$$ be smooth, and $$p\in\mathcal{N}$$. $$F$$ is a **submersion** iff $${F}_{*,p}$$ is a surjective.

{% include widgets/highlight_end.html %}

Let $$\dim\mathcal{N}=n$$,$$\dim\mathcal{M}=m$$ . $$F$$ is immersion implies that $$n\leqslant m$$, and $$\text{rank}F=n$$. $$F$$ is submersion implies that $$n\geqslant m$$, and $$\text{rank}F=m$$.

{% include widgets/highlight_begin.html %}

$$p\in\mathcal{N}$$ is a **critical point** iff $${F}_{*,p}$$ is not a surjective.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

$$p\in\mathcal{N}$$ is a **regular point** iff $${F}_{*,p}$$ is a surjective.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

$$q\in\mathcal{M}$$ is a **critical value** iff there exists $$p\in{f}^{-1}\left(q\right)$$ such that $$p$$ is a critical point.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

$$q\in\mathcal{M}$$ is a **regular value** iff $$q$$ is not a critical value.

{% include widgets/highlight_end.html %}

## Submanifold

Related concepts: regular submanifold, level set, zero set, regular level set theorem

{% include widgets/highlight_begin.html %}

A subset $$S$$ of manifold $$\mathcal{N}$$ of dim $$n$$ is a **regular submanifold** of dim $$k$$ iff forall $$p\in S$$ there exists a chart $$\left(U,\phi\right)$$ of $$\mathcal{N}$$ suct that $$U\cap S$$ is obtained by vanishing of $$n-k$$ coordinates of $$\phi$$.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

We give the submanifold $$S$$ the subspace topology and atlas $$\left\{\left(U\cap S,\phi{|}_{s}\right)\right\}$$, then a regular submanifold is a manifold.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

A **level set** of $$F:\mathcal{N}\rightarrow\mathcal{M}$$ is $${f}^{-1}\left(c\right)=\left\{p\in\mathcal{N}|f\left(p\right)=c\right\}$$.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

The **zero set** of $$F:\mathcal{N}\rightarrow\mathcal{M}$$ is $${f}^{-1}\left(0\right)$$.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

The **regular level set** is the level set of regular value $$c$$.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

**(Regular Level Set)** Let $$F:\mathcal{N}\rightarrow\mathcal{M}$$ be smooth, and $$c$$ is a regular value and $${f}^{-1}\left(c\right)$$ is nonempty, then $${F}^{-1}\left(c\right)$$ is a regular submanifold of $$\mathcal{N}$$ of dimension $$n-m$$.

{% include widgets/highlight_end.html %}

Examples: The general linear group $$\text{GL}\left(n,\mathbb{R}\right)$$ is a $${n}^{2}$$ dimensional regular submanifold of $${\mathbb{R}}^{{n}^{2}}$$. The special linear group $$\text{SL}\left(n,\mathbb{R}\right)$$ is a $${n}^{2}-1$$ dimensional regular submanifold of general linear group $$\text{GL}\left(n,\mathbb{R}\right)$$, (let $$f\left(A\right)=\left|A\right|$$).

## Rank of Manifold

Related concepts: maximal rank, constant rank theorem, immersion theorem, submersion theorem, constant rank level set theorem, embedding

{% include widgets/highlight_begin.html %}

If $$F:\mathcal{N}\rightarrow\mathcal{M}$$ is smooth and has **maximal rank** at $$p$$, then there are three possibilites:

* If $$n=m$$, $$F$$ is a local diffeomorphism,
* If $$n\leqslant m$$, $$F$$ is an immersion,
* If $$n\geqslant m$$, $$F$$ is a submersion.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

**(Constant Rank)** Let $$f:\mathcal{N}\rightarrow\mathcal{M}$$ be smooth and has constant rank $$k$$ in a neighbourhood of $$p\in\mathcal{N}$$, then there exist charts $$\left(U,\phi\right),\left(V,\psi\right)$$ centered at $$p$$, $$f\left(p\right)$$ such that

$$
\psi\circ f\circ{\phi}^{-1}\left({r}_{1},{r}_{2},\dots,{r}_{n}\right)=\left({r}_{1},{r}_{2},\dots,{r}_{k},0,\dots,0\right).
$$

{% include widgets/highlight_end.html %}

Having maximal rank is an open condition, i.e. if $$f$$ has maximal rank at $$p$$, then there exists a open neighborhood $$U$$ of $$p$$ such that $$f$$ has maximal rank in $$U$$.

{% include widgets/highlight_begin.html %}

**(Immersion)** Let $$f:\mathcal{N}\rightarrow\mathcal{M}$$ be smooth and is an immersion at $$p\in\mathcal{N}$$, then there exist charts $$\left(U,\phi\right),\left(V,\psi\right)$$ centered at $$p$$, $$f\left(p\right)$$ such that

$$
\psi\circ f\circ{\phi}^{-1}\left({r}_{1},{r}_{2},\dots,{r}_{n}\right)=\left({r}_{1},{r}_{2},\dots,{r}_{n},0,\dots,0\right).
$$

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

**(Submersion)** Let $$f:\mathcal{N}\rightarrow\mathcal{M}$$ be smooth and is a submersion at $$p\in\mathcal{N}$$, then there exist charts $$\left(U,\phi\right),\left(V,\psi\right)$$ centered at $$p$$, $$f\left(p\right)$$ such that

$$
\psi\circ f\circ{\phi}^{-1}\left({r}_{1},{r}_{2},\dots,{r}_{n}\right)=\left({r}_{1},{r}_{2},\dots,{r}_{m}\right).
$$

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

**(Constant Rank Level Set)** Let $$F:\mathcal{N}\rightarrow\mathcal{M}$$ be smooth and has constant rank $$k$$ in a neighbourhood of $${f}^{-1}\left(c\right)$$, then $${f}^{-1}\left(c\right)$$ is a regular submanifold of dimension $$n-k$$.

{% include widgets/highlight_end.html %}

The regular level set theorem is a specilaized version of constant rank level set thoerem.

An example: The orthogonal group $$O\left(n\right)$$ is a regular submanifold of $$\text{GL}\left(n\right)$$, (let $$f\left(A\right)={A}^{T}A-I$$).

{% include widgets/highlight_begin.html %}

A smooth map $$f:\mathcal{N}\rightarrow\mathcal{M}$$ is an **embedding** iff $$f$$ is an one to one immersion and the topology of $$f\left(\mathcal{N}\right)$$ induced by $$f$$ is homeomorphism to subspace topology.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

If $$f$$ is an embedding, $$f\left(\mathcal{N}\right)$$ is an regular submanifold.

{% include widgets/highlight_end.html %}

## Tangent Bundle

Related concepts: tangent bundle, natural map, vector field, induced map

{% include widgets/highlight_begin.html %}

**Tangent bundle** $$T\mathcal{M}$$ of manifold $$\mathcal{M}$$ is

$$
T\mathcal{M}=\bigcup_{p\in\mathcal{M}}^{}{T}_{p}\mathcal{M}.
$$

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

The **natural map** is $$\pi:T\mathcal{M}\rightarrow\mathcal{M}$$

$$
\pi\left(v\right)=p,\quad\text{if }v\in{T}_{p}\mathcal{M}.
$$

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

the tangent bundle $$T\mathcal{M}$$ has a manifold structure.

{% include widgets/highlight_end.html %}

For each chart $$\left(U,\phi\right)$$ of $$\mathcal{M}$$ centered at $$p\in U$$, the tangent space $${T}_{p}U$$ equals $${T}_{p}\mathcal{M}$$, we denotes the union of tangent spaces of $$U$$ as $$T U=\bigcup_{p\in U}^{}{T}_{p}\mathcal{M}$$. Let $$\nu\in T U$$, we set $$\widetilde{\phi}:T U\rightarrow\phi\left(U\right)\times{\mathbb{R}}^{n}$$

$$
\widetilde{\phi}\left(\nu\right)=\left(\phi\circ\pi\left(\nu\right),c\left(\nu\right)\right)
$$

where $$c\left(\nu\right)$$ satisfies

$$
\nu={c}^{1}\left(\nu\right)\frac{\partial}{\partial{x}^{1}}+{c}^{2}\left(\nu\right)\frac{\partial}{\partial{x}^{2}}+\dots+{c}^{n}\left(\nu\right)\frac{\partial}{\partial{x}^{n}}
$$

This is a diffeomorphism to $$\phi\left(U\right)\times{\mathbb{R}}^{n}$$, and we give $$T U$$ the topology induced by $$\widetilde{\phi}$$. The topology of $$T\mathcal{M}$$ is generated from the topology of all charts $$\left(U,\phi\right)$$.

{% include widgets/highlight_begin.html %}

A **vector field** $$X$$ on $$\mathcal{M}$$ is a function assigns a tangent vector $${X}_{p}\in T\mathcal{M}$$ to each point $$p$$ of $$\mathcal{M}$$.

{% include widgets/highlight_end.html %}

{% include widgets/highlight_begin.html %}

Let $$X$$ be a smooth vector field on $$\mathcal{M}$$, $$f\in{C}^{\infty}\left(\mathcal{M}\right)$$, the **induced map** of $$X$$ is $$X f:\mathcal{M}\rightarrow\mathbb{R}$$

$$
{\left(X f\right)}_{p}={X}_{p}f.
$$

{% include widgets/highlight_end.html %}

$$X$$ can be seen as a map from $${C}^{\infty}\left(\mathcal{M}\right)$$ to $${C}^{\infty}\left(\mathcal{M}\right)$$, then $$X$$ is a derivative.
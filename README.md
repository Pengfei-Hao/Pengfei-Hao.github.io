# Pengfei-Hao.github.io

This is the source code of my personal website [Pengfei Hao](https://pengfei-hao.github.io). This website is based on [Jekyll](https://jekyllrb.com), and it also uses the template [Academic Pages](https://github.com/academicpages/academicpages.github.io).

## Installation

1. Follow the site [Jekyll Installation](https://jekyllrb.com/docs/installation/macos/) to install `chruby` and `ruby-install`, and configure the zsh(bash). Then install `jekyll`.
2. `chruby` may need terminal proxy, add
    ```
    proxy () {
      export http_proxy="http://127.0.0.1:7897"
      export https_proxy="http://127.0.0.1:7897"
      echo "HTTP Proxy on"
    }

    noproxy () {
      unset http_proxy
      unset https_proxy
      echo "HTTP Proxy off"
    }
    ```
    to `.zshrc`.
3. Use `bundle install` to install ruby dependencies.
4. Run `bundle exec jekyll serve` to preview the site on `localhost:4000` (`http://127.0.0.1:4000/`).

**Notice:**
Inline math equation should be replaced 
```
(?<!\$)\$(?!\$)
```
with
```
$$$$
```
moreover, inline equation conflicts with `|` (table). Then replace
```
<aside>
...
</aside>
```
with
```
{% include widgets/highlight_begin.html %}
...
{% include widgets/highlight_end.html %}
```

## License

Copyright (c) Pengfei Hao. All rights reserved.

Licensed under the [MIT](LICENSE.txt) license.
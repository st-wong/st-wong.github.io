[![Build Status](https://travis-ci.org/st-wong/st-wong.github.io.svg?branch=dev%2Fhugo)](https://travis-ci.org/st-wong/st-wong.github.io)

## Overview of branch `dev/hugo`

This branch will host the source files used to build [st-wong.github.io](https://st-wong.github.io) using [Hugo](https://gohugo.io).

### Build using the Binaries

#### Prerequisite Tools

* [Git](https://git-scm.com/)
* [Hugo latest release](https://github.com/gohugoio/hugo/releases)

#### Fetch from GitHub

```bash
git clone -b dev/hugo https://github.com/st-wong/st-wong.github.io.git
cd st-wong.github.io
hugo server -t hugo-cactus-theme
```

Now enter `localhost:1313` in the address bar of your browser.

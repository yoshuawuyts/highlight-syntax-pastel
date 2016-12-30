# highlight-syntax-pastel [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Pastel theme for [highlight-syntax][hs].

## Usage
```js
var Highlight = require('highlight-syntax')
var css = require('sheetify')
var html = require('bel')
var fs = require('fs')

css`
  body { margin: 0 }
`

var prefix = css`
  :host {
    margin: 0;
    padding: 2em;
    background-color: #333
  }
`

css('./index.css')
var highlight = Highlight([ require('highlight-syntax/js') ])

var src = fs.readFileSync(__filename, 'utf8')
var inner = highlight(src, { lang: 'js' })
var el = html`<pre class=${prefix}><code></code></pre>`
el.innerHTML = inner
document.body.appendChild(el)
```

```sh
$ browserify index.js -t sheetify/transform > out.js
```

## Installation
```sh
$ npm install highlight-syntax-pastel
```

## See Also
- [substack/highlight-syntax](https://github.com/substack/highlight-syntax)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/highlight-syntax-pastel.svg?style=flat-square
[3]: https://npmjs.org/package/highlight-syntax-pastel
[4]: https://img.shields.io/travis/yoshuawuyts/highlight-syntax-pastel/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/highlight-syntax-pastel
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/highlight-syntax-pastel/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/highlight-syntax-pastel
[8]: http://img.shields.io/npm/dm/highlight-syntax-pastel.svg?style=flat-square
[9]: https://npmjs.org/package/highlight-syntax-pastel
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
[hs]: https://github.com/substack/highlight-syntax

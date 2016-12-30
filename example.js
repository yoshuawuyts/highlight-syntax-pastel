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

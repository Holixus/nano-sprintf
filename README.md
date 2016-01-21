[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

# nano-sprintf
A simple sprintf-like function


```js
var sprintf = require('nano-sprintf');
```

* %-?\d*[sdxXB]
  * s -- string
  * d -- decimal number
  * x -- low case hexadecimal
  * X -- up case hexadecimal
  * b -- binary (0101010)

## Aligning

* `%10s`  -- left spaces padding
* `%-10s` -- right spaces padding


[gitter-image]: https://badges.gitter.im/Holixus/nano-sprintf.svg
[gitter-url]: https://gitter.im/Holixus/nano-sprintf

[npm-image]: https://badge.fury.io/js/nano-sprintf.svg
[npm-url]: https://badge.fury.io/js/nano-sprintf

[github-tag]: http://img.shields.io/github/tag/Holixus/nano-sprintf.svg
[github-url]: https://github.com/Holixus/nano-sprintf/tags

[travis-image]: https://travis-ci.org/Holixus/nano-sprintf.svg?branch=master
[travis-url]: https://travis-ci.org/Holixus/nano-sprintf

[coveralls-image]: https://coveralls.io/repos/github/Holixus/nano-sprintf/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/Holixus/nano-sprintf?branch=master

[david-image]: https://david-dm.org/Holixus/nano-sprintf.svg
[david-url]: https://david-dm.org/Holixus/nano-sprintf

[license-image]: http://img.shields.io/npm/l/nano-sprintf.svg
[license-url]: LICENSE

[downloads-image]: http://img.shields.io/npm/dm/nano-sprintf.svg
[downloads-url]: https://npmjs.org/package/nano-sprintf

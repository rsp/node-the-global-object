The Global Object
=
[![npm install][install-img]][npm-url]
<br>
[![Travis Build Status][travis-shield]][travis-url]
[![CircleCI Build Status][circle-shield]][circle-url]
[![Build Status][travis-img]][travis-url]
[![CircleCI][circle-img]][circle-url]
[![Dependencies Status][david-img]][david-url]
[![Known Vulnerabilities][snyk-img]][snyk-url]
[![Downloads][downloads-img]][stats-url]
[![License][license-img]][license-url]

The global object in Node or in the browser.

Hopefully it will no longer be needed when the TC39 global proposal is implemented, see:

- https://github.com/tc39/proposal-global
- http://littledan.github.io/global.html

How it works
-
Note that the only reliable way to get the global object is:
```js
Function('return this')();
```
but it breaks the Chrome App Content Security Policy, see:

- https://github.com/paulmillr/es6-shim/issues/301

This module checks to see if there is `self`, `window` or `global` variable
and returns the first one that has a reference to itself with the same name,
as a real global object would, with some additional checks.

This is important to not return a wrong object if there is a global variable
called `self` or `window` defined. This module does the following checks:

- the object has a circular reference to itself
- the object has properties `Array` and `setInterval` equal to the global ones

Issues
------
For any bug reports or feature requests please
[post an issue on GitHub][issues-url].

Author
------
[**Rafał Pocztarski**](https://pocztarski.com/)
<br/>
[![Follow on GitHub][github-follow-img]][github-follow-url]
[![Follow on Twitter][twitter-follow-img]][twitter-follow-url]
<br/>
[![Follow on Stack Exchange][stackexchange-img]][stackoverflow-url]

License
-------
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.

[npm-url]: https://www.npmjs.com/package/the-global-object
[github-url]: https://github.com/rsp/node-the-global-object
[readme-url]: https://github.com/rsp/node-the-global-object#readme
[issues-url]: https://github.com/rsp/node-the-global-object/issues
[license-url]: https://github.com/rsp/node-the-global-object/blob/master/LICENSE.md
[travis-url]: https://travis-ci.org/rsp/node-the-global-object
[travis-img]: https://travis-ci.org/rsp/node-the-global-object.svg?branch=master
[travis-shield]: https://img.shields.io/travis/rsp/node-the-global-object.svg?label=Travis+CI
[circle-url]: https://circleci.com/gh/rsp/node-the-global-object
[circle-img]: https://circleci.com/gh/rsp/node-the-global-object.svg
[circle-shield]: https://img.shields.io/circleci/project/github/rsp/node-the-global-object.svg?label=Circle+CI
[snyk-url]: https://snyk.io/test/github/rsp/node-the-global-object
[snyk-img]: https://snyk.io/test/github/rsp/node-the-global-object/badge.svg
[david-url]: https://david-dm.org/rsp/node-the-global-object
[david-img]: https://david-dm.org/rsp/node-the-global-object/status.svg
[install-img]: https://nodei.co/npm/the-global-object.png?compact=true
[downloads-img]: https://img.shields.io/npm/dt/the-global-object.svg
[license-img]: https://img.shields.io/npm/l/the-global-object.svg
[stats-url]: http://npm-stat.com/charts.html?package=the-global-object
[github-follow-url]: https://github.com/rsp
[github-follow-img]: https://img.shields.io/github/followers/rsp.svg?style=social&label=Follow
[twitter-follow-url]: https://twitter.com/intent/follow?screen_name=pocztarski
[twitter-follow-img]: https://img.shields.io/twitter/follow/pocztarski.svg?style=social&label=Follow
[stackoverflow-url]: https://stackoverflow.com/users/613198/rsp
[stackexchange-url]: https://stackexchange.com/users/303952/rsp
[stackexchange-img]: https://stackexchange.com/users/flair/303952.png

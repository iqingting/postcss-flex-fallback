# PostCSS Flex Fallback [![Build Status][ci-img]][ci]

[PostCSS] plugin fixed flex on android 2.x.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/rguanghui/postcss-flex-fallback.svg
[ci]:      https://travis-ci.org/rguanghui/postcss-flex-fallback

```css
.foo {
    flex: 1;
}
```

```css
.foo {
    flex: 1;
    width: 0;
    display: block;
}
```

## Usage

```js
postcss([ require('postcss-flex-fallback') ])
```

See [PostCSS] docs for examples for your environment.

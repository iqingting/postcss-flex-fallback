var postcss = require('postcss');

module.exports = postcss.plugin('postcss-flex-fallback', function (opts) {
    opts = opts || {};

    return function (css) {
        css.walkDecls('flex', function (decl) {
            decl.cloneAfter({ prop: 'width',  value: '0' });
            decl.cloneAfter({ prop: 'display',  value: 'block' });
        });
    };
});

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-flex-fallback', function (opts) {
    opts = opts || {};

    var insertWidth = function (decl) {
        decl.cloneAfter({ prop: 'width',  value: '0' });
    };

    var insertDisplay = function (decl) {
        decl.cloneAfter({ prop: 'display',  value: 'block' });
    };

    return function (css) {
        css.walkDecls('flex', function (decl) {
            if (/^\d+$/.test(decl.value)) {
                insertWidth(decl);
                insertDisplay(decl);
            }
        });

        css.walkDecls('flex-shrink', function (decl) {
            if (/^\d+$/.test(decl.value)) {
                insertDisplay(decl);
            }
        });
    };
});

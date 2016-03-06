import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.same(result.css, output);
            t.same(result.warnings().length, 0);
        });
}

test('flex', t => {
    return run(t, 'a{ flex: 1; }', 'a{ flex: 1; display: block; width: 0; }');
});

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

test('flex1', t => {
    return run(t, 'a{ flex: 1; }', 'a{ flex: 1; display: block; width: 0; }');
});

test('flex2', t => {
    return run(t, 'a{ flex: 1 0 auto; }', 'a{ flex: 1 0 auto; }');
});

test('flex3', t => {
    return run(t,
        'a{ flex-shrink: 0; }',
        'a{ flex-shrink: 0; display: block; }'
    );
});

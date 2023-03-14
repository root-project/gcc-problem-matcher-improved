const assert = require('node:assert');
const test = require('node:test');
const _testing = require('../src/index');

test('regex escaping test', {skip: true}, () => {
    const escapeRegExp = _testing.escapeRegExp;

    const st = [
        {str: "C:\\Users\\", ok: "C\\:\\\\Users\\\\"},
        {str: "/usr/bin/",   ok: "\\/usr\\/bin\\/"},
        {str: "(\\\\d+):",   ok: "\\(\\\\\\\\d\\+\\)\\:"}
    ];

    st.forEach( (x) => {
        const result = escapeRegExp(x.str);
        console.log(result, x.ok);
        assert.strictEqual(result, x.ok);
    });
});

test('variable regex matching test', () => {
    const variable = _testing.variable;

    const expected = [
        {needle: "foo", haystack: "this sentence contains variable ${{foo}}", ok: true},
        {needle: "bar", haystack: "finds \n ${{bar}} \n in multilines", ok: true},
        {needle: "baz", haystack: "${{    baz  }}", ok: true},
        {needle: "",    haystack: "${{aaa}}", ok: false},
        {needle: "bad", haystack: "{{bad}}", ok: false},
        {needle: "",    haystack: "${{}}", ok: true},
    ];

    expected.forEach( (x) => {
        console.log(x);
        const match = x.haystack.match(variable(x.needle));
        assert.strictEqual( match !== null, x.ok );
    });
});

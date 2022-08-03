var test = require('tape');
var extend = require('./extend-object');


test('multi extend', function (t) {
    var start = {};
    t.deepEqual(extend(start, {name: 'test'}, {hello: 'test'}), {name: 'test', hello: 'test'});
    t.equal(start, extend(start, {}));
    t.end();
});

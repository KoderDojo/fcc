var assert = require('assert');
var bouncer = require('../basic/bouncer').bouncer;

describe('bouncer', function() {
    it('should return [7, "ate", 9] when bouncer([7, "ate", "", false, 9])', function() {
        assert.deepEqual([7, "ate", 9], bouncer([7, "ate", "", false, 9]))
    });
    it('should return ["a", "b", "c"] when bouncer(["a", "b", "c"])', function() {
        assert.deepEqual(["a", "b", "c"], bouncer(["a", "b", "c"]))
    });
    it('should return [] when bouncer([false, null, 0, NaN, undefined, ""])', function() {
        assert.deepEqual([], bouncer([false, null, 0, NaN, undefined, ""]))
    });
    it('should return [1, 2] when bouncer([1, null, NaN, 2, undefined])', function() {
        assert.deepEqual([1, 2], bouncer([1, null, NaN, 2, undefined]))
    });
});

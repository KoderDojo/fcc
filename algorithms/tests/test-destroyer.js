var assert = require('assert');
var destroyer = require('../basic/destroyer').destroyer;

describe('destroyer', function() {
    it('should return [1, 1] when destroyer([1, 2, 3, 1, 2, 3], 2, 3)', function() {
        assert.deepEqual([1, 1], destroyer([1, 2, 3, 1, 2, 3], 2, 3));
    });
    it('should return [1, 5, 1] when destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)', function() {
        assert.deepEqual([1, 5, 1], destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
    });
    it('should return [1] when destroyer([3, 5, 1, 2, 2], 2, 3, 5)', function() {
        assert.deepEqual([1], destroyer([3, 5, 1, 2, 2], 2, 3, 5));
    });
});

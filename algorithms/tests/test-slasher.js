var assert = require ('assert');
var slasher = require('../basic/slasher').slasher;

describe('slasher', function() {
    it('should return [3] when slasher([1, 2, 3], 2)', function() {
        assert.deepEqual([3], slasher([1, 2, 3], 2));
    });
    it('should return [1, 2, 3] when slasher([1, 2, 3], 0)', function() {
        assert.deepEqual([1, 2, 3], slasher([1, 2, 3], 0));
    });
    it('should return [] when slasher([1, 2, 3], 9)', function() {
        assert.deepEqual([], slasher([1, 2, 3], 9));
    });
    it('should return ["cheese", 4] when slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)', function() {
        assert.deepEqual(["cheese", 4], slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));
    });
});

var assert = require('assert');
var largestOfFour = require('../basic/largestOfFour').largestOfFour;

describe('largestOfFour', function() {
    it('should return [27,5,39,1001] when arr is [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]', function() {
        assert.deepEqual([27,5,39,1001], largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
    });
    it('should return [9, 35, 97, 1000000] when arr is [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]', function() {
        assert.deepEqual([9, 35, 97, 1000000], largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
    });
});
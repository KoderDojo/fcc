var assert = require('assert');
var getIndexToIns = require('../basic/getIndexToIns').getIndexToIns;

describe('getIndexToIns', function() {
    it('should return 4 when getIndexToIns([10, 20, 30, 40, 50], 35)', function() {
        assert.equal(3, getIndexToIns([10, 20, 30, 40, 50], 35));
    });
    it('should return 2 when getIndexToIns([10, 20, 30, 40, 50], 30)', function() {
        assert.equal(2, getIndexToIns([10, 20, 30, 40, 50], 30));
    });
    it('should return 1 when getIndexToIns([40, 60], 50)', function() {
        assert.equal(1, getIndexToIns([40, 60], 50));
    });
    it('should return 0 when getIndexToIns([3, 10, 5], 3)', function() {
        assert.equal(0, getIndexToIns([3, 10, 5], 3));
    });
    it('should return 2 when getIndexToIns([5, 3, 20, 3], 5)', function() {
        assert.equal(2, getIndexToIns([5, 3, 20, 3], 5));
    });
});
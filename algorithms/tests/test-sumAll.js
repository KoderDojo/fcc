var assert = require('assert');
var sumAll = require('../intermediate/sumAll').sumAll;
var sumAll2 = require('../intermediate/sumAll').sumAll2;

describe('sumAll', function() {
    it('should return 10 when sumAll([1, 4])', function() {
        assert.equal(sumAll([1, 4]), 10);
    });
    it('should return 45 when sumAll([10, 5])', function() {
        assert.equal(sumAll([10, 5]), 45);
    })
});
describe('sumAll2', function() {
    it('should return 10 when sumAll2([1, 4])', function() {
        assert.equal(sumAll2([1, 4]), 10);
    });
    it('should return 45 when sumAll2([10, 5])', function() {
        assert.equal(sumAll2([10, 5]), 45);
    })
});

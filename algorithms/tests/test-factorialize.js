var assert = require('assert');
var factorialize = require('../basic/factorialize').factorialize;

describe('factorialize', function() {
    it('should return 1 when num is 0', function() {
        assert.equal(1, factorialize(0));
    });
    it('should return 120 when num is 5', function() {
        assert.equal(120, factorialize(5));
    });
});

var assert = require('assert');
var repeatStringNumTimes = require('../basic/repeatStringNumTimes').repeatStringNumTimes;

describe('repeatStringNumTimes', function() {
    it('should return "***" when repeatStringNumTimes("*", 3)', function() {
        assert.equal('***', repeatStringNumTimes('*', 3));
    });
    it('should return "" when repeatStringNumTimes("abc", -1)', function() {
        assert.equal('', repeatStringNumTimes('abc', -1));
    });
    it('should return "abc" when repeatStringNumTimes("abc", 1)', function() {
        assert.equal('abc', repeatStringNumTimes('abc', 1));
    });
});

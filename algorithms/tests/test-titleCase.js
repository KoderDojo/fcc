var assert = require('assert');
var titleCase = require('../basic/titleCase').titleCase;

describe('titleCase', function() {
    it('should return "I\'m A Little Tea Pot" when the string is "I\'m a little tea pot"', function() {
        assert.equal('I\'m A Little Tea Pot', titleCase('I\'m a little tea pot'));
    });
    it('should return "Short And Stout" when the string is "sHoRt AnD sToUt"', function() {
        assert.equal('Short And Stout', titleCase('sHoRt AnD sToUt'));
    });
    it('should return "Here Is My Handle Here Is My Spout" when the string is "HERE IS MY HANDLE HERE IS MY SPOUT"', function() {
        assert.equal('Here Is My Handle Here Is My Spout', titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'));
    });
});

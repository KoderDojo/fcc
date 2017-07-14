var assert = require('assert');
var findLongestWord = require('../basic/findLongestWord').findLongestWord;

describe('findLongestWord', function() {
    it('should return 6 when str is "The quick brown fox jumped over the lazy dog"', function() {
        assert.equal(6, findLongestWord('The quick brown fox jumped over the lazy dog'));
    });
    it('should return 5 when str is "May the force be with you"', function() {
        assert.equal(5, findLongestWord('May the force be with you'));
    });
    it('should return 0 when str is ""', function() {
        assert.equal(0, findLongestWord(''));
    });
    it('should return 19 when str is "What if we try a super-long word such as otorhinolaryngology"', function() {
        assert.equal(19, findLongestWord('What if we try a super-long word such as otorhinolaryngology'));
    });
});

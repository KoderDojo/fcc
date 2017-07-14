var assert = require('assert');
var palindrome = require('../basic/palindrome').palindrome;

describe('palindrome', function() {
    it('should return true when str is "race car"', function() {
        assert.equal(true, palindrome('race car'));
    });
    it('should return true when str is "never odd or even"', function() {
        assert.equal(true, palindrome('never odd or even'));
    });
    it('should return true when str is "My age is 0, 0 si ega ym."', function() {
        assert.equal(true, palindrome('My age is 0, 0 si ega ym.'));
    });
    it('should return true when str is "0_0 (: /-\ :) 0-0"', function() {
        assert.equal(true, palindrome('0_0 (: /-\ :) 0-0'));
    });
    it('should return false when str is "five|\_/|four"', function() {
        assert.equal(false, palindrome('five|\_/|four'));
    });
});

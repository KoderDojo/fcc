var assert = require('assert');
var reverseString = require('../basic/reverseString').reverseString;

describe('reverseString', function() {
    it('should return "olleh" when the string is "hello"', function() {
        assert.equal('olleh', reverseString('hello'));
    });
});

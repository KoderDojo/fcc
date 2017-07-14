var assert = require('assert');
var confirmEnding = require('../basic/confirmEnding').confirmEnding;

describe('confirmEnding', function() {
    it('should return false when confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")', function() {
        assert.equal(false, confirmEnding('Walking on water and developing software from a specification are easy if both are frozen', 'specification'));
    });
    it('should return true when confirmEnding("He has to give me a new name", "name")', function() {
        assert.equal(true, confirmEnding('He has to give me a new name', 'name'));
    });
    it('should return true when confirmEnding("Open sesame", "same")', function() {
        assert.equal(true, confirmEnding('Open sesame', 'same'));
    });
});

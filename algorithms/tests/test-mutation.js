var assert = require('assert');
var mutation = require('../basic/mutation').mutation;

describe('mutation', function() {
    it('should return false when mutation(["hello", "hey"])', function() {
        assert.equal(false, mutation(["hello", "hey"]));
    });
    it('should return true when mutation(["floor", "for"])', function() {
        assert.equal(true, mutation(["floor", "for"]));
    });
    it('should return false when mutation(["voodoo", "no"])', function() {
        assert.equal(false, mutation(["voodoo", "no"]));
    });
    it('should return false when mutation(["hello", "neo"])', function() {
        assert.equal(false, mutation(["hello", "neo"]));
    });
    it('should return true when mutation(["Mary", "Aarmy"])', function() {
        assert.equal(true, mutation(["Mary", "Aarmy"]));
    });
});

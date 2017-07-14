var assert = require('assert');
var chunkArrayInGroups = require('../basic/chunkArrayInGroups').chunkArrayInGroups;

describe('chunkArrayInGroups', function() {
    it('should return [["a", "b"], ["c", "d"]] when chunkArrayInGroups(["a", "b", "c", "d"], 2)', function() {
        assert.deepEqual(chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]]);
    });
    it('should return [[0, 1, 2], [3, 4, 5]] when chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)', function() {
        assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]]);
    });
    it('should return [[0, 1, 2, 3], [4, 5]] when chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)', function() {
        assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]]);
    });
});

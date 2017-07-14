var assert = require('assert');
var truncateString = require('../basic/truncateString').truncateString;

describe('truncateString', function() {
    it('should return "Peter Piper..." when truncateString("Peter Piper picked a peck of pickled peppers", 14)', function() {
        assert.equal("Peter Piper...", truncateString("Peter Piper picked a peck of pickled peppers", 14));
    });
    it('should return "A-tisket a-tasket A green and yellow basket." when truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)', function() {
        assert.equal("A-tisket a-tasket A green and yellow basket", truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
    });
    it('should return "A..." when truncateString("A-", 1)', function() {
        assert.equal(truncateString("A-", 1), "A...");
    });
    it('should return "Ab..." when truncateString("Absolutely Longer", 2)', function() {
        assert.equal(truncateString("Absolutely Longer", 2), "Ab...");
    });
});

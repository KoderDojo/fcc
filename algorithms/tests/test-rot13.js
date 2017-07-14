var assert = require('assert');
var rot13 = require('../basic/rot13').rot13;

describe('rot13', function() {
    it('should return "FREE CODE CAMP" when rot13("SERR PBQR PNZC")', function() {
        assert.equal(rot13("SERR PBQR PNZC"), 'FREE CODE CAMP');
    });
    it('should return "FREE PIZZA!" when rot13("SERR CVMMN!")', function() {
        assert.equal(rot13("SERR CVMMN!"), 'FREE PIZZA!');
    });
    it('should return "FREE LOVE?" when rot13("SERR YBIR?")', function() {
        assert.equal(rot13("SERR YBIR?"), 'FREE LOVE?');
    });
    it('should return "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX." when rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")', function() {
        assert.equal(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."), 'THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.');
    });
});

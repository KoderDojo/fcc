var assert = require('assert');
var diffArray = require('../intermediate/diffArray').diffArray;

describe('diffArray', function() {
    it('should return ["pink wool"] when diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])', function() {
        assert.deepEqual(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"]);
    });
    it('should return [ "pink wool", "diorite"] when diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])', function() {
        assert.deepEqual(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), [ "pink wool", "diorite"]);
    });
});

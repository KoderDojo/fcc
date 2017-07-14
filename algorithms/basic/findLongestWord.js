exports.findLongestWord = function(str) {
    var words = str.trim().split(' ');
    return words.reduce(function(maxLength, word) {
        return Math.max(maxLength, word.length);
    }, 0);
};

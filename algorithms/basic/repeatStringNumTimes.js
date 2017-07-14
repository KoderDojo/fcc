// Sometimes a for loop is the simplest to understand.
// String concatenation is not fast though.
exports.repeatStringNumTimes = function(str, num) {
    if (num < 1) return '';

    var result = '';
    for(var i=0; i < num; i++) {
        result += str;
    }
    return result;
};

exports.palindrome = function(str) {
    var alphaNumeric = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    if (alphaNumeric.length < 2) return true;

    var alphaNumericReversed = alphaNumeric.split('').reverse().join('');
    return alphaNumeric === alphaNumericReversed;
};

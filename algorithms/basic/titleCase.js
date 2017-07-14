exports.titleCase = function(str) {
    var words = str.trim().toLowerCase().split(' ');
    return words.reduce(function(message, word) {
        var w = word.toLowerCase();
        return message.concat(' ' + w.slice(0,1).toUpperCase() + w.slice(1));
    }, '').trim();
};

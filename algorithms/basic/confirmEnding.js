exports.confirmEnding = function(str, target) {
    return target === str.substr(str.length - target.length);
};

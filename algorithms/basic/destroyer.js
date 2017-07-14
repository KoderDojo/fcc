exports.destroyer = function(arr) {
    var args = [].slice.call(arguments);
    var excludedValues = args.slice(1);
    return arr.filter(function(i) {
        return !excludedValues.includes(i);
    });
};

exports.mutation = function(arr) {
    var first = new Set(arr[0].toLowerCase());
    var second = new Set(arr[1].toLowerCase());

    for (var elem of second) {
        if (!first.has(elem))
            return false;
    }

    return true;
};

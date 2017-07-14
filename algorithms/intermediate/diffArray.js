exports.diffArray = function(arr1, arr2) {
    var intersection = arr1.filter(function(v) {
        return arr2.indexOf(v) !== -1;
    });

    return arr1.concat(arr2).filter(function(v) {
        return intersection.indexOf(v) === -1;
    });
};

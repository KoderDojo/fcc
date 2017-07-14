exports.getIndexToIns = function(arr, num) {
    if (arr.length === 0) return 0;
    arr.sort(function(a, b) {
        if (a < b) return -1;
        return (a > b) ? 1 : 0;
    });

    for(var i=0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }

    return i;
};

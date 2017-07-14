exports.largestOfFour = function(arr) {
    return arr.reduce(function(retArr, current) {
        var maxValue = current.reduce(function(currentMax, val) {
            return Math.max(currentMax, val)
        }, 0);
        return retArr.concat(maxValue);
    },[]);
};

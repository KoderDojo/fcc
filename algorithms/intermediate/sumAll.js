exports.sumAll = function(arr) {
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);

    var total = 0;
    for (var i = min; i <= max; i++) {
        total += i;
    }

    return total;
};

exports.sumAll2 = function(arr) {
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);

    var range = new Array(max-min+1).join().split(',').map(function(item,index) {
        return min + index;
    });

    return range.reduce(function(total, i) {
        return total + i;
    }, 0);
};
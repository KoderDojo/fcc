exports.chunkArrayInGroups = function(arr, size) {
    if (arr.length < size) return arr;
    return arr.reduce(function(newArr, current) {
        var arrElement = newArr[newArr.length - 1];
        if (arrElement.length < size)
            arrElement.push(current);
        else
            newArr.push([current]);
        return newArr;
    },[[]])
};

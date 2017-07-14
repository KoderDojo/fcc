exports.slasher = function(arr, howMany) {
    if (howMany > arr.length) return [];
    return arr.slice(howMany);
};

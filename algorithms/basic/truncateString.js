exports.truncateString = function(str, num) {
    // No truncation necessary.
    if (str.length <= num) return str;

    // Truncate.
    var truncatedStr = str.substr(0, num);

    // Just add ellipses when length <= 3.
    if (truncatedStr.length <= 3) return truncatedStr + "...";

    // Remove last 3 characters and add ellipses.
    return truncatedStr.substr(0, truncatedStr.length - 3) + "...";
};

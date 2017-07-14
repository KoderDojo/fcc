exports.rot13 = function(str) {
    return str.split('').map(function(l) {
        var charCode = l.charCodeAt(0);
        if (charCode < 65 || charCode > 90) return l;
        return String.fromCharCode(((charCode-65+13)%26)+65);
    }).join('');
};

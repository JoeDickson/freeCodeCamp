const show = x => console.log(x);

/* ======================================================= */

function destroyer(arr) {
    // Remove all the values

    var args = [];

    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }
    var argArr1 = arguments[0];
    var argArr2 = args.slice(1);
    return argArr1.filter(function(x) {
        return argArr2.indexOf(x) < 0;
    });

}

show(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
//should return [1, 1].
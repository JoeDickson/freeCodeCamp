const show = x => console.log(x);

/* ======================================================= */

function destroyer(arr) {
    // Remove all the values
    show(arguments);
    show(arr);

    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
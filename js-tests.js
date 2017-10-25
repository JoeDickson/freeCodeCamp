const show = x => console.log(x);

/* ======================================================= */


function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(Boolean);
}

show(bouncer([1, null, NaN, 2, undefined]));
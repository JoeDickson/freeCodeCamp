const show = x => console.log(x);

/* ======================================================= */

function mutation(arr) {

    targetStr = arr[0].toLowerCase();
    srchStr = arr[1].toLowerCase();
    boolFound = true;
    show(targetStr);
    show(srchStr);

    for (i = 0; i <= srchStr.length - 1; i++) {
        show(srchStr[i]);
        if (targetStr.indexOf(srchStr[i]) < 0)
            boolFound = false;
    }
    return boolFound;
}

show(mutation(["hello", "hey"]));
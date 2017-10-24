const show = x => console.log(x);

/* ======================================================= */


function chunkArrayInGroups(arr, size) {
    // Break it up.
    var retArr = [];
    var slicedArr = [];

    var res = [];
    while (arr.length) {
        retArr.push(arr.splice(0, size));
    }

    return retArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
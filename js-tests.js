const show = x => console.log(x);

/* ======================================================= */

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.

    sortedArr = arr.sort(function compareNumbers(a, b) {
        return a - b;
    });

    for (i = 0; i <= sortedArr.length; i++) {
        if (num == sortedArr[i])
            return i;
        else
        if (num >= sortedArr[i] && num <= sortedArr[i + 1])
            return i + 1;
    }
    return i - 1;
}

show(getIndexToIns([3, 10, 5], 3));
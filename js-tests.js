const show = x => console.log(x);

/* ======================================================= */


function largestOfFour(arr) {
    // You can do this!
    var newArr = [];
    for (i = 0; i <= arr.length - 1; i++) {
        tempArr = arr[i];
        tempArr.sort((function(a, b) { return b - a }));
        newArr.push(parseInt(tempArr[0]));
    }
    show(newArr);
    return newArr;
}

largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
])

//should return [9, 35, 97, 1000000]
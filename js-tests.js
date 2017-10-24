const show = x => console.log(x);

/* ======================================================= */

function slasher(arr, howMany) {
    // it doesn't always pay to be first
    newArr = arr.splice(howMany);
    return newArr;
}

slasher(["burgers", "fries", "shake"], 1);
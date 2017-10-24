const show = x => console.log(x);

/* ======================================================= */

function repeatStringNumTimes(str, num) {
    // repeat after me
    newStr = "";
    if (num <= 0)
        return "";
    for (i = 1; i <= num; i++) {
        newStr += str;
    }
    return newStr;
}

repeatStringNumTimes("*", 8);
const show = x => console.log(x);

/* ======================================================= */

function titleCase(str) {
    str = str.toLowerCase();
    strArr = str.split(" ");
    for (i = 0; i <= strArr.length - 1; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    str = strArr.join(" ");
    return str;
}

titleCase("sHoRt AnD sToUt");
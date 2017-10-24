const show = x => console.log(x);

/* ======================================================= */

function titleCase(str) {

    strArr = str.split(" ");
    for (i = 0; i <= strArr.length - 1; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
        show(strArr[i]);
    }


    return str;
}

titleCase("I'm a little tea pot");
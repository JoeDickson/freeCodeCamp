const show = x => console.log(x);

/* ======================================================= */

function palindrome(str) {
    // Good luck!
    var cleanStr = "";
    var strArr = [];
    cleanStr = str.replace(/\W+/g, '');
    cleanStr = cleanStr.replace(/_/g, '');
    lowerCaseStr = cleanStr.toLowerCase();
    origStr = lowerCaseStr;
    strArr = lowerCaseStr.split("").reverse();
    strRev = strArr.join("");

    show(strRev);
    if (strRev == origStr)
        return true;
    else
        return false;
}



show(palindrome("My age is 0, 0 si ega ym."));
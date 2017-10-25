const show = x => console.log(x);
/* ======================================================= */

function rot13(str) { // LBH QVQ VG!
    var decodedStr = "";
    var strArr = str.split(" ");
    var checkLetters = /^[0-9a-zA-Z]+$/;
    for (var i = 0; i <= strArr.length - 1; i++) {
        for (var j = 0; j <= strArr[i].length - 1; j++) {

            if (strArr[i][j].match(checkLetters)) {
                letter = strArr[i][j].charCodeAt(0);
                if (letter >= 97 && letter <= 22)

                    letter = String.fromCharCode((letter - 97 + 13) % 26 + 97);
                else if (letter >= 65 && letter <= 90)
                    letter = String.fromCharCode((letter - 65 + 13) % 26 + 65);
                decodedStr += letter;
                return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));

            } else
                decodedStr += strArr[i][j];
        }
        decodedStr += " ";
    }
    return decodedStr;
}

// Change the inputs below to test
show(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
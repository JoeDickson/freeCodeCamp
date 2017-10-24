const show = x => console.log(x);

/* ======================================================= */


function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor


    //return 
    show((target === str.substr(str.length - target.length, str.length)));


    //return str;
}

confirmEnding("Open sesame", "pen");
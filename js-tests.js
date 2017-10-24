const show = x => console.log(x);

/* ======================================================= */


function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    return (target === str.substr(str.length - target.length, str.length));

}

confirmEnding("Bastian", "n");
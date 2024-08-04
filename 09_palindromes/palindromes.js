const palindromes = function (word) {
    const clearWord = word.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let j=clearWord.length-1;
    for (let i=0; i<word.length; i++){
        if (clearWord.charAt(i)!==clearWord.charAt(j)){
            return false;
        }
        j--;
    }
    return true;
}


// Do not edit below this line
module.exports = palindromes;

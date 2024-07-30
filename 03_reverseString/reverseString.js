const reverseString = function(stringToReverse) {
    let ReversedString = '';
    for (let i=stringToReverse.length-1; i>=0; i--){
        ReversedString += stringToReverse[i];
    }
    return ReversedString;
};

// Do not edit below this line
module.exports = reverseString;

let stringToRepeat;
let numberOfTimes;

const repeatString = function(stringToRepeat, numberOfTimes) {
    let totalString = '';
    if (numberOfTimes < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < numberOfTimes; i++) {
        totalString += stringToRepeat;
    }
    return totalString;  
} 

// Do not edit below this line
module.exports = repeatString;

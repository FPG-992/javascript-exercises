const sumAll = function(firstNumber,secondNumber) {
let totalSum = 0;
if (firstNumber < 0 || secondNumber < 0 || typeof firstNumber !== 'number' || typeof secondNumber !== 'number' 
    || !Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)
) {
    return 'ERROR';
}
for (let i = Math.min(firstNumber,secondNumber); i <= Math.max(firstNumber,secondNumber); i++) {
    totalSum += i;
};
return totalSum;
}
// Do not edit below this line
module.exports = sumAll;

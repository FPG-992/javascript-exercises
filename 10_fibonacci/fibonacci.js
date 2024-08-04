const fibonacci = function(number) {
    Number(number); //converts string to number
    if (number < 0) {
        return "OOPS";
    }

    let fib = [0,1];

    for (let i=2; i<=number; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[number];
}
// Do not edit below this line
module.exports = fibonacci;

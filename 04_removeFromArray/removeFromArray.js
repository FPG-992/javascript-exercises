const removeFromArray = function(Array,...args) {
    return Array.filter((item) => !args.includes(item));   //arrow function, it creates a new array with all the elements
    // that pass the test implemented by the provided function. item is each element of the array and args is the array of values to remove
    //if item is not in args, it will be included in the new array
};

// Do not edit below this line
module.exports = removeFromArray;

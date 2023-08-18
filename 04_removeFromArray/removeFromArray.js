const removeFromArray = function(array, removeValue) {
    const previousSecondElementOfTheArray = array.splice(removeValue, 1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

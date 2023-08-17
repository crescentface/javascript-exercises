const removeFromArray = function(array, remove) {
    remove = 1;
    which = 3;
    const removeFrom = array.splice(which, remove);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

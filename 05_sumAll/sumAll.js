const sumAll = function(lowerLimit, upperLimit) {
    let finalSum = 0;   
    if (lowerLimit || upperLimit != parseInt) {
        return "ERROR"; 
    } else 
    if (lowerLimit < 0 || upperLimit < 0) {
        return "ERROR";
    } else                                           {
    for (let i = lowerLimit; i <= upperLimit; i++) { 
        finalSum += i;
    }
}
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;


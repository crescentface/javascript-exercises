const sumAll = function(lowerLimit, upperLimit) {
    let finalSum = 0;   
    if (!Number.isInteger(lowerLimit) || !Number.isInteger(upperLimit)) return "ERROR"; 
    if (lowerLimit < 0 || upperLimit < 0) return "ERROR";
    if (lowerLimit > upperLimit) {
       for (let i = upperLimit; i <= lowerLimit; i++) {
       finalSum += i;
       } 
       } else {                                        
         for (let i = lowerLimit; i <= upperLimit; i++) { 
         finalSum += i;
       }
    }
    return finalSum;
}
    


// Do not edit below this line
module.exports = sumAll;


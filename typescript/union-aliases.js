"use strict";
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 == 'number' && typeof input2 == 'number' || resultConversion === 'as-number') {
        var result_1 = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine('Max', 'Anna', 'as-text');
console.log(combinedAges);

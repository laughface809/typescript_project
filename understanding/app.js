function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2; //harus ditambah '+' didepan variable karna kondisinya ada ||
    }
    else {
        result = input1.toLocaleString() + input2.toLocaleString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);
var combinedNames = combine('laughface', '809', 'as-text');
console.log(combinedNames);

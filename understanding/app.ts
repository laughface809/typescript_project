function combine(
    input1: number | string, 
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
){
    let result;
    if(typeof input1 === 'number' && typeof input2 === "number" || resultConversion === "as-number"){
        result = +input1 + +input2; //harus ditambah '+' didepan variable karna kondisinya ada ||
    }
    else{
        result = input1.toLocaleString() + input2.toLocaleString();
    }
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges)

const combinedNames = combine('laughface', '809', 'as-text');
console.log(combinedNames)
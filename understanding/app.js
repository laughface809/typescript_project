function add(n1, n2, result, phrase) {
    // if(typeof n1 !== "number" || typeof n2 !== "number"){
    //     throw new Error('Incorrect input!');
    // }
    var numberProcessing = n1 + n2;
    if (result) {
        console.log(phrase + numberProcessing);
    }
    else {
        return numberProcessing;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);

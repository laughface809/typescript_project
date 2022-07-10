let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Lauhgface';
if(typeof userInput === 'string'){
    userName = userInput
}

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An Error occured!', 500)
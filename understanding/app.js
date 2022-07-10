var userInput;
var userName;
userInput = 5;
userInput = 'Lauhgface';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error occured!', 500);

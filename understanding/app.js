function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(8, 8, function (result) {
    console.log(result);
});
//trying using callback function

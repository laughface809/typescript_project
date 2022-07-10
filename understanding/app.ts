function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2
    cb(result)
}

addAndHandle(8, 8, (result) => {
    console.log(result)
})

//trying using callback function
async function getData() {
    return "test value"
}

// Using Promise way to handling async functions
function handlerFun1() {
    const resPromise = getData()
    resPromise.then(res => console.log(res))
}

handlerFun1()

// Using await way of handling async functions

async function handlerFun2() {
    const resData = await getData()
    console.log(resData)
}

handlerFun2()

// Output:
// test value
// test value
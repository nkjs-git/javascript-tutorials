
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("operation done")
    }, 2000)
})

function callOperationFun1() {
    p.then((res) => console.log(res)) // Here program execution will not wwait till the promise is returned/resolved
    console.log("---- callOperationFun Ended-1 ----")
}

callOperationFun1()

async function callOperationFun2() {
    const data = await p;
    console.log(data)
    console.log("---- callOperationFun Ended-2 ----")
}

callOperationFun2()
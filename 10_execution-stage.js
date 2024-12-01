
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("operation done")
    }, 10000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("operation done")
    }, 5000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("operation done")
    }, 10000)
})

async function callOperationFun1() {

    console.log("--- Staring operation ---")

    const data1 = await p1; // Completed after 10 Sec from starting script
    console.log(data1)
    console.log("---- callOperationFun Ended-p1 ----")

    const data2 = await p2; // Completed after 10 Sec from starting script
    console.log(data2)
    console.log("---- callOperationFun Ended-p2 ----")
}

callOperationFun1()

async function callOperationFun2() {

    console.log("--- Staring operation ---")

    const data1 = await p2; // Completed after 5 Sec from starting script
    console.log(data1)
    console.log("---- callOperationFun Ended-p1 ----")

    const data2 = await p3; // Completed after 10 Sec from starting script
    console.log(data2)
    console.log("---- callOperationFun Ended-p2 ----")
}

callOperationFun2()
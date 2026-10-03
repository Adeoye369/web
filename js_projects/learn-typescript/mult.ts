export function multiply(num1: number, num2: number){
    const promise = new Promise<String>((reject, resolve)=>{
        setTimeout(()=>{
            resolve("DONE-CALCULATING...")
        }, 3000)
        console.log("waiting..")
    })

    promise.then((result)=>{
        console.log(result.split("-"))
    })
    .catch((err)=>{
        console.log(err)
    })

    return (num1 * num2)
}
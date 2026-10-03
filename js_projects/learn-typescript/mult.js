export function multiply(num1, num2) {
    const promise = new Promise((reject, resolve) => {
        setTimeout(() => {
            resolve("DONE-CALCULATING...");
        }, 3000);
        console.log("waiting..");
    });
    promise.then((result) => {
        console.log(result.split("-"));
    })
        .catch((err) => {
        console.log(err);
    });
    return (num1 * num2);
}

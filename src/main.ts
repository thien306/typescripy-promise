let money = 10000;
const buyACar = (car: any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("có thể mua " + car);
            } else {
                reject("Không đủ tiền");
            }
        }, 100);
    }))
}

money = 1000001;
const promise = buyACar("xe vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})
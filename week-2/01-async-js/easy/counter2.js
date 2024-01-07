// write counter using setTimeout

let count = 0;

const promisifiedSetTimeout = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000*seconds);
    })
}

const counter = async () => {
    for(let i=0; ; i++) {
        console.log(count);
        await promisifiedSetTimeout(1);
        count++;
    }
}

const main = async () => {
    await counter();
}

main();
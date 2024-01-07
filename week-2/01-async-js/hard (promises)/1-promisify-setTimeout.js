/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const wait = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000*seconds);
    })
}

module.exports = wait;

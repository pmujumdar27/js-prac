// write a counter using setInterval

let count = 0;

const counter = setInterval(() => {
    console.log(count);
    count++;
}, 1000);

counter
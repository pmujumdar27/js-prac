/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const start = new Date().getTime();

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    const time_taken = new Date().getTime() - start;

    return time_taken;
}

/*
On my pc wsl2
Time taken for 1 is 0ms
Time taken for 10 is 0ms
Time taken for 100 is 0ms
Time taken for 1000 is 0ms
Time taken for 10000 is 0ms
Time taken for 100000 is 1ms
Time taken for 1000000 is 2ms
Time taken for 10000000 is 5ms
Time taken for 100000000 is 45ms
Time taken for 1000000000 is 442ms
Time taken for 10000000000 is 4476ms
*/
for (let i = 0; i < 11; i++) {
    const target = Math.pow(10, i);

    console.log(`Time taken for ${target} is ${calculateTime(target)}ms`);
}
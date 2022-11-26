let n = 5;
let prime = 0;
let count = 0;
let scount = 0;
let nextPrime;
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        prime++;
    }
}
if (prime === 2) {
    console.log("Given no is prime");
    for (let i = 1; i <= n + 4; i++) {
        if ((n - 2) % i === 0) {
           // console.log("Difference of x and after x=" + (nextPrime - n));
            count++;
        }
        if ((n + 4) % i === 0) {
            scount++;
        }
    }
}
else {
    console.log("No is not prime");
}
if (count === 2) {
    nextPrime = n + 2;
}
else if (scount === 2) {
    nextPrime = n + 4;
}
//console.log("Difference of x and after x=" + (nextPrime - n));
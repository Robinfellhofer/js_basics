const limit = 100;
const div1 = 3;
const div2 = 5;
let fizzcount = 0;
let buzzcount = 0;
let fizzbuzzcount = 0;
let numbercount = 0;


for (let i = 1; i < limit + 1; i++) {
    if (i % div1 == 0 && i % div2 == 0) {
        console.log('Fizzbuzz');
        fizzbuzzcount++;
    }
    else if (i % div1 == 0) {
        console.log('Fizz');
        fizzcount++;
    } 
    else if (i % div2 == 0) {
        console.log('Buzz');
        buzzcount++;
    }
    else {
        console.log(i);
        numbercount++;
    }
}

console.log(`Fizzcount: ${fizzcount}, Buzzcount: ${buzzcount}, Fizzbuzzcount: ${fizzbuzzcount}, Numbercount ${numbercount}`);
import * as readline from "node:readline/promises";

const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num = Math.floor(Math.random() * 100) + 1;
let trys = 0;

while (true) {
    let geraten = Number(await prompt.question("Zahl: "));
    trys++;

    if (geraten < num) {
        console.log("größer");
    }
    else if (geraten > num) {
        console.log("kleiner");
    }
    else {
        console.log("Richtig");
        console.log(`Du hast ${trys} Versuche gebraucht.`);
        break;
    }
}

prompt.close();
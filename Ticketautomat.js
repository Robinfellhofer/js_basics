const age = 3;
let stu = false;

if (age >= 0 ) {
    if (age < 6) {
        // 0 - 5
        console.log(`Alter:${age}, Preis: 0€`)
    }
    else if (age < 16) {
        // 6 - 15
        console.log(`Alter:${age}, Preis: 8€`)
    }
    else if (age < 18) {
        // 16 - 17
        console.log(`Alter:${age}, Preis: 12€`)
    }
    else if (age >= 18 && stu){
        // 18+ und studiert
        console.log(`Alter:${age}, Preis: 12€`)
    }
    else {
        // 18+
        console.log(`Alter:${age}, Preis: 16€`)
    }
}
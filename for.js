// print all number b/w -10 and 19

var a = -10;
for (var a = -10; a <= 19; a++) {
    console.log(a)
}

// print all even numbers b/w 10 and 40

for (var a = 10; a <= 40; a++) {
    if (a % 2 === 0) {
        console.log(a);
    }
}

// print all odd no b/w 300 and 333

for (var a = 300; a <= 333; a++) {
    if (a % 2 !== 0) {
        console.log(a)
    }
}

// print all no. divisible by 5 and 3 b/w 5 and 40

for (var a = 5; a <= 40; a++) {
    if (a % 5 === 0 && a % 3 === 0) {
        console.log(a)
    }
}
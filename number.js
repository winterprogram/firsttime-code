// print all num b/w -10 and 19 
var num = -10;
while (num < 19) {
    console.log(num);
    num++
}

// print all even numbers b/w 10 and 40 
var num = 10;
while (num <= 40) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

// print all odd number b/w 300 and 333

var num = 300;
while (num <= 333) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++;
}

// print all numbers divisible by 5 and 3 between 5 and 50

var num = 5;

while (num <= 50) {
    if (num % 5 === 0 && num % 3 === 0){
        console.log(num);
    }
    num++;
}
// write function for even number 

function isEven(num) {
    if (num % 2 === 0) {
        return (num);
    }
    else {
        console.log(+ num + " is not even")
    }
}

// write a function to write a factorail

function factorail(num) {
    var result = num;

    for (var i = num - 1; i >= 1; i--) {
        result *= i;
    }
    return result;
}

// replace - to _

function kebab(u) {

    var res = u.replace(/-/g, "_");

    return res;
}
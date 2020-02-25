// factorail 
// decleared function using arrow function 
let factorail = (x = 4) => {  // default parameters
    for (let i = x - 1; i >= 1; i--) {
        x *= i;
    }
    return x;
}

let fact = factorail();
console.log(fact)
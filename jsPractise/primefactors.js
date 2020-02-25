//The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

let factors = (x) => {
    let a;
    let c = [];
    let d;
    let p = [];
    let z;
    //finding factorial
    for (let i = 0; i < x; i++) {
        if (x % i === 0) {
            a = i;
            d = c.push(a)
            console.log(d)
        }
    }
    //finding prime factorial
    let lengthOfNum = x.toString().length;
    for (let i = 1; i < c.length; i++) {
        if (c[i] % i === 0) {

           // return false;
        } else {
            z = p.push(c[i]);
            return z;
        }
    }

    return c;
}


let arr = console.log(factors(13195))


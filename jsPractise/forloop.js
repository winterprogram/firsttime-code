// find largest prime no 

let prime = (num) => {
    // let a;
    let b = [];
    let l = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            a = i;
            b.push(a)
        }

    }
    b.sort(function (c, d) { return d - c })

    console.log(b)
    let casea = [];
    let caseb = [];
    let casec = [];
    //  findinf higest prime factor
    //removing even factors
    for (let x = 1; x < b.length; x++) {
        // console.log(b)
        if ((b[x] !== 2 && b[x] % 2 !== 0)) {
            casea.push(b[x])
        } if (b[x] === 2) {
            casea.push(2)
        };



    }
    // removing factors divisible by 3
    for (let y = 1; y < casea.length; y++) {
        if ((casea[y] !== 3 && casea[y] % 3 !== 0)) {
            caseb.push(casea[y])
        } if (casea[y] === 3) {
            caseb.push(3)
        };
    }
    for (let z = 1; z < caseb.length; z++) {
        if ((caseb[z] !== 5 && caseb[z] % 5 !== 0)) {
            casec.push(caseb[z])
        } if (caseb[z] === 5) {
            casec.push(5)
        };
    }


    let ff = [];
    for (let f = 1; f < casec.length; f++) {
        if ((casec[f] !== 11 && casec[f] % 11 !== 0)) {
            ff.push(casec[f])
        } if (casec[f] === 11) {
            ff.push(11)
        };
    }


    console.log(ff)

    // return l.push(b[j]);
}



let hh = console.log(prime(13195))
// // rest parameter in js 

// let address = (userId, ...add) => { // adding ... to handel multiple inputs (REST Parameters)
//     console.log(userId);
//     console.log(add)
// }

// let b = {
//     "city": "mumbai",
//     "state": "Maharastra"
// }

// let c = {
//     "city": "ghatkopar",
//     "state": "Maharastra"
// }

// let a = address("ss", b, c) //add more than expected input

let convertTemplate = (...input) => {
    // start your code here.
    //    console.log(input)
   let a= input.join('');
return a;
   }

// console.log(convertTemplate('aa', 3,"kk"))


let multiplyMagic = (a = 1, b = 1) => {
    // start your code here.
let mul;
 
   if (a > 0 && b > 0) {
       return a * b;
    }
    else {
        return 1;
    }
    
};

let r = console.log(multiplyMagic(2, 3))
// write a code to identify if the student is topper or not. 
let Student = [
    {
        "per": 87,
        "StudentName": "Silvester"
    },
    {
        "per": 91,
        "StudentName": "Sandeep"
    },
    {
        "per": 71,
        "StudentName": "vinni"
    },
    {
        "per": 90,
        "StudentName": "omkar"
    }
]
//using simple for loop
// let topper = (marks) => {
//     let a = Student[0].per;
//     let b = "your percentage is ";
//     let e = "Congrat";
//     let d;
//     for (let i = 0; i < Student.length; i++) {
//         if (Student[i].per >= a) {
//             a = Student[i].per
//             d = Student[i].StudentName;
//         } else {
//             // let b = "Not a topper";
//         }
//     }
//     let name = `${e} ${d}`
//     let c = `${b}${a}`;
//     let final = `${name} and ${c}% `
//     return final;
// }

//using for in loop
let topper = (marks) => {
    let a = 90;
    let b = "your percentage is ";
    let e = "Congrat";
    let d;
    for (i in Student) {
        if (Student[i].per >= a) {
            a = Student[i].per
            d = Student[i].StudentName;
            // break;
        } else {
        }
    }
    let name = `${e} ${d}`
    let c = `${b}${a}`;
    let final = `${name} and ${c}% `
    return final;
}


console.log(topper(Student))
// write a program based on the grade that you have got.
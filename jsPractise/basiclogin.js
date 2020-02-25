var userData = [{
    email: "aditya@edwisor.com",
    name: "Aditya",
    password: "edwisor123"
},
{
    email: "sandeep@edwisor.com",
    name: "Sandeep",
    password: "examidea"
},
{
    email: "rushi@edwisor.com",
    name: "Rushi",
    password: "convonix"
}
];

// var validUser = (email, password, userData) => {
//     for (let i = 0; i < userData.length; i++) {
//         if (email === userData[i].email && password === userData[i].password) {
//             console.log("correct user email id and password");
//             console.log("login is successful");
//             break;
//         } else {
//             //break can't be in else statement
//             console.log("wrong email id or password");
//             console.log("user doesn't exist");
//         }
//     }
// }

// by using for in loop

let validUser = (email,password,userData)=>{
    for( i in userData){
        if (email === userData[i].email && password === userData[i].password) {
            console.log("correct user email id and password");
            console.log("login is successful");
            break;
        } else {
            //break can't be in else statement
            console.log("wrong email id or password");
            console.log("user doesn't exist");
        }  
    }
}
// test for of loop
// for(userd of userData){
//     console.log(userd)
// }
validUser("sandeep@edwisor.com", "examidea", userData)


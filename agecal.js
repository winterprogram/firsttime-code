//write a function to find days that you lived

let days = (byear, tyear) => {
    //define leap year and normal year
    let leapY = 366;
    let normalY = 365;
    //defining variables/array
    let a;
    let b = [];
    let c;
    let d;
    let e = [];

    //to find no of leap years between byear and tyear
    for (let i = byear; i <tyear; i++) {
        if (i % 4 === 0 || i % 400 === 0) {
            a = i;
            b.push(a);
            c = b.length;
        }
        else if (i % 4 !== 0 || i % 400 !== 0 || i % 100 === 0) {
            d = i;
            e.push(d);
            f = e.length;
        }
    }
    console.log(c);
    console.log(f);

   // find no. of days
     let nodays = (c * leapY) + (f * normalY);

     return nodays;
}

let gg = console.log(days(1996, 2020))
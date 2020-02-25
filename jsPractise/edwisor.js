//if the candidate is getting more than "x" score in learning stage on edwisor.com move him to project stage, else ask him to earn more score. if he has "Y" 
//score in project stage, move him to hiring stage 

let edwisor = (stage = 8, hr = 81) => {
    let minP = 80;
    let a;
    let d;
    let name;
    if (stage >= minP) {

        a = `You are eligible for project stage.`

    } else {
        a = `You are not eligible for project stage, please earn more marks.`
    }
    if (hr >= minP) {
        d = 'Congrats you are eligible to hiring stage'
    }
    else {
        d = `You are not elegible for hiring!!`
    }

    return [a, d];
}

let gg = console.log(edwisor())
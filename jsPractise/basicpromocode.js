//if the person has purchased more than 3 items in a month on our website, let's give them a coupon code

let promo = (purchasetimes = 1, ...month) => {
    let a = "Give promo code";
    let b = "Not eligible for promo code";
    let s = 0;
    for (i in month) {
        s += month[i]
    }
    console.log(s)
    if (purchasetimes >= 3 && s <= 1) {
        return a;
    } else {
        return b;
    }
}

let gg = console.log(promo(3, 1, 0));
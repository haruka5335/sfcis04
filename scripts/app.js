

function div(warareru, waru){
let result;
result = warareru / waru;
return result;
}

function toMile(km){
    let result;
    result = div(km, 1.6);
    return result;
}

function nand(a,b){
    let c = a && b;
    return !c;
}

function nor(a,b){
    let c = a || b;
    return !c;
}


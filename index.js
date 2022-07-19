// Code your solution in this file!
function distanceFromHqInBlocks(a) {
    if (a > 42){
        return a - 42;
    } else {
        return 42 - a;
    }
}

function distanceFromHqInFeet(b) {
    return distanceFromHqInBlocks(b) * 264;
}

function distanceTravelledInFeet(c, d) {
    return distanceFromHqInFeet(d) - distanceFromHqInFeet(c);
}

function calculatesFarePrice(c, d) {
    if (distanceTravelledInFeet(c, d) <= 400) {
        return 0
    } else if (distanceTravelledInFeet(c, d) > 400
    && distanceTravelledInFeet(c, d) <= 2000) {
        return (distanceTravelledInFeet(c, d) - 400) * .02

    } else if (distanceTravelledInFeet(c, d) > 2000 
    && distanceTravelledInFeet(c, d) < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}


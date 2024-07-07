function speedChecker (speed){
    const speedLimit = 70;
    let demerit;
    if (speed>speedLimit){
        const excessSpeed = speed-speedLimit;
        demerit = Math.floor(excessSpeed / 5)
    }
    if (demerit === 0){
        console.log ("Ok");
    } else if (demerit > 12){
        console.log ("License suspended")
    } else {
        console.log (`Points: ${demerit}`)
    }
}

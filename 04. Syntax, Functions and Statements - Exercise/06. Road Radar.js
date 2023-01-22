function roadRadar(arg1, arg2) {
    let speed = Number(arg1);
    let areaSpeedLimit = arg2;

    let difference;
    let status;
    let speedLimit;
    switch (areaSpeedLimit) {
        case 'motorway': 
            difference = speed - 130;
            speedLimit = 130;
            break;
        case 'interstate': 
            difference = speed - 90;
            speedLimit = 90;
            break;
        case 'city': difference = speed - 50;
            speedLimit = 50;
            break;
        case 'residential': difference = speed - 20;
            speedLimit = 20;
            break;
    }
    
    if (difference <= 20) {
        status = 'speeding';
    } else if (difference <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }
    let result = speed - difference;
    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if (difference < speed) {
        //let result = speed - difference;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${result} - ${status}`);
    }
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');

// https://pastebin.com/Qcnj4k3M
// https://pastebin.com/GaLNhHxs

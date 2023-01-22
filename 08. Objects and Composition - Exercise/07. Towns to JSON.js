function townsToJSON(input) {
    let data = input.slice(1);
    let output = [];
 
 
    for (let line of data) {
        let headers = line.split('|').filter(n => n);
        const object = {
            Town: headers[0].trim(),
            Latitude: Number(Number(headers[1]).toFixed(2)),
            Longitude: Number(Number(headers[2]).toFixed(2)),
        }
        output.push(object)
    }
    console.log(JSON.stringify(output));
}
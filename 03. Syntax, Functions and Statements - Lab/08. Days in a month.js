function daysInMonth(month, year){
    //let daysInMonth = Date(month,year,0);
    let daysInMonth = new Date(year, month, 0).getDate();
    console.log(daysInMonth);
}
daysInMonth(1, 2012);
function previousDay(year, month, day) {
    let curDate = new Date(year, month - 1, day - 1);
    //let pattern = `${year}-${month}-${day}`
    
    //curDate.setDate(curDate.getDate() - 1);
    console.log(`${curDate.getFullYear()}-${curDate.getMonth() + 1}-${curDate.getDate()}`);
    // ВНИМАВАЙ С МЕСЕЦИТЕ ПРИ И ДНИТЕ ПРИ ПРИНТИРАНЕ СЛЕД КАТО ВАДИШ ПРЕДИ ДА ПРИНТИРАШ !!!!!
}
previousDay(2016, 9, 30);
previousDay(2015, 5, 10);

//console.log(curDate.getFullYear()); //2023
//console.log(curDate.getMonth()+1); //връща месец в JS месеците започват от 0 тоест Януари е 0
//console.log(curDate.getDay()); // връща деня от седмица JS Use (неделя е 1 ден от седмицата) Европа( 1 ден е понеделник) 
//console.log(curDate.getDate()); //Дата от месеца започва си от 1 дата
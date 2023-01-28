function generateReport() {
    const output = document.querySelector('#output');
    const results = [];
    const checks = Array.from(document.querySelectorAll('thead tr th input')); // хващаме всички инпути
    const tr = Array.from(document.querySelectorAll('tbody tr')); // хващаме всички TR вътре в Бодито
    //debugger
    tr.forEach(el => { // завъртаме по всички TR-ta за да обходим вътре TD - tata
        const current = {}; //Създаваме нов обект
        Array.from(el.querySelectorAll('td')).forEach((td, i) => { // завъртаме по всички ROWs вътре в TR-тата
            if(checks[i].checked){//проверяваме дали елемента на който се намираме е чекнат ако да...
                current[checks[i].name] = td.textContent; // td.textContent са имената на TD-tata от колоната
                //current[checks[i].name] - Името на чекнатият чекбокс на който се намираме в момента при обхождането
            }
        })
        results.push(current); //добавяме текуят на който се намираме в резултата
    });
    output.value = JSON.stringify(results);
}
function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let total = 0;

    for (let index = 1; index < rows.length; index++) {
        let cols = rows[index].children;
        let cost = cols[cols.length -1].textContent;
        total += Number(cost);
    }
    document.getElementById("sum").textContent = total;
}
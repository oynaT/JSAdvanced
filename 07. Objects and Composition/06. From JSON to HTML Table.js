function jsonToHtmlable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];

    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let keyRow = '';
        let keyNames = Object.keys(arr[0]);
        keyRow += ("  <tr>");
        for (let key of keyNames) {
            keyRow += `<th>${escapeHtml(key)}</th>`;
        }
        keyRow += "</tr>";
        return keyRow;
    };

    function makeValueRow(object) {
        let valueRow = '';
        let values = Object.values(object);

        valueRow += "  <tr>";
        for (let value of values) {
            valueRow += `<td>${escapeHtml(value)}</td>`;
        }
        valueRow += "</tr>";
        return valueRow;
    };
    function escapeHtml(value) {
        return value.toString().replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    };

    console.log(outputArr.join('\n'));
}

jsonToHtmlable(`
[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);
jsonToHtmlable(`
[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);
/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let table = document.createElement("table");

    for (let i=0; i<10; i++){
        let row = table.insertRow(i);
        for (let j=0; j<10; j++){
            let cell = row.insertCell(j);
            cell.innerHTML = Number(i+1) * Number(j+1); // +1 becouse of index
        }

    }

    let target = document.getElementById("target");
    target.appendChild(table);

})();

/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var value1
    var value2 
    var result

    // to get the value of an input: document.getElementById("element-id").value
    
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        value1 = document.getElementById("op-one").value;
        value2 = document.getElementById("op-two").value;
        result = Number(value1) + Number(value2)
        alert(result)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        value1 = document.getElementById("op-one").value;
        value2 = document.getElementById("op-two").value;
        result = Number(value1) - Number(value2)
        alert(result)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        value1 = document.getElementById("op-one").value;
        value2 = document.getElementById("op-two").value;
        result = Number(value1) * Number(value2)
        alert(result)
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        value1 = document.getElementById("op-one").value;
        value2 = document.getElementById("op-two").value;
        result = Number(value1) / Number(value2)
        alert(result)
    });
})();





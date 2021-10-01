/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    var value1 = document.getElementById("op-one");
    var value2 = document.getElementById("op-two");

    //var result

    var performOperation = function(operation)  {
        // perform the operation
        switch (operation) {
            case 'addition':
                result = parseInt(value1.value) + parseInt(value2.value);
                alert (result);
                console.log(result);
                break;

            case 'substraction':
                result = parseInt(value1.value) - parseInt(value2.value);
                alert (result);
                console.log(result);
                break;

            case 'multiplication':
                result = parseInt(value1.value) * parseInt(value2.value);
                alert (result);
                 console.log(result);
                break;

            case 'division':
                result = parseInt(value1.value) / parseInt(value2.value);
                alert (result);
                console.log(result);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();

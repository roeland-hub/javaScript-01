/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        let squareNumber = function(number) {
            return number > 0 && Math.sqrt(number) % 1 === 0;
        };

        for (i = 1; i <= 21; i++) {
            if(squareNumber(i)=== true){
                console.log(i);
            }
        }

    });

})();

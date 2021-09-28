/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('red').onclick = changeColorRed;
    document.getElementById('green').onclick = changeColorGreen;
    document.getElementById('yellow').onclick = changeColoryellow;
    document.getElementById('blue').onclick = changeColorBlue;

    function changeColorRed() {
        document.body.style.background = 'red';
    }
    function changeColorGreen() {
        document.body.style.background = 'green';
    }
    function changeColoryellow() {
        document.body.style.background = 'yellow';
    }
    function changeColorBlue() {
        document.body.style.background = 'blue';
    }


})();

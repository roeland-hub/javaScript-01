/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const button = document.getElementById('run');

    var userinputDay = document.getElementById("dob-day");
    var userinputMonth = document.getElementById("dob-month");
    var userinputYear = document.getElementById("dob-year");
    
    const date = new Date();
    const currentDate = [ date.getDate(), date.getMonth(), date.getFullYear()];

    button.addEventListener( 'click', function(){
        const birthday = [ parseInt(userinputDay.value), parseInt(userinputMonth.value), parseInt(userinputYear.value)];

        let age = currentDate[2] - birthday[2];
        let month = currentDate[1] - birthday[1];

        if (month < 0 || (month === 0 && currentDate[0] < birthday[0])) age--;

        alert(`${age} years`)
    })


})();

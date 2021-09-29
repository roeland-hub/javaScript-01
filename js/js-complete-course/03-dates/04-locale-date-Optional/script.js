/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    var today = new Date();
    const day =['sunday', 'monday', 'tuesday', 'wednesday','thursday', 'fryday', 'sutarday']
    const month =["January","February","March","April","May","June","July","August","September","October","November","December"]
    var time = ["today " + day[today.getDay()] + " " + today.getDate() +" " + month[today.getMonth()] + " " + today.getHours() + "h" + today.getMinutes() + "min" + today.getSeconds() + "sec"];
    //console.log(today);

    document.getElementById("target").innerHTML = time;
    

})();



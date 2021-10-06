/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    function check(e,value)
{
    //Check Charater
    var unicode=e.charCode? e.charCode : e.keyCode;
    if (value.indexOf(".") != -1)if( unicode == 46 )return false;
    if (unicode!=8)if((unicode<48||unicode>57)&&unicode!=46)return false;
}
function checkLength()
{
    var fieldLength = document.getElementById('txtF').value.length;
    //Suppose u want 4 number of character
    if(fieldLength <= 4){
        return true;
    }
    else
    {
        var str = document.getElementById('txtF').value;
        str = str.substring(0, str.length - 1);
        document.getElementById('txtF').value = str;
    }
}

})();

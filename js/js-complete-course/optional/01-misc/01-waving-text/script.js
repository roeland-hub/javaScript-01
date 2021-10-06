/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let text = document.getElementById('target').innerHTML
    let wave = ""
    let sizes = ['1', '2', '3', '4', '5', '4', '3', '2']

    for (i = 0 ; i <= text.length ; i++ ) {
       let char = text.charAt(i).fontsize(sizes[i%10]);
       wave += char
    }

    document.getElementById('target').innerHTML = wave;

})();
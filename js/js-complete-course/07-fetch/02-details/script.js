/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var button = document.getElementById('run');
    var input = document.getElementById('hero-id');

    document.getElementById("run").addEventListener("click", function(){
        fetch('http://127.0.0.1:5500/_shared/api.json')
        .then(response => response.json())
        .then( (json) => {
            console.log(json)
            var result = json.heroes.filter(obj => {

               // return obj.id == input.value
                if (obj.id == input.value) {
                    const temp = obj;
                    //console.log(temp)
                    var xMen = document.getElementById('tpl-hero').content.cloneNode(true);
                    xMen.querySelector('.name').innerText = temp.name;
                    xMen.querySelector('.alter-ego').innerText = temp.alterEgo;
                    xMen.querySelector('.powers').innerText = temp.abilities;
                    let target = document.getElementById("target");
                    target.appendChild(xMen);
                }
              })
              console.log(result);
            console.log(input.value);
        } )
    })
})();
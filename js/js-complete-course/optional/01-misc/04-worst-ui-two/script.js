/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById('target');
    let btnOne = document.getElementById('part-one');
    let btnTwo = document.getElementById('part-two');
    let btnThree = document.getElementById('part-three');
    let btnFour = document.getElementById('part-four');
    let buttons = [btnOne, btnTwo, btnThree, btnFour];
    

    buttons.forEach(button => {
        button.addEventListener('click', function(){
            let min = button.getAttribute('data-min')
            let max = button.getAttribute('data-max')
            let result = parseInt (button.innerHTML) +1;

            if( result > max) {
                result = min
            }

            if(result < 10) {
                button.innerHTML =  '0' + result;
            }
            
            else {
                button.innerHTML = result.toString()
            }

            target.innerHTML = '0' + btnOne.innerText + btnTwo.innerText + btnThree.innerText + btnFour.innerText;

        })
    });
    
    

})();

/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById('target');
    let btnOne = document.getElementById('fix-part-one');
    let btnTwo = document.getElementById('fix-part-two');
    let btnThree = document.getElementById('fix-part-three');
    let btnFour = document.getElementById('fix-part-four');
    

    
    let input1 = document.getElementById("part-one");
    let input2 = document.getElementById("part-two");
    let input3 = document.getElementById("part-three");
    let input4 = document.getElementById("part-four");
    // let inputs = [input1, input2, input3, input4]
    
    
    
    
    // let firstInterval = setInterval(function(){ 
    // pak random nummer tussen data-min en data-max
    // verander value van input naar random getal
    //     console.log("Oooo Yeaaa!");
    // }, 2000);
    // clearInterval(firstInterval)
    //
    
        let firstInterval = setInterval(function(){
            let min = parseInt(input1.getAttribute('data-min'));
            let max = parseInt(input1.getAttribute('data-max'));
            let numOne = Math.floor(Math.random() * (max - min + 1)) + min;
            
            console.log(numOne);
            input1.value = '0' + numOne;
            console.log(numOne);
            }, 1000);
        btnOne.addEventListener('click', function(){
           clearInterval(firstInterval);
           number1 = input1.value;
           })

        let secondInterval = setInterval(function(){
            let min = parseInt(input2.getAttribute('data-min'));
            let max = parseInt(input2.getAttribute('data-max'));
            let numTwo = Math.floor(Math.random() * (max - min + 1)) + min;
            if(numTwo < 10) {
                input2.value = '0' + numTwo;
            }else {
                input2.value = numTwo.toString();
            }
            console.log(numTwo);
            }, 1000);
        btnTwo.addEventListener('click', function(){
           clearInterval(secondInterval);
           number2 = input2.value;
           })

        let thirdInterval = setInterval(function(){
            let min = parseInt(input3.getAttribute('data-min'));
            let max = parseInt(input3.getAttribute('data-max'));
            let numThree = Math.floor(Math.random() * (max - min + 1)) + min;
            if(numThree < 10) {
                input3.value = '0' + numThree;
            }else {
                input3.value = numThree;
            }
            console.log(numThree);
            }, 1000);
        btnThree.addEventListener('click', function(){
           clearInterval(thirdInterval);
           number3 = input3.value;
           })

        let fourthInterval = setInterval(function(){
            let min = parseInt(input4.getAttribute('data-min'));
            let max = parseInt(input4.getAttribute('data-max'));
            let numFour = Math.floor(Math.random() * (max - min + 1)) + min;
            if(numFour < 10) {
                input4.value = '0' + numFour;
            }else {
                input4.value = numFour;
            }
            console.log(numFour);
            }, 1000);
        btnFour.addEventListener('click', function(){
           clearInterval(fourthInterval);
           number4 = input4.value;
           })
    
    
    

       

        //    console.log(number1);
        // let fullNumber = []
        // fullNumber = inputs.values;
        // target.innerHTML = fullNumber.join('');
    

})();

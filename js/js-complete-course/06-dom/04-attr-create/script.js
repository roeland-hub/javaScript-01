/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let picture = document.getElementsByTagName("span")[0].getAttribute("data-image");
    let newPlace = document.getElementById("target");
    let img = document.createElement("img");
    img.src = picture;
    newPlace.appendChild(img);
    let oldplace = document.getElementById("source");
    oldplace.remove();



})();


//var elem = document.getElementById("id_of_the_element");
//var attribute_value = elem.getAttribute("data-attribute_name");

/* const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName:document.querySelector(".first-name"),
    h2s:document.querySelectorAll("h2"),
    //select the textbox 
    //select ALL the h2s in one property 
}

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach((el)=> el.textContent= DOMSelectors.firstName.value);
}

);

DOMSelectors.button.addEventListener("click", function(){
box(DOMSelectors.box, DOMSelectors.text);
});
 */

//const Album = make Album 
// addcard (Album)
//clearFields ()
//addRemoveButtons
//insertAdjacent html 



/* 
const button = document.getElementById ("btn"); //shows first element within that id
const text = document.querySelector("#text"); //shows first element within the id "text" usually use for classes 
console.log (text);  */
//these names "button" "text" are too general 

const DOMSelectors = {
    //curly brackets is object 
    button:document.getElementById ("btn"),
    text:document.querySelector ("#text"),
    box: document.getElementById ("big-black-box"),
    //below is get elemnt by class
    point: document.querySelectorAll (".point"), //we have 3 points, but queryselector will onyl call the first one, so gotta use ALL
};
console.log (DOMSelectors.point);

//video #2//

function backgroundAndText (background, text) {
    background.style.backgroundColor = "red";
    text.textContent = "This is now a big red box";
    text.style.fontSize = "40 px";
}
//backgroundAndText (DOMSelectors.box, DOMSelectors.text);  (block comment for video 4)//

//video #4//

DOMSelectors.button.addEventListener("click", function (){
   //after addevent..()in the () add the "event reference", and then call a function!!
    backgroundAndText (DOMSelectors.box, DOMSelectors.text);
});

//add eventlistener to the EACH points (in HTML)
let pointIndex = 1; 
function changeLi () {
    DOMSelectors.point.forEach ((point)=> {point.addEventListener ("click", function ()
    { point.textContent = `Hello I am point ${pointIndex}`; 
    pointIndex++; //order matters//
    //have each point reference itself, hello im point one, hello im point two... protrayed in (let,point.index )
  

}); 
});
};
changeLi();

//video #5 (adjacent)//
  



 


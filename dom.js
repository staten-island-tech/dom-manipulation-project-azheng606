
const DOMSelectors = {
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


//const Album = make Album 
// addcard (Album)
//clearFields ()
//addRemoveButtons
//insertAdjacent html 
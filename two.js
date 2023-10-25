//video 5 (adjacent)
const DOMSelectors = {
    button: document.getElementById("btn"),
    box: document.getElementById ("container-box"), 
    input: document.querySelector (`#input`),

}; 
/* const cat = "meow"
DOMSelectors.box.insertAdjacentHTML("beforebegin", `<h1>We are a ${cat}</h1>`);

 */

DOMSelectors.button.addEventListener("click" ,function () { 
    let input = DOMSelectors.input.value //get value of whatevr user typed into input which should be our text (this part in console)
    /* console.log (input); */
    DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`); //this part on actual page
    DOMSelectors.input.value = "" //erases what you wrote in the button after submitting it
})


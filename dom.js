
const DOMSelectors = {
    box:document.querySelector(".box"),
    form: document.querySelector("#form"),
    start: document.querySelector("#start"),
    gone: document.querySelector("#gone"),
    name:document.querySelector(".name"),
    title:document.querySelector(".title"),
image:document.querySelector(".image")}

    DOMSelectors.form.addEventListener("submit" ,function (event) { 
        event.preventDefault();
        console.log (DOMSelectors.name.value, DOMSelectors.title.value, DOMSelectors.image.value)
    
    function poker () {
        DOMSelectors.box.insertAdjacentHTML("beforeend", `
        <div class="card">
        <div class ="h1"> ${DOMSelectors.name.value}</div>
            <h3 class="card-title"> ${DOMSelectors.title.value}</h3>
            <img src= ${DOMSelectors.image.value} class="card-img">
        </div>`)}
        poker ()
        clearfields ()
        
        });


    function clearfields ()  {
        DOMSelectors.name.value = "" 
        DOMSelectors.title.value = "" 
        DOMSelectors.image.value = "" 
        }
       


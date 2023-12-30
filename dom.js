
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
            <button class="removeButton" type ="button">Remove</button>
          </div>
          
        `)}
        
        poker ()
        clearfields ()
        gone ()
        });


    function clearfields ()  {
        DOMSelectors.name.value = "" 
        DOMSelectors.title.value = "" 
        DOMSelectors.image.value = "" 
        }

        
        function gone () {
            const button = document.querySelectorAll(".removeButton");
            button.forEach((button) => 
            button.addEventListener ("click", function (button){
                button.target.parentElement.remove()}))};
       


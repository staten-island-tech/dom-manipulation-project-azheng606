
const DOMSelectors = {
    box:document.querySelector(".box"),
    form: document.querySelector("#form"),
    start: document.querySelector("#start"),
    name:document.querySelector(".name"),
    title:document.querySelector(".title"),
image:document.querySelector(".image")}

    DOMSelectors.form.addEventListener("submit" ,function (event) { 
        event.preventDefault();
        console.log (DOMSelectors.name.value, DOMSelectors.title.value, DOMSelectors.image.value)
    
    function poker () {
        DOMSelectors.box.insertAdjacentHTML("afterend", ` <div class="card">
        <div class ="h1"> ${DOMSelectors.name.value}</div>
            <h3 class="card-title"> ${DOMSelectors.title.value}</h3>
            <img src= ${DOMSelectors.image.value} alt="Snow White" class="card-img">
        </div>`)};

    poker ()
    });
    
        function clearfields ()  {
        DOMSelectors.name.value = "" //erases what you wrote in the button after submitting it
        DOMSelectors.title.value = "" 
        DOMSelectors.image.value = "" 
        }
        clearfields ()
        



let input = document.querySelector("input");
let ul = document.querySelector("ul");
let button = document.querySelector("button");

button.addEventListener("click", function () {
        let item = document.createElement("li");                  //create a list 
        item.innerText = input.value;                             //show the task on screen
      
        let delbtn = document.createElement("Button");  //create button
        delbtn.innerText = "delete";                    //show button on screen
        delbtn.classList.add("delete");                 
       
        item.appendChild(delbtn);
        ul.appendChild(item);                         //item enter ul list
        input.value = "";                 //input value null
});

ul.addEventListener("click", function(event){
if (event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
}
});
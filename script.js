let addToDoButton =document.getElementById("addToDo");
let todocontainer =document.getElementById("todocontainer");
let display=document.getElementById("display");

addToDoButton.addEventListener("click",function(){
    var paragraph = document.createElement("p"); 
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText= display.value;
    todocontainer.appendChild(paragraph);
    display.value="";
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener("dblclick",function(){
        todocontainer.removeChild(paragraph);
    })
})
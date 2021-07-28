let input = document.getElementById("inputText")
let showB = document.getElementById("showButton");
const deleteB = document.getElementById("deleteButton");
const divElement = document.getElementById("element");

function printText() {
  let newDiv = document.createElement("div")
  newDiv.textContent = input.value
  console.log(newDiv)

  divElement.appendChild(newDiv)
}
showB.addEventListener("click", printText);

function deleteText(){
const child=divElement.children;
for(let i=0;i<child.length;i++){
if(child[i].textContent===input.value){
child[i].remove();
}
}




}

deleteB.addEventListener("click",deleteText);




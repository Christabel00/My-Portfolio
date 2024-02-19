let printButton = document.getElementById("printable");

//adding an event listener
printButton.addEventListener("click", printView);
let addButton = document.getElementById("addIt");

addButton.addEventListener("click", addTheThing);

//declaring global variables
let myList =[];
let myListArea = document.getElementById("wishlist");

//addTheThing function 
function addTheThing(){
//variable called the thing added to the addToTheList function
let theThing = document.getElementById("iwant");
addToTheList(theThing);

//function that gets the value and adds it to the list
resetInput(theThing);
}

//function printView
function printView(){

}

//addTolist function
function addToTheList(thingToAdd){
myList.push(thingToAdd.value);
let newListItem= document.createElement("li");
newListItem.innerHTML = myList[myList.length-1];

myListArea.appendChild(newListItem);
}

function resetInput(inputToReset){

inputToReset.value=""
}

function printView() {
    var listPage = document.getElementById("listPage");
    var formArea = document.getElementById("formArea");
    formArea.style.display = "none";
    listPage.className = "print";
    myListArea.innerHTML = "";
    myList.sort();
    for (var i = 0; i < myList.length; i++) {
    wishList.innerHTML += "<li>" + myList[i] + 
   "</li>";
    }
   }
   window.print();
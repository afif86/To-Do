let addItem = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
    let li = document.createElement('li'); // creates an element "li"
    li.appendChild(document.createTextNode(input.value)); //makes the li text from input field 
    ul.appendChild(li); //adds li to ul
    input.value = "";
    
    // Adding Done class when user click on todo item to demonstrate it is done
    function todoCrossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", todoCrossOut);
    

    // delete a to-do
    let deleteBtn = document.createElement("button"); 
	deleteBtn.appendChild(document.createTextNode("remove"));
	li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteListItem);
    
    function deleteListItem() {
        li.classList.add("delete")
    }
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === 'Enter') { 
        // you can also use the event.which === 13 instead of event.key === 'Enter' but note that: 
        // The key code in firefox is different and you should prevent the Default to execute this function properly 
	} 
}


addItem.addEventListener("click",addListAfterClick);

input.addEventListener("keydown", addListAfterKeypress);





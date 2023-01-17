//Select Elements
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
//Creat paragraph value 
	const paragraph = document.createElement('p')
// Apply CSS
	paragraph.classList.add('paragraph-styling')
//Define Input value
	paragraph.innerText = inputField.value;
//Adding items on the todo list
	toDoContainer.append(paragraph);
//Clear up todo items
	inputField.value ="";
//On one click strikes out items
	paragraph.addEventListener('click', function(){
		this.style.textDecoration = 'line-through'
	});
//On Double click removes items
	paragraph.addEventListener('dblclick', function(){
		toDoContainer.remove(this);
	});
});
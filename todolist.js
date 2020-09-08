var toDoCount = 0;

function ToDoAdd(){
	var theDiv = document.getElementById("toDoList");
	var inputValue = document.getElementById("tinput").value;
	const toDoDiv = document.createElement('div');

  	toDoDiv.className = 'toDoDiv';
  	toDoDiv.id = 'toDo' + ++toDoCount;

  	toDoDiv.innerHTML =
  	`<div class="toDoText">`+inputValue+`</div>`+
  	`
  		<button class="toDoBtn" onclick="ToDoRemove(this)">Remove</button>
		<button class="toDoBtn" onclick="ToDoDone(this)">Done</button>

  	`;

  	document.getElementById("tinput").value = "";
	theDiv.appendChild(toDoDiv);
}

function ToDoDone(element){
  let elementToDecorate = element.parentNode.querySelector('.toDoText');
  if(elementToDecorate.style.textDecoration === ''){
    elementToDecorate.style.textDecoration = 'line-through';
    element.textContent = 'Undone';
  }else{
    elementToDecorate.style.textDecoration = '';
    element.textContent = 'Done';
  }
}

function ToDoRemove(element){
	var el = document.getElementById(element.parentNode.id);
	el.remove();
}

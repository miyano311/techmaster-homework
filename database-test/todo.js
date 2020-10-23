const todoArr = [];
const todo_list = document.getElementsByClassName("to-do-list");
const todo_input = document.getElementById("newReminder");

let idUpdate = "";
let isUpdate = false;

function generateUUID() {
	let output = new Date().getTime();
	return output;
}

class TodoItem {
	constructor(title, stat){
		this.id = generateUUID();
		this.title = title;
		this.stat = stat;
		
	}
}

newReminder.addEventListener("click", function(){
	let newItemTitle = todo_input.value;
	if (newItemTitle == "") {
		
	}
	
	let newItem = new TodoItem(newItemTitle, true);
	todoArr.push(newItem);
	renderUI(todoArr);
})

function renderUI(arr) {
	todo_list.innerHTML = "";
	
	if (arr.length == 0) {
		todo_list.innerHTML = '<p class="todos-empty">There is no available reminder!</p>';
		return
	}
	
	for (let i = 0; i < arr.length; i++) {
		const t = arr[i];
		todo_list.innerHTML += `
			<div class="todo-item ${t.stat ? "active-todo" : ""}">
				<div class="todo-item-title">
					<input type="checkbox" ${t.stat ? "checked" : ""}>
					<p>${t.title}</p>
				</div>
				<div class="option">
					<button class="btn btn-update">
						<img>
						</button>
					<button class="btn btn-delete">
						<img src="" alt="SerB" onlick="deleteTodo("${t.id}")">
					</button>
				</div>
			</div>
		`;
	}
}

function toggleStatus(id) {
	for (let i = 0; i < todoArr.length; i++) {
		if (todoArr[i].id = id)
			todoArr[i].stat = !todoArr[i].stat;
	}
	renderUI(todoArr);
}

function updateTodo(id) {
	let title
	for (let i = 0; i < todoArr.length; i++) {
		if (todoArr[i].id == id) {
			title = todoArr[i].title;
		}
	}
	
	todo_input
}

function init() {
	renderUI(todoArr);
}

window.onload = init;

const form = document.querySelector(".todo_form");
const input = document.querySelector(".todo_input");
const todo_container = document.querySelector(".todo_container");

// Defualt settings
const startConf = () => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (!todos) {
       localStorage.setItem("todos", JSON.stringify([]));
    } else {
       todos.forEach(todo => {
        addHTML(todo);
       });
    } 
}

// Add Todo 
const addTodo = (e) => {
    e.preventDefault();
    
    const inputVal = input.value;
 
    if (inputVal == '')  { 
        // Bosh deyer girende, xeberdarlig!

        input.style.border = '1px solid red';
        setTimeout(() => {
            input.style.borderColor = 'transparent';
        }, 2500);
        return false;
    }
 
    const todo = {
       text: inputVal,
       isCompleted: false,
    };
 
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
 
    addHTML(todo);
 
    form.reset();
}

const deleteTodo = (e) => {
    const todo = e.target.parentElement.parentElement;
    const text = todo.firstChild.children[1].textContent;

    let todos = JSON.parse(localStorage.getItem("todos"));
    todos = todos.filter(td => td.text != text);
    localStorage.setItem("todos", JSON.stringify(todos));

    todo.remove();
}

const completeTodo = (e) => {
    const todo = e.target.parentElement.parentElement;
    const text = todo.firstChild.children[1].textContent;

    let todos = JSON.parse(localStorage.getItem("todos"));
    console.log(todos)
    todos.forEach(td => {
        if(td.text === text) {
            td.isCompleted = !td.isCompleted;;
        }
    });
    
    localStorage.setItem("todos", JSON.stringify(todos));
}

const saveTodo = (e) => {
    const todo = e.target.parentElement.parentElement;
    const prevText = todo.firstChild.children[1].textContent;
    const newText = todo.firstChild.children[2].value;
    
    let todos = JSON.parse(localStorage.getItem("todos"));
    
    todos.forEach(td => {
       if (td.text === prevText) td.text = newText;
    });
 
    localStorage.setItem("todos", JSON.stringify(todos));
 
    todo.firstChild.children[1].textContent = newText;
 
    todo.classList.remove("-edited");
}

const editTodo = (e) => {
    const todo = e.target.parentElement.parentElement;
    todo.classList.add("-edited");
}

// Toodo Container
const addHTML = (todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
 
    const todo_title = document.createElement("div");
    todo_title.classList.add("todo_title");
    
    const editInput = document.createElement("input");
    editInput.classList.add("todo_editInput")
    editInput.defaultValue = todo.text;
 
    const todoCb = document.createElement("input");
    todoCb.type = "checkbox";
    todoCb.checked = todo.isCompleted; 
    todoCb.classList.add("todo_cb");
    todoCb.addEventListener("click", completeTodo); 

    const todoText = document.createElement("span");
    todoText.classList.add("todo_text");
    todoText.textContent = todo.text;
 
    todo_title.appendChild(todoCb);
    todo_title.appendChild(todoText);
    todo_title.appendChild(editInput);
 
    const todo_buttons = document.createElement("div");
    todo_buttons.classList.add("todo_buttons");
 
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("todo_delete");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", deleteTodo);
    
    const editBtn = document.createElement("button");
    editBtn.classList.add("todo_edit");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editTodo);
    
    const saveBtn = document.createElement("button");
    saveBtn.classList.add("todo_save");
    saveBtn.textContent = "Save";
    saveBtn.addEventListener("click", saveTodo);
 
    todo_buttons.appendChild(deleteBtn);
    todo_buttons.appendChild(editBtn);
    todo_buttons.appendChild(saveBtn);
 
    todoDiv.appendChild(todo_title);
    todoDiv.appendChild(todo_buttons);
 
    todo_container.appendChild(todoDiv);
}

startConf();

form.addEventListener('submit', addTodo);
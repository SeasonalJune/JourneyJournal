const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const todoList=document.getElementById("todo-list");

function paintTodo(newTodo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    const button=document.createElement("button");
    button.innerText="✔";
    button.classList.
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText=newTodo;
    todoList.appendChild(li);
}

function deleteTodo(event){
    const li=event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo)=>toDo.id!==parseInt(li.id));
    saveTodos();
}

function saveTodos(){
    localStorage.setItem(toDos,JSON.stringify(toDos));
}

let toDos=[];

function HandleTodoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;

    const newTodoObj={
        text:newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

const savedToDos=localStorage.getItem(toDos);

toDoForm.addEventListener("submit",HandleTodoSubmit);

     if (savedToDos!==null){
        const parsedToDOs=JSON.parse(savedToDos);
        toDos=parsedToDOs;
        parsedToDOs.forEach(paintTodo);
     }
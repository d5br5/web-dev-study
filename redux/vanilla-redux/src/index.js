import {createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (todo = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{text: action.text, id: Date.now()}, ...todo];
    case DELETE_TODO:
      return todo.filter(a=>a.id!==action.id);
    default :
      return todo;
  }
}

const todoStore = createStore(reducer);

const deleteTodo = (e) =>{
  const id = parseInt(e.target.parentNode.id);
  todoStore.dispatch({type: DELETE_TODO, id});
  console.log(id);
}

const paintToDos = () => {
  const toDos = todoStore.getState();
  ul.innerHTML="";
  toDos.forEach(todo => {
    const li = document.createElement("li");
    li.innerText = todo.text;
    li.id = todo.id;
    const btn = document.createElement("button");
    btn.innerText="DEL";
    btn.addEventListener("click", deleteTodo);
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

todoStore.subscribe(paintToDos);

const addToDo = (text) => {
  todoStore.dispatch({type: ADD_TODO, text});
}

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDo(toDo);
}

form.addEventListener("submit", onSubmit);
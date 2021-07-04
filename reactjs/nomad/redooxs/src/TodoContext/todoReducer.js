import {v4 as uuid} from "uuid";

const ADD = "add";
const DEL = "del";
const COM = "com";
const UNCOM = "uncom";

let target;

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD :
      return {...state, toDos: [...state.toDos, {text: action.payload, id: uuid()}]};
    case DEL :
      return {
        ...state, toDos: state.toDos.filter(todo => todo.id !== action.payload),
        completed: state.completed.filter(com => com.id !== action.payload)
      };
    case COM :
      target = state.toDos.find(toDo => toDo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter(todo => todo.id !== action.payload),
        completed: [...state.completed, {...target}]
      };
    case UNCOM :
      target = state.completed.find(toDo => toDo.id === action.payload);
      return {
        ...state,
        toDos: [...state.toDos, {...target}],
        completed: state.completed.filter(todo => todo.id !== action.payload),
      }
    default :
      throw new Error();
  }
}

export default todoReducer;
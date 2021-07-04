import React, {createContext, useContext, useReducer} from "react";
import todoReducer from "./todoReducer";


const initialState = {toDos: [], completed: []};

export const TodoContext = React.createContext();

const TodoContextProvider = ({children}) =>{
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return <TodoContext.Provider value={{state, dispatch}}>{children}</TodoContext.Provider>
}

export const useDispatch = () => {
  const {dispatch} = useContext(TodoContext);
  return dispatch;
}

export const useToDos = () =>{
  const {state : {toDos} } = useContext(TodoContext);
  return toDos;
}

export const useCompleted = () =>{
  const {state : {completed}} = useContext(TodoContext);
  return completed;
}

export default TodoContextProvider;
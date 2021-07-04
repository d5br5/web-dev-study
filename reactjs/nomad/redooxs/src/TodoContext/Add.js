import React, {useState} from "react";
import {useDispatch} from "./todoContext";

const ADD = "add";

export default ()=>{
  const [newTodo, setNewToDo] = useState();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({type: ADD, payload: newTodo});
    setNewToDo("");
  }

  const onChange = (e) => {
    const {target: {value}} = e;
    setNewToDo(value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="to do" value={newTodo} onChange={onChange}/>
    </form>
  );
};
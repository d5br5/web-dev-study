import React from "react";
import {useDispatch} from "./todoContext";

const DEL = "del";
const COM = "com";
const UNCOM = "uncom";

export default ({text, id, isCompleted}) => {
  const dispatch = useDispatch();
  return (<li key={id}>
    <span>{text}</span>
    <button onClick={() => dispatch({type: DEL, payload: id})}>DELETE</button>
    <button
      onClick={() => dispatch({type: isCompleted ? UNCOM : COM, payload: id})}>{isCompleted ? UNCOM : COM}</button>
  </li>);
}
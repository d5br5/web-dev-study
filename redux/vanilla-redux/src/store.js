import {configureStore, createSlice} from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";
//
// const addToDo = createAction(ADD);
// const deleteToDo = createAction(DELETE);
//
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => [...state, {text: action.payload, id: Date.now()}],
//   [deleteToDo]: (state, action) => state.filter(a => a.id !== action.payload)
// });
// const store = configureStore({reducer});
//
// export const actionCreators = {
//   addToDo, deleteToDo
// }

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => [...state, {text: action.payload, id: Date.now()}],
    remove: (state, action) => state.filter(a => a.id !== action.payload)
  }
})

export const {add, remove} = toDos.actions;
export default configureStore({reducer: toDos.reducer});

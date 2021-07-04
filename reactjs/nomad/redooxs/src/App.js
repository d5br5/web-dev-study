import Add from "./TodoContext/Add";
import List from "./TodoContext/List";
import {useCompleted, useToDos} from "./TodoContext/todoContext";
import Todo from "./TodoContext/Todo";

function App() {
  const toDos = useToDos();
  const completed = useCompleted();
  return (
    <div className="App">
      <Add/>
      <List name="To Dos">
        {toDos.map(a => <Todo key={a.id} text={a.text} id={a.id} isCompleted={false}/>)}
      </List>
      <List name={completed.length > 0 ? "Completed" : ""}>
        {completed.map((a) => <Todo key={a.id} text={a.text} id={a.id} isCompleted={true}/>)}
      </List>
    </div>
  );
}

export default App;

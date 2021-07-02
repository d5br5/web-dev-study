import React, {useState} from 'react';
import Number from "./Number";

function App() {
    const [counter, setCounter] = useState(0);

    const add = ():void => {
        setCounter(counter + 1);
    }

    return (
        <div className="App">
            <Number count={counter}></Number>
            <button onClick={add}>
                up
            </button>
        </div>
    );
}

export default App;

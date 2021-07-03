import Screen from "./LangContext/Screen";
import Lang from "./LangContext/LangContext";
import translations from "./LangContext/translations";

function App() {

  return (
    <div className="App">
      <Lang defaultLang="en" translations={translations}>
        <Screen/>
      </Lang>
    </div>
  );
}

export default App;

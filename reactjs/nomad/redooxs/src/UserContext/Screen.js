import Header from "./Header";
import {useFns} from "./UserContext";

const Screen = () => {
  const fn = useFns();
  return <div>
    <Header/>
    <h1>First Screen</h1>
    <button onClick={fn.logUserIn}>Log in</button>
  </div>;
}

export default Screen;
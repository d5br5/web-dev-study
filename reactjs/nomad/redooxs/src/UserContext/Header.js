import {useUser} from "./UserContext";


const Header = () => {
  const {name, loggedIn} = useUser();
  return <header>
    <a href="#">Home</a> Hello, {name}! you are {loggedIn ? "logged In" : "Anonymous"}
  </header>
}

export default Header
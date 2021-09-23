import {Link , Route,Switch} from "react-router-dom"
import ContactList from './Components/ContactList';
import { Button } from 'semantic-ui-react'
import {useDispatch} from "react-redux";
import {toggleFalse} from "./JS/Actions/edit"
import Add from "./Components/Add";

function App() {
  const dispatch = useDispatch()
  return (
    <div >
    <Link to="/">
    <Button primary>Contact List</Button>
    </Link>
    <Link to="/add">
    <Button onClick={()=>dispatch(toggleFalse())} primary>Add Contact</Button>
    </Link>
   <Switch>
     <Route exact path="/" component={ContactList}/>
     <Route path={["/add","/edit/:id"]} component={Add}/>
   </Switch>
    </div>
  );
}

export default App;

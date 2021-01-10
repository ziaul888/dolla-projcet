//import logo from './logo.svg';
import './App.css';
//import CounterOne from "./component/useReducer"
//import Navbar from './component/Navbar'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
//import SideBar from './component/Sidebar';
import { Home } from './pages';
import Signin from './pages/Signin'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>  
        <Route path='/signin' component={Signin} exact/>  
        </Switch>
      
    </Router>
  );
}

export default App;

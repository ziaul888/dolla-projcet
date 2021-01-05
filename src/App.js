//import logo from './logo.svg';
import './App.css';
//import CounterOne from "./component/useReducer"
//import Navbar from './component/Navbar'
import {BrowserRouter as Router } from "react-router-dom"
//import SideBar from './component/Sidebar';
import { Home } from './pages';
function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;

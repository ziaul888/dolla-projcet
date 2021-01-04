//import logo from './logo.svg';
import './App.css';
//import CounterOne from "./component/useReducer"
import Navbar from './component/Navbar'
import {BrowserRouter as Router } from "react-router-dom"
function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;

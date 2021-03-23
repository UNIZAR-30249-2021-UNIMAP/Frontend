import React, {Component} from "react";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";


//Pages
import MainPage_hu6 from "./pages";
import NotFoundPage from "./pages/404";

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
      </div>     
    );
  }
}

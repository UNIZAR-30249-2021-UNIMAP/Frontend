import React, {Component} from "react";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router-dom"
import {Switch} from "react-router-dom" 
import {Redirect} from "react-router-dom"

//Pages
import MainPage_hu6 from "./pages/MainPage/index";
import NotFoundPage from "./pages/404";
import SignUp from "./pages/MainPage/SignUp"
import SignIn from "./pages/MainPage/SignIn"
import Report from "./pages/MainPage/Report"
import Reserve from "./pages/MainPage/Reserve"

export default class App extends Component {
  
  render(){
        return (
        <div className="App">
          <NavBar />
          <BrowserRouter >
            <Switch>
              <Route exact path="/" component={MainPage_hu6} />
              <Route exact path="/404" component={NotFoundPage} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/report" component={Report} />
              <Route exact path="/reserve" component={Reserve} />
              <Redirect to={"/404"} />
            </Switch>
          </BrowserRouter>
      </div>     
    );
  }
}

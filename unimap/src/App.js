import React, { Component } from "react";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom"
import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import { Redirect } from "react-router-dom"

//Pages
import MainPage_hu6 from "./Web/Pages/MainPage";
import NotFoundPage from "./Web/Pages/404";
import SignUp from "./Web/Pages/SignUp"
import SignIn from "./Web/Pages/SignIn"
import Report from "./Web/Pages/Report"
import Reserve from "./Web/Pages/Reserve"
import AssignTask from "./Web/Pages/AssignTask"
import Janitor from "./Web/Pages/Janitor"

export default class App extends Component {

  render() {
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
            <Route exact path="/assingtask" component={AssignTask} />
            <Route exact path="/Janitor" component={Janitor} />
            <Redirect to={"/404"} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

import {BrowserRouter}  from "react-router-dom";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
//import {Link} from "react-router-dom"; 
import {Redirect} from "react-router-dom";
import { render } from '@testing-library/react';


//Pages
import MainPage_hu6 from "./pages";
import NotFoundPage from "./pages/404";

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
         <BrowserRouter> 
            <Switch>
              <Route exact path="/" component={MainPage_hu6}/>
              <Route exact path="/404" component={NotFoundPage}/>
              <Redirect to="/404"/>
            </Switch>
         </BrowserRouter>
        </header>
      </div>
    );
  }
}
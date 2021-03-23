import React, { Component } from 'react';
import {MenuItem} from "./MenuItem";
import './NavBar.css';
import {Button} from "../Button"

class NavBar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavBarItems">
                <h1 className="navbar-logo">Unimap  <i className='fas fa-globe-europe'></i></h1>
                <div className="menu-icon" onClick={
                    this.handleClick
                }>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItem.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    } 
}

export default NavBar
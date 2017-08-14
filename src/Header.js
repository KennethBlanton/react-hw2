import React, { Component } from 'react';
import './Header.css';

import { NavLink } from 'react-router-dom'


class Header extends Component {
  	
    render() {
      
  		return (
	    	<div className="App-header">

          <div className="nav">
            <NavLink exact activeClassName="selected" className="normal" to="/">Home</NavLink>
            <NavLink activeClassName="selected" className="normal" to="/Counter1">Counter 1</NavLink>
            <NavLink activeClassName="selected" className="normal" to="/Counter2">Counter 2</NavLink>
            <NavLink activeClassName="selected" className="normal" to="/CounterForm">Counter Form</NavLink>
          </div>

        </div>
      );

    }
}


export default Header;
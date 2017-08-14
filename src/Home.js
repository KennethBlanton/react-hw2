import React, { Component } from 'react';

import './App.css';

import { Link } from 'react-router-dom';

class Home extends Component
{
  	render() {
  		
  		return (
	    	<div className="">
	          <p className="App-intro">
	            This is the home page.<br /><br />Check out this fun <Link to="/Counter1">counter</Link>.<br />
	          </p>
	      	</div>
      );

    }
}


export default Home;
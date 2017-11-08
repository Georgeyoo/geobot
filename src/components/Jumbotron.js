import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Form from './Form';
import Zoom from './Zoom';
import './../index.css';


let navStyle = {
	"backgroundImage": 'linear-gradient(to right, #28c8e5, #00ffff, #8A2BE2)',
	'position': 'fixed',
	'width': '100%',
	'maxWidth': '100%',
	'top': '0px',
	'border': 'none',
	'marginTop': "1%"
}

let jumboStyle = {
	"backgroundImage": 'linear-gradient(to right, #28c8e5, #00ffff, #8A2BE2)'
}

let btnStyle = {
	"backgroundImage": 'linear-gradient(to right, #28c8e5, #00ffff)',
	"margin": "2px",
	"borderRadius": "10px"
}

let logoStyle = {

}

class Heading extends Component {
	render() {
		return(
			<div className='jumbotron' style={ jumboStyle }>
				<nav className="navbar navbar-default" style={ navStyle }>
					<div className="container-fluid">
					    <div className="navbar-header">
					      	<a className="navbar-brand" href="#">
					      		<img src="./../images/trilogo.png" />
					      	</a>
					    </div>

					    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						    <ul className="nav navbar-nav navbar-right">
						        <li><NavLink to={'/login/'} style={ btnStyle }>/L/ Login</NavLink></li>
						    	<li><NavLink to={'/db/'} style={ btnStyle }>/D/ Database</NavLink></li>
						    	<li><NavLink to={'/zoom/'} style={ btnStyle }>/Z/ ZoomGen</NavLink></li>
						    </ul>
					    </div> 
				  	</div> 
				</nav>
			</div>
		);
	}
}

export default Heading;
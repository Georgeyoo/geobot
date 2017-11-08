import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class Zoom extends Component {

	constructor(props){
		super(props);

		this.state = {
			mainRoom: "",
			rooms: "",
			names: ""
		}
		this.handleUserInput = this.handleUserInput.bind(this);
	}

	handleUserInput(e) {
		const value = e.target.value;
		const name = e.target.name;
		this.setState({ [name]: value });
			// () => {this.validateField(name, value)});
	}

	handleSubmit(e) {
		e.preventDefault();

		console.log("submitted!");
	}


	render() {
		return(
			<form className="navbar-form">
				<div>
					<label htmlFor="mainRoom"> Enter Main Zoom Room URL </label>
						<input 
							type="text"
							className="form-control"
							name="mainRoom"
							onChange={ this.handleUserInput }/>
							
				</div>

				<div>
					<label htmlFor="rooms"> Enter Breakout Zoom Room URLs (comma separated) </label>
					<input 
						type="text"
						className="form-control"
						name="rooms"
						onChange={ this.handleUserInput } />
				</div>

				<div>
					<label htmlFor="names"> Enter Student Names (comma seperated) </label>
					<input 
						type="text"
						className="form-control"
						name="names"
						onChange={ this.handleUserInput } />
				</div>

				<div>
					<button htmlFor="submit"
							type="submit"
							className="btn btn-primary"
							onSubmit={ this.handleSubmit }>
							EXECUTE!
					</button>
				</div>

			</form>
		);
	}
}

export default Zoom;
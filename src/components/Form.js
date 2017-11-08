import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import { Row, Col } from 'react-bootstrap';

let navStyle = {
	'margin': '0% 0%'
}

let formLabelStyle = {
	'fontSize' : '22px'
}

class Form extends Component {
	constructor(props){
		super(props);
		this.state = { 
			first:'',
			middle:'',
			last:'',
			email:'',
			phone:'',
			role: '',
			formErrors: {first:'', middle:'', last:'', email:'', phone:'', role:''},
			firstValid: false,
			middleValid: false,
			lastValid: false,
			emailValid: false,
			phoneValid: false,
			roleValid: false
		}
		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUserInput(e){
		const value = e.target.value;
		const name = e.target.name;
		this.setState({ [name]: value },
			() => { this.validateField(name, value)});

	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.history.push('/db');
		console.log('Added new entry!');
	}

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.emailValid;
		let firstValid = this.state.firstValid;
		let middleValid = this.state.middleValid;
		let lastValid = this.state.lastValid;
		let phoneValid = this.state.phoneValid;
		let roleValid = this.state.roleValid;

		switch(fieldName) {
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				// fieldValidationErrors.email = emailValid ? '' : 'is invalid';
				break;
			case 'first':
				firstValid = value.length > 1;
				// fieldValidationErrors.first = firstValid ? ' ' : 'is invalid';
				break;
			case 'middle':
				// This makes it so that middle initial is optional OR 1 letter
				middleValid = value.length < 2;
				// fieldValidationErrors.middle = middleValid ? ' ' : 'is invalid';
				break;
			case 'last':
				lastValid = value.length > 0;
				// fieldValidationErrors.last = lastValid ? ' ' : 'is invalid';
				break;
			case 'phone':
				phoneValid = value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i);
				// fieldValidationErrors.phone = phoneValid ? ' ' : 'is invalid';
				break;
			case 'role':
				roleValid = value.length > 1;
			}

			this.setState({ formErrors: fieldValidationErrors,
							emailValid: emailValid,
							firstValid: firstValid,
							middleValid: middleValid,
							lastValid: lastValid,
							phoneValid: phoneValid,
							roleValid: roleValid
						}, this.validateForm);
		}

	validateForm() {
		this.setState({ formValid: this.state.emailValid && this.state.firstValid && this.state.middleValid && this.state.lastValid && this.state.phoneValid && this.state.roleValid});
	}

	errorClass(error) {
		return(error.length === 0 ? ' ' : 'has-error');
	}

	render() {
		return(
			<form className="navbar-form" style={ navStyle }>
				<Row>
					<Col sm={4}>
						<div className={`form-group ${this.errorClass(this.state.formErrors.first)}`}>
		         			<label htmlFor="first" style={ formLabelStyle }>First Name: </label>
		         				<input type="text" 
		         					   className="form-control"
		           					   name="first" 
		           					   onChange={ this.handleUserInput }/>
		       			</div>
		       			<div className={`form-group ${this.errorClass(this.state.formErrors.middle)}`}>
		         			<label htmlFor="middlename" style={ formLabelStyle }>Middle Initial: </label>
		         				<input type="text" 
		         					   className="form-control"
		           					   name="middle" 
		           					   onChange={ this.handleUserInput }/>
		       			</div>
		       			<div className={`form-group ${this.errorClass(this.state.formErrors.last)}`}>
		         			<label htmlFor="lastname" style={ formLabelStyle }>Last Name: </label>
		         				<input type="text" 
		         					   className="form-control"
		           					   name="last" 
		           					   onChange={ this.handleUserInput }/>
		       			</div>
		       			</Col>

		       			<Col sm={4}>
		       			<div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
		         			<label htmlFor="email" style={ formLabelStyle }>Email Address: </label>
		         				<input type="text" 
		         					   className="form-control"
		           					   name="email" 
		           					   onChange={ this.handleUserInput }/>
		       			</div>

		       			<div className={`form-group ${this.errorClass(this.state.formErrors.phone)}`}>
		         			<label htmlFor="phone" style={ formLabelStyle }>Phone Number: </label>
		         				<input type="text" 
		         					   className="form-control"
		           					   name="phone" 
		           					   onChange={ this.handleUserInput }/>
		       			</div>
       				</Col>

	       			<Col sm={4}>
		       			<div className={`form-group radio ${this.errorClass(this.state.formErrors.role)}`}>
		         			<label htmlFor="role" style={ formLabelStyle }>Role: </label>
		         				<label>
			         				<input type="radio" 
			         					   className="form-control"
			           					   name="role" 
			           					   onChange={ this.handleUserInput } 
			           					   
			           					   check={ this.state.role === 'student' }/>
			           				Student
		           				</label>
		           				<label>
			           				<input type="radio" 
			         					   className="form-control"
			           					   name="role" 
			           					   onChange={ this.handleUserInput }
			           					   
			           					   check={ this.state.role === 'admin' }/>
			           				Admin
		           				</label>
		       			</div>
	       			</Col>
       			</Row>

       			<Row>
	       			<Col sm={12}>
		       			<button type="submit" 
		       					className="btn btn-primary" 
		       					onSubmit = { this.handleSubmit } 
		       					disabled={!this.state.formValid}> 
		       						Submit 
		       					</button>
	       			</Col>
       			</Row>

			</form>
		);
	}
}

export default Form;
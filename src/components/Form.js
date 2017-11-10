import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import { ItemService } from './ItemService';
import Roster from './Roster';
import { Row, Col, FieldGroup } from 'react-bootstrap';


// Styles objects 
let navStyle = {
	'margin': '0% 0%'
}

let formLabelStyle = {
	'fontSize' : '17px',
	'padding': '8px',
	'margin': '8px'
}

// Component creation
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
		this.addItemService.sendData(this.state.value);
		this.props.history.push('/');
		console.log('Added new entry!');
		
		let phone = this.ref.phoneNumber.value;
		let role = this.ref.roleBool.value;

		if(typeof phone === Number) {
			console.log(this.state.phone + " is a number");
		} else {
			console.log(this.state.phone + " is a string");
		}

		if(typeof role === Boolean) {
			console.log(this.state.role + " is a boolean");
		} else {
			console.log(this.state.role + ' is a string');
		}
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
			<div>
				<form className="navbar-form" style={ navStyle }>

					<Row>
	       				<Col sm={12}>
	       					    <input
	       					    	style = { formLabelStyle }
									id="formControlsFile"
									type="file"
									label="File"
							    />
	       				</Col>
	       			</Row>

					<Row>
						<Col sm={4}>
							<div className={`form-group ${this.errorClass(this.state.formErrors.first)}`}>
			         			<label htmlFor="first" style={ formLabelStyle }>First Name: </label>
			         				<input type="text" 
			         					   className="form-control"
			           					   name="first"
			           					   placeholder="Enter First Name" 
			           					   onChange={ this.handleUserInput }/>
			       			</div>
			       			<div className={`form-group ${this.errorClass(this.state.formErrors.middle)}`}>
			         			<label htmlFor="middlename" style={ formLabelStyle }>Middle Initial: </label>
			         				<input type="text" 
			         					   className="form-control"
			           					   name="middle"
			           					   placeholder="Enter Middle Initial"  
			           					   onChange={ this.handleUserInput }/>
			       			</div>
			       			<div className={`form-group ${this.errorClass(this.state.formErrors.last)}`}>
			         			<label htmlFor="lastname" style={ formLabelStyle }>Last Name: </label>
			         				<input type="text" 
			         					   className="form-control"
			           					   name="last"
			           					   placeholder="Enter Last Name"  
			           					   onChange={ this.handleUserInput }/>
			       			</div>
			       			</Col>

			       			<Col sm={4}>
			       			<div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
			         			<label htmlFor="email" style={ formLabelStyle }>Email Address: </label>
			         				<input type="text" 
			         					   className="form-control"
			           					   name="email"
			           					   placeholder="Enter Email"  
			           					   onChange={ this.handleUserInput }/>
			       			</div>

			       			<div className={`form-group ${this.errorClass(this.state.formErrors.phone)}`}>
			         			<label htmlFor="phone" style={ formLabelStyle }>Phone Number: </label>
			         				<input type="text"
			         					   ref = "phoneNumber" 
			         					   className="form-control"
			           					   name="phone"
			           					   placeholder="Enter Phone Number"  
			           					   onChange={ this.handleUserInput }/>
			       			</div>
	       				</Col>

		       			<Col sm={4}>
			       			<div className={`form-group ${this.errorClass(this.state.formErrors.role)}`}>
			         			<label htmlFor="role" style={ formLabelStyle }>Role: </label>
			         				<input type="text" 
			         					   className="form-control"
			           					   name="role"
			           					   placeholder='e.g. "Student", "Admin"' 
			           					   onChange={ this.handleUserInput } 			   
			           					   check={ this.state.role === 'student' }/>		

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

				<Roster />
			</div>
		);
	}
}

export default Form;
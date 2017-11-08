import React, { Component } from 'react';

export default class ZoomRoom extends Component {

	constructor(props) {
		super(props);
		this.state = {
			login:'',
			password:''
		}
	}

	
	render() {
		return(
			<div className="form">
				<input />
				<input />
			</div>
		);
	}
}
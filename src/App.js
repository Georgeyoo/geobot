import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Heading from './components/Jumbotron';
import Form from './components/Form';
import Zoom from './components/Zoom';

class App extends Component {


  render() {
    return (
    	<Router>
	      	<div>
	      		<Heading />
	      		<Route path="/db" component={ Form } />
				<Route path="/zoom" component={ Zoom } />
	      	</div>
      	</Router>
    );
  }
}

export default App;

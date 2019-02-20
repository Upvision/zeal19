import React, { Component } from 'react';

import {Route,withRouter,Redirect} from "react-router-dom";



//Pages
import Home from './pages/home/home.js' 


import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Route path="/" component={Home} exact/>
			</div>
		);
	}
	componentDidMount(){
	}
}

export default App;

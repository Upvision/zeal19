import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

// Apollo client
// Put footer and top menu here if we need them 
// future.
import Footer from './components/footer'
import NavBar from './components/navbar'


import './index.css';
import App from './App';

ReactDOM.render( 
		<div>
			<NavBar/>
			{/*<Login/>*/}
			<Router>
		    	<App />
		  	</Router>
		  	{/*<Footer/>*/}
	  	</div>,
	document.getElementById('root')
);


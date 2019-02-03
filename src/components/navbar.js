import React, { Component } from 'react';

import logo from '../static/logo.png'
import '../css/components/navbar.css';

class NavBar extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	render() {
		return (
			<div className="NavBar cmn">
				<div className="nav-cont">
					<img src={logo} className="nav-logo"/>
					{/*<div className="nav-tit">Zeal'19</div>*/}
				</div>
			</div>
		);
	}
	handleOpen = ()=>{
		let elem = document.getElementById('Login')
		elem.style.transform = "scale(1,1)"
	}
}

export default NavBar;

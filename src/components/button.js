import React, { Component } from 'react';


import '../css/components/button.css';

class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	render() {
		return (
		  <div className="Button cmn" onClick={this.props.openModal}>
		  	<img src={this.props.icon} className="btn-icon" alt="icon"/>
		  	{this.props.tit}
		  </div>
		);
	}
}

export default Home;

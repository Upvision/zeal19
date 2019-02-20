import React, { Component } from 'react';

import Eventcard from './eventcard.js'

import '../../css/components/home/events.css';
import DATA from '../../json_data1.js'

class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	render() {
		return (
		  <div className="Events">
				{this.handleCard()}
		  </div>
		);
	}
	handleCard = ()=>{
		let foo = []
		Object.keys(DATA).forEach(key=>{
			console.log(key)
	  		foo.push(
	  			<Eventcard 
	  				tit={key} 
	  				data = {DATA[key]}
	  			/>
	  		)
		})
		return foo
	}
}

export default Home;

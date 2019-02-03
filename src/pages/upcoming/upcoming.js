import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import EventTemp from '../../components/upcoming/event-temp.js'

import '../../css/pages/upcoming/upcoming.css';

class Upcomihng extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	render() {
		return (
		  <div className="Upcoming">
		  	<div className="nav">
	  	 		<Link to ="/">&larr; Upcoming Events</Link>
		  	</div>
		  	<div className="events-cont">
		  		<EventTemp/><br/><br/>
		  	</div>
		  </div>
		);
	}
}

export default Upcomihng;

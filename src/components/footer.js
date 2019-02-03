import React, { Component } from 'react';

// import '../../css/pages/home/home.css';

class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	render() {
		return (
		  		<div className="theme2">
		  			<div className="contact-title">ContactUs</div>
		  			<div className="contact-details">
		  				<div className="contact-profile">
		  					<div className="contact-name">
		  						Karan Jha<br/>
		  						Coordinator
		  					</div>
		  					<div className="contact-no">
		  						+91-7977308443<br/>
		  						161210024@nitdelhi.ac.in
		  					</div>
		  				</div>
		  				<div className="contact-profile">
		  					<div className="contact-name">
		  						Aatish Sreekumar <br/>
		  						Coordinator
		  					</div>
		  					<div className="contact-no">
		  						+91-8826762262<br/>
		  					</div>
		  				</div>
		  				<div className="contact-profile">
		  					<div className="contact-name">
		  						Ajay Rathore<br/>
		  						Developer
		  					</div>
		  					<div className="contact-no">
		  						+91-8076109532<br/>
		  						161210004@nitdelhi.ac.in
		  					</div>
		  				</div>
		  			</div> 
		  			<div className="social-link-cont">
		  				 © 2019 All rights are reserved to TechClub NIT Delhi.
		  			</div>
		  		</div>
		);
	}
}

export default Home;

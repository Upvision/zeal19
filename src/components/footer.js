import React, { Component } from 'react';

import '../css/components/footer.css';

class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	render() {
		return (
		  		<div className="Footer">
		  			<div className="left-footer cmn"> 
			  			<div className="contact-title">
			  			ContactUs
						</div>
						<div className="contact cmn">
							SAS Office,<br/>
							National Institute of Technology Delhi.
						</div>
						<div className="contact cmn">
							Email :<b> saso@nitdelhi.ac.in</b>
						</div>
						<div className="contact cmn">
							Ph no. : <b>011 33861070</b>
						</div>
						<div className="contact cmn">
							Organiser : <b>
							<a 
								href="https://nitdelhi.ac.in/?page_id=14758"
								target="_blank"
							>
								ALTIUS
							</a>
							 , Sportsclub of NIT Delhi
							</b>
						</div>
						<div className="contact cmn">
							Address : <br/>
							National Institute of Technology Delhi Sector A-7, Institutional Area, Near Satyawadi Raja Harish Chandra Hospital, Narela, Delhi – 110040
						</div>
		  			</div>
		  			<div className="right-footer cmn"> 
			  				<iframe 
			  					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.9622836990966!2d77.1001967146433!3d28.839982881413118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da911cd740e31%3A0xa8d703da2a21a503!2sNit+Delhi!5e0!3m2!1sen!2sin!4v1549281707215" 
			  					frameborder="0" 
			  					className="map"
			  					allowfullscreen
			  				>
			  				</iframe>
		  			</div>

		  			<div className="social-link-cont">
		  				 © 2019 All rights are reserved to ZEAL'19.
		  			</div>
		  		</div>
		);
	}
	componentDidMount(){

	}
}

export default Home;

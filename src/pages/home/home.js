import React, { Component } from 'react';
// o
import {Link} from 'react-router-dom'

import '../../css/pages/home/home.css';
import Background from '../../static/blackcontroller1.png'
import Background1 from '../../static/banner23.jpg'
import Background2 from '../../static/banner2.jpg'



const landStyle = {
	    background: 'url('+ '' + ')  top left fixed',
	    backgroundSize: 'cover',
	}
const secStyle = {
	    background: 'url('+ Background1 + ')  center fixed',
	    backgroundSize: 'cover',
	}
const thiStyle = {
	    background: 'url('+ Background1 + ')  center ',
	    backgroundSize: 'cover',
	}
class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	render() {
		return (
		  <div className="Home">
		  		<div
		  			className="land-main cmn"
		  			style={secStyle}
		  		>	
		  			<div className="main-title">
		  				ZEAL'19
		  			</div>
		  			<div className="main-tag-line">
		  				{/*We <span>Respect</span> , <span>Raid</span> , <span>Attack</span> , never <span>Grief</span>*/}
		  				Annual inter branch sports festival of NIT Delhi
		  				<br/>

		  			</div>
		  			<div className="countdown-timer">
		  				{this.handleTimer()}
		  			</div>
		  			<div id="landing-back">
		  			</div>
		  		</div>

		  </div>
		);
	}
	handleTimer = ()=>{
		let a = ['25','30','20','days','hrs','mins']
		// Set the date we're counting down to
		let countDownDate = new Date("Feb 9, 2019 09:30:00").getTime();
		let now = new Date().getTime();		

		let distance = countDownDate - now;
		// Time calculations for days, hours, minutes and seconds
		a[0] = Math.floor(distance / (1000 * 60 * 60 * 24));
		a[1] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		a[2] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))

		let i = 0
		return a.map((e=>{

			if(i<3){
				i=i+1
				return(
					<div className="countdown-box countdown-font">
						{e}
					</div>
				)
			}
			else{
				i = i+1
				return(
					<div className="countdown-box">
						{e}
					</div>
				)
			}
		}))
	}
}

export default Home;

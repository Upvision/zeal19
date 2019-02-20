import React, { Component } from 'react';

import Events from '../../components/home/events.js'
// o
import {Link} from 'react-router-dom'

import '../../css/pages/home/home.css';
import Background1 from '../../static/banner24-min.jpg'
import GE from '../../components/ge.js'



const secStyle = {
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
		  			<div className="countdown-timer" id="countdown-timer">
		  				{this.handleTimer()}
		  			</div>
		  			<div id="landing-back">
		  			</div>
		  		</div>
		  		<div className="animation-wrapper" id="Events-Wrap">
		  			<div className="line-wrapper1">
		  				<div className="line1">
		  				</div>
		  				<div className="line2">
		  				</div>
		  				<div className="line1">
		  				</div>
		  			</div>
		  			<div className="anim-tit">
		  					EVENTS
		  			</div>
		  			<div className="line-wrapper2">
		  				<div className="line1">
		  				</div>
		  				<div className="line2">
		  				</div>
		  				<div className="line1">
		  				</div>
		  			</div>
		  		</div>
		  		<Events/>
		  		<GE/>
		  </div>
		);
	}
	handleTimer = ()=>{
		return (
			<div className="fest-live">
				9th Feb - 12th Feb
			</div>
		)

	}
	componentDidMount(){
		let el = document.getElementById('Events-Wrap')
		let lines = document.querySelectorAll(".line1"); 
		let lines2 = document.querySelectorAll(".line2"); 

		let status = false

		window.addEventListener('scroll',()=>{
			status = window.scrollY > window.innerHeight/2
			if(status){
				for(let i = 0; i < lines.length; i++) {
					lines[i].className+=' animate'
				}
				for(let i = 0; i < lines2.length; i++) {
					lines2[i].className+=' animate2'
				}
			}
		})
	}
}

export default Home;

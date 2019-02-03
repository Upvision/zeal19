import React, { Component } from 'react';

import '../../css/components/upcoming/event-temp.css';
import Background1 from '../../static/ronaldo1.jpg'

const landStyle = {
	    background: 'url('+ Background1 + ')  top left ',
	    backgroundSize: 'cover',
	}

class EventTemp extends Component {
	constructor(props){
		super(props)
		this.state = {
			expand:false
		}
	}
	render() {
		return (
		  <div className="EventTemp">
		  		<div className="event-temp-main-cont cmn">
			  		<div 
		  				className="event-temp-banner"
		  				style={landStyle}
		  			>
			  		</div>
			  		<div className="event-temp-body cmn">
			  			<div className="event-temp-tit cmn">
			  				FIFA 19 Tournament
			  			</div>
			  			<div className="event-temp-list-tit">
			  				Schedule
			  			</div>
			  			<div className="event-temp-list-body">
			  				31 Jan'19 - 1 Feb'19(Tentative)
			  			</div>
			  			<div className="event-temp-list-tit">
			  				Venue
			  			</div>
			  			<div className="event-temp-list-body">
			  				Lt-1
			  			</div>
			  			<div className="event-temp-list-tit">
			  				Coordinator
			  			</div>
			  			<div className="event-temp-list-body">
			  				Jha Karan (+91-7977308443)
			  			</div>
			  			<div className="event-temp-btn-cont">
			  				<span className="event-temp-btn"
			  						onClick={this.handleClick}
			  				>
			  					{
			  						!this.state.expand
			  						?
			  						'More...'
			  						:
			  						'Less...'
			  					}
			  				</span>
			  			</div>

			  		</div>
			  	</div>
	  			<div className={this.state.expand?'more-expand is-expand cmn':'more-expand cmn'}
	  			>
	  				<div className="event-more-about">
	  					Info
	  				</div>
	  				<div className="event-more-body">
	  					
	  					<b>Entry Fee  : </b> ₹ 100<br/><br/>
	  					<b>Register  : </b> <a href="https://docs.google.com/forms/d/e/1FAIpQLSdCFtVMVK-q5xoFyWET8lXEQSpsnPlt9avP4BcGmHs5HCt3tQ/viewform?vc=0&c=0&w=1" target="_blank">Form</a><br/><br/>
		  				<b>Qualifiers : </b>
		  				Groups of 4 participants will be made.Every participant will get to
						compete with every other participant in the group once so that a total of 6 matches is
						played in each group.<br/>
						The top 2 leaders of the group will make it to the playoffs.<br/>
						Depending on the number of participants,a player might get a 'bye' to manage the
						structure of the tournament.<br/><br/>
						<b>Dates : </b> <br/>
						<b>Venue : </b>
						<br/><br/>
						<b>Playoffs : </b>The playoffs will include Round of 16/14/12,the quarterfinals,the semifinals
						and the finals depending on the number of participants.The top three will be rewarded
						cash prizes depending on the prize pool.<br/><br/>
						<b>Dates : </b> <br/>
						<b>Venue : </b>
						<br/><br/>
	  				</div>
	  				<div className="event-more-about">
	  					Rules
	  				</div>
	  				<div className="event-more-body">
	  					<b>Difficulty Level :</b> Legendary<br/>
						<b>Half Length :</b> 4 minutes, 5 Minutes in Playoffs<br/>
						<b>Specific Controller Setting Exceptions :</b> Legacy Defending prohibited<br/>
						<b>Music Volume :</b> 0<br/>
						<b>Time/Score display :</b> On<br/>
						<b>Camera :</b> Default<br/>
						<b>Radar :</b> 2D<br/>
						<b>HUD :</b> Indicator<br/>
						<b>FIFA Trainer :</b> OFF<br/>
						<b>Weather :</b> Clear<br/><br/>
						Goalkeeper Switching is not allowed<br/>
						Custom tactics are allowed<br/>
						Custom formations are allowed<br/>
						Giving specific instructions to players is prohibited<br/>
						Every player will have to load an updated squads file<br/>
						The rest of the game settings will remain Default.<br/><br/>
	  					<b>Extra Time - </b><br/>
						<b>In Qualifiers : </b> Golden Goal Rules.<br/>
						<b>In the Playoffs : </b> The default extra time of 15+15 mins.<br/><br/>
						A total of 2 pauses can be made during the game excluding the half time pause. The duration
						of a pause should not be of more than 30 secs .<br/><br/>
						<b>
							In case of any conflict, the decision of F.R.A.G is final and binding. Rest of
							the game settings to remain default.
						</b>
	  				</div>
	  			</div>
		  </div>
		);
	}
	handleClick = ()=>{
		this.setState({expand:!this.state.expand})
	}
}

export default EventTemp;

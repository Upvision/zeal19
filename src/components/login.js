import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';


import '../css/components/login.css';

import Banner from '../static/login1.jpg'

const root = {
	    background: 'url('+ Banner + ')  center',
	    backgroundSize: 'cover',
	}

const responseGoogle = (response) => {
  console.log(response);
}
class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			status:3
		}
	}
	render() {
		return (
			<div id="Login">
				<div className="login-cont">
					<div 
						className="login-cls-btn cmn"
						onClick = {this.handleClose}
					>
						x
					</div>
					<div style={root} className="login-banner">
					</div>
					<div className="login-text-cont cmn">
						<div className="text-3 login-quote">
							<b>General information : </b><br/>
							Login is required to register in tournaments.
							<br/>We don't share your data with any third party
						</div>
						<div className="divider"></div>
						<div className="login-btn-cont">
						  {
						  	this.state.status ==1?<span>Something went wrong. Try again.</span>:""
						  }
						  {
						  	this.state.status ==2?
							  "Logging in..."				  
							:
							  <GoogleLogin
							    clientId="963531200243-kqjkocn6447iujuobrb81mlf6sstl2fj.apps.googleusercontent.com"
							    buttonText="Login"
							    onClick={this.handleClick}
							    onSuccess={this.onSuccess}
							    onFailure={this.onFailure}
							    buttonText="Google Login"
							  />						  	

						  }

						</div>
					</div>
				</div>	
			</div>
		);
	}
	handleClose = ()=>{
		let elem = document.getElementById('Login')
		elem.style.transform = "scale(0,0)"
	}
	onSuccess = (response)=>{
		this._facebookCallback(response)
		// this.handleClose()
	}
	onFailure = (response)=>{
		this.setState({status:1})
	}
	handleClick = ()=>{
		this.setState({status:2})
	}
	_facebookCallback = async facebookResponse => {
			const facebookToken = facebookResponse.tokenObj.access_token
			console.log(facebookToken)
			const graphcoolResponse = await this.props.authenticateUserrMutation({variables: { facebookToken }})
			const graphcoolToken = graphcoolResponse.data.authenticateGoogleUser.token
			localStorage.setItem('graphcoolToken', graphcoolToken)
			// window.location.reload()
	}
}
const AUTHENTICATE_FACEBOOK_USER = gql`
  mutation AuthenticateUserrMutation($facebookToken: String!) {
    authenticateGoogleUser(googleToken: $facebookToken) {
      token
    }
  }
`
export default compose(
  graphql(AUTHENTICATE_FACEBOOK_USER, 
  			{ name: 'authenticateUserrMutation' }),
	)(Login);




import React, { Component } from 'react';

import '../../css/components/home/eventcard.css';

import Football from '../../static/football3.jpg'
import Informal from '../../static/informal.jpg'
import Cricket from '../../static/cricket1.jpg'
import Badminton from '../../static/badminton.jpg'
import Kabaddi from '../../static/kab.jpeg'
import Chess from '../../static/chess.jpg'
import Basketball from '../../static/basketball.jpg'
import Volleyball from '../../static/volleyball.jpg'
import Throwball from '../../static/throwball.jpg'
import Athletics from '../../static/athletics.jpg'
import TT from '../../static/tt.jpg'
import Carrom from '../../static/carrom.jpg'

import PdfFootball from '../../static/rules/FOOTBALL.pdf'
import PdfCricket from '../../static/rules/CRICKET.pdf'
import PdfBadminton from '../../static/rules/BADMINTON.pdf'
import PdfKabaddi from '../../static/rules/KABADDI.pdf'
import PdfChess from '../../static/rules/CHESS.pdf'
import PdfBasketball from '../../static/rules/BASKETBALL.pdf'
import PdfVolleyball from '../../static/rules/VOLLEYBALL.pdf'
import PdfThrowball from '../../static/rules/THROWBALL.pdf'
import PdfAthletics from '../../static/rules/ATHLETICS.pdf'
import PdfTT from '../../static/rules/TT.pdf'
import PdfCarrom from '../../static/rules/CARROM.pdf'
import PdfInformal from '../../static/rules/INFORMAL.pdf'



import Button from '../../components/button.js'
import cal from '../../static/1x/outline_event_black_18dp.png'
import cse from '../../static/1x/outline_computer_black_18dp.png'
import rules from '../../static/1x/outline_assignment_black_18dp.png'
import ece from '../../static/1x/outline_memory_black_18dp.png'
import eee from '../../static/1x/outline_nfc_black_18dp.png'
import mtech from '../../static/1x/outline_flash_on_black_18dp.png'
import phd from '../../static/1x/outline_school_black_18dp.png'

import Modal from 'react-awesome-modal';

let Background = {
	"Cricket":Cricket,
	"Football":Football,
	"Carrom":Carrom,
	"Throwball":Throwball,
	"Basketball":Basketball,
	"Chess":Chess,
	"Volleyball":Volleyball,
	"Badminton":Badminton,
	"Kabaddi":Kabaddi,
	"Athletics":Athletics,
	"TableTennis":TT,
	"Informal":Informal
}
let Rules = {
	"Cricket":PdfCricket,
	"Football":PdfFootball,
	"Carrom":PdfCarrom,
	"Throwball":PdfThrowball,
	"Basketball":PdfBasketball,
	"Chess":PdfChess,
	"Volleyball":PdfVolleyball,
	"Badminton":PdfBadminton,
	"Kabaddi":PdfKabaddi,
	"Athletics":PdfAthletics,	
	"TableTennis":PdfTT,
	"Informal":PdfInformal
}

class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
			visible:false,
			width:"340",
			height:"470",
			"ModalContent":[]
		}
	}
	render() {
		let data = this.props.data
		const secStyle = {
		    background: 'url('+ Background[this.props.tit] + ')  top left ',
		    backgroundSize: 'cover',
		}
		return (
			<div className="Eventcard cmn">
				<div className="eventcard-left cmn"
					style={secStyle}	
				>
				</div>
				<div className="eventcard-right cmn">
					<div className="eventcard-tit">
						{this.props.tit}
					</div>
					<div className="eventcard-des">
						{data.des}
					</div>
					<div className="eventcard-but">
						<Button 
							tit="Schedule" 
							icon={cal}
							openModal={()=>this.openModal(data.schedule)}
						/>
						<Button 
							tit="Rules"
							icon={rules}
							openModal={()=>this.handlePdf(Rules[this.props.tit])}
						/>
						<br/>
						<div className="divider">
						</div>
						<div className="team-tit">
							Teams
						</div>
						{this.handleTeams(data.teams)}
					</div>
				</div>
                <Modal 
                	visible={this.state.visible} 
                	width={this.state.width} 
                	height={this.state.height}
                	effect="fadeInUp" 
                	onClickAway={() => this.closeModal()}
                >
                    {this.state.ModalContent}
                </Modal>				
			</div>
		);
	}
	componentDidMount(){
		let wid = window.innerWidth>440?"460":`${window.innerWidth+10}`
		let hgt = window.innerWidth>440?"520":`${window.innerHeight}`

		this.setState({width:wid,height:hgt})
	}
	handlePdf = (url)=>{
			let win = window.open(url, '_blank');
			win.focus();			
	}
    openModal = (foo)=> {

    	// document.body.style.overflowY = "hidden"
    	// document.body.style.height = "100vh"
        this.setState({
            visible : true,
        	ModalContent:this.handleModalContent(foo)
        });
    }
    handleTeams = (Teams)=>{
    	let foo = []
    	let icons = {
    			"CSE":cse,
    			"EEE":eee,
    			"ECE":ece,
    			"MTech/Phd":mtech,
    			"MTech":mtech,
    			"Phd":phd
    	}
    	if (this.props.tit!='Athletics' & this.props.tit!='Informal' ){
	    	Object.keys(Teams).forEach(key=>{
	    		foo.push(
					<Button 
						tit={key} 
						icon={icons[key]}
						openModal={()=>this.openModal(Teams[key])}
					/>
	    		)
	    	})
	    	return foo
    	}
    	else{
    		return (<p>Open event</p>)
    	}
    }
    closeModal = ()=> {
    	// document.body.style.overflowY = "hidden"
    	// document.body.style.height = "initial"

        this.setState({
            visible : false
        });
    }
    handleModalContent =(foo)=>{
		
		return(
			<div className="table-wrapper cmn">
	            <div 
	            	className="close-btn-cont cmn"
	            	onClick={() => this.closeModal()}
	            >
	            	<span>x</span>
	            </div>
        		<div className="main-table-cont">
        			{
        				foo == null?
        				"Coming soon ..."
        				:
		            	this.handleTypeTable(foo)
        			}
    			</div>
    			<div className="bottom-margin">
    			</div>
	        </div>
		)    	
    }
    handleTypeTable = (foo)=>{
    	let a = []
    	let b= []
    	let i = 0
    	let promise1 = null
    	let promise2 = null
		let firstKey = Object.keys(foo)[0]
		// console.log(firstKey)
		if(firstKey=='Day1' | firstKey=='Boys'|firstKey=='Girls'){
			Object.keys(foo).forEach(key=>{
				a.push(<div><br/><b>{key}</b><br/><br/></div>)
		    	Object.keys(foo[key]).forEach(key2=>{
		    		i=!i
		    		a.push(
						<div 
		    				className={i?"table-row even":"table-row odd"}
		    			>
		    				<div className="table-col cmn" >
		    					{foo[key][key2]}
		    				</div>
		    				<div className="table-col cmn">
		    					{key2}
		    				</div>
		    			</div>
		    		)
		    	})
			})
			return a
		}   
		else{
			a = this.handleTable(foo)
			return a
		} 	
    }
    handleGE = (e,roll)=>{
		let elem = document.getElementById('GE')
		
		if(roll=='161210008'){
			if(e.detail===3){
				console.log(roll,roll=='161210008')
				elem.style.display='flex'
				document.body.style.overflow='hidden'
			}
		}
    }
    handleTable = (foo)=>{
    	let a = []
    	let i = 0
    	Object.keys(foo).forEach(key=>{
    		i=!i
    		a.push(
				<div 
    				className={i?"table-row even":"table-row odd"}
    			>
    				<div className="table-col cmn"onClick={(e)=>this.handleGE(e,key)}>
    					{foo[key]}
    				</div>
    				<div className="table-col cmn">
    					{key}
    				</div>
    			</div>
    		)
    	})

    	return a
    }
}

export default Home;

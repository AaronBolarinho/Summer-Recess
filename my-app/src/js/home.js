import React, { Component } from 'react'
//
import '../css/App.css'
//
import DayBeach from './theBeach.mp4'
import NightBeach from './NightBeach.mp4'
//
import HomeImage from '../css/BubbleFord.png'
import Bubbles from '../css/bubbles.png'
import FishButton from '../css/FishyButton.png'
//
import Timer from 'react-compound-timer'
//
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	timeSince: 0,
    	modal: false
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  getTimes = () => {

  	// ---- get time elapsed before today
  	let date1 = new Date(2019, 5, 7, 0, 0, 0)
  	let date2 = new Date()
  	console.log(date1)
  	console.log(date2)

  	const diffTime = Math.abs(date2.getTime() - date1.getTime());
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
	console.log(diffDays);

	let miliNum = 86400000 * diffDays

	// ---- get todays elapsed time
	function getSecondsToday() {
	  let now = new Date();

	  // create an object using the current day/month/year
	  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	  let diff = now - today; // ms difference
	  return Math.round(diff / 1000); // make seconds
	}

	let TodaysElapsedTime = getSecondsToday() * 1000

	console.log('these are todays seconds', getSecondsToday())

	let finalTime = miliNum + TodaysElapsedTime

	this.setState({ timeSince: finalTime })
  }

  renderTitle = () => {
  	let title = 
  	<div>
	  	<div className="centerText title textWhite">
	  		<div className="animated infinite wobble delayAnimation displayInline">
	  			<span>&#93;</span>
	  		</div>
	  		<div className="displayInline">
	  			<span> Doug Ford's</span>
	  		</div>
	  		<div className="animated infinite heartBeat delayAnimation displayInline">
	  			<span>&#125;</span>
	  		</div>
	  		<div>
	  			<p> &#34;Summer&#34; Recess </p>
	  		</div>
	  	</div>
	  	<div className="imageContainer">
	  		<img src={HomeImage} alt="Doug Ford Swimming" className="FordImage"/>
	  		<img src={Bubbles} alt="some bubbles" className="bubbles"/>
	  	</div>
  	</div>

  	return title
  }

  renderTimer = () => {
  	let time = this.state.timeSince
  	let timer

  	if(time) {
  		console.log('the time has been set',time)
  		timer =
        <div className='clock centerText'>
          <Timer
			    initialTime={time}
			>
			    {({ start}) => (
			        <React.Fragment>
			            <div>
			                <Timer.Days /> Days &#00;
			                <Timer.Hours /> Hours &#00;
			                <Timer.Minutes /> Minutes &#00;
			                <Timer.Seconds /> Seconds &#00;
			            </div>
			        </React.Fragment>
			    )}
			</Timer>
        </div>
  	}
    return timer
  }

  renderModal = () => {
  	let modal = 
  	<div>
        <img src={FishButton} onClick={this.toggleModal} alt="Scared Fishy" className=""/>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>

      return modal

  }

  componentDidMount() {
  	this.getTimes()
  }

  render() {
    console.log('This is the state', this.state)
      return (
      	<div>
      		<div>
      			<video id='background-video' loop autoPlay muted className='video'>
		          <source src={DayBeach} type='video/mp4' />
		        </video>
      			{this.renderTitle()}
			    {this.renderTimer()}
			    <div className="stripsDiv">
			    	<div className="secondStrip">
				    	<p className="newsQuote">
				    		"Since June 7th, 2018, the Ontario government has moved at an unprecedented pace. <br></br>The government intends to move a motion tomorrow to adjourn the House until October 28th, 2019..."
				    	</p>
				    	<img src={FishButton}  alt="Scared Fishy" className="NewsQuoteFish"/>
				    </div>
				    <div className="thirdStrip">
				    	<div>
				    		<video id='background-video' loop autoPlay muted className='video video2'>
					          <source src={NightBeach} type='video/mp4' />
					        </video>
					        <div className="thirdStripTitle">
						        <div className="animated infinite wobble delayAnimation displayInline">
						  			<span>&#93;</span>
						  		</div>
						        <p className="displayInline"> Doogie's Breesy</p>
						        <div className="animated infinite heartBeat delayAnimation displayInline">
						  			<span>&#125;</span>
						  		</div>
						  		<p> Summer Haiku</p>

						  		<div className="haiku">
						  			<p>The Polls Are Sinking</p>
						  			<p>Patios and Buck-A-Beer</p>
						  			<p>The Polls are Rising</p>
						  		</div>
					  		</div>
				    	</div>
				    </div>

				    {/* <div className="fourthStrip"> */}
				    {/* 	 */}
				    {/* </div> */}
				    	
				    </div>
      		</div>
	    </div>
      )
  }
}

export default Home

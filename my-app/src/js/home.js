import React, { Component } from 'react'
//
import '../css/App.css'
//
import Video from './theBeach.mp4'
//
import Timer from 'react-compound-timer'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	timeSince: 0
    }
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
  	<div className='d-flex container'>
  		<div>
	    	<video id='background-video' loop autoPlay muted className='video'>
	          <source src={Video} type='video/mp4' />
	        </video>
        </div>
	  	<div className="centerText title textWhite">
	  		<div className="animated infinite wobble delayAnimation displayInline">
	  			<span>&#93;</span>
	  		</div>
	  		<div className="displayInline">
	  			<span> Summer Recess</span>
	  		</div>
	  		<div className="animated infinite heartBeat delayAnimation displayInline">
	  			<span>&#125;</span>
	  		</div>
	  		<div>
	  			<p> for Ontario's Legislature</p>
	  		</div>
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
			                <Timer.Days /> days &#00;
			                <Timer.Hours /> hours &#00;
			                <Timer.Minutes /> minutes &#00;
			                <Timer.Seconds /> seconds &#00;
			            </div>
			        </React.Fragment>
			    )}
			</Timer>
        </div>
  	}
    return timer
  }

  componentDidMount() {
  	this.getTimes()
  }

  render() {
    console.log('This is the state', this.state)
      return (
      	<div>
	      {this.renderTitle()}
	      {this.renderTimer()}
	    </div>
      )
  }
}

export default Home

import React, { Component } from 'react'
//
import '../css/App.css'
//
import Video from './theBeach.mp4'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
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
	  			<p> for Ontario's Parliment</p>
	  		</div>
	  	</div>
  	</div>

  	return title
  }

  componentDidMount() {
  }

  render() {
    console.log('This is the state', this.state)
      return (
      	<div>
	      {this.renderTitle()}
	    </div>
      )
  }
}

export default Home

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

  componentDidMount() {
  }

  render() {
    console.log('This is the state', this.state)
      return (
        <div>
        	<video id='background-video' loop autoPlay muted className='video'>
	          <source src={Video} type='video/mp4' />
	        </video>
        </div>
      )
  }
}

export default Home

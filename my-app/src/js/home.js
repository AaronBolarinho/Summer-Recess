import React, { Component } from 'react'
//
import '../css/App.css'
//

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
        	<p> This is a test</p>
        </div>
      )
  }
}

export default Home

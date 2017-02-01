import React from 'react'
import ReactDOM from 'react-dom'

class Keypad extends React.Component {
  constructor(){
    super()

    this.log = this.log.bind(this)
  }

  log(){
    console.log("Entering password...")
  }
  
  render() {
    return (
      <input type="password" onKeyUp={this.log}/>
    )
  }
}


module.exports = Keypad

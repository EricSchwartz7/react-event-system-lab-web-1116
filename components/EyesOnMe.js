import React from 'react'
import ReactDOM from 'react-dom'

class EyesOnMe extends React.Component {
  constructor(){
    super()

    this.good = this.good.bind(this)
    this.hey = this.hey.bind(this)
  }

  good(){
    console.log("Good!")
  }

  hey(){
    console.log("Hey! Eyes on me!")
  }
  
  render() {
    return (
      <button onFocus={this.good} onBlur={this.hey}/>
    )
  }
}


module.exports = EyesOnMe

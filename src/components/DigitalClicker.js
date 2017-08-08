// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }


  click = () => {
    debugger
    let timesClicked = this.state.timesClicked + 1
    this.setState({
      timesClicked
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.click.bind(this)}>{this.state.timesClicked}</button>
      </div>
    )
  }

} // end class

export default DigitalClicker;

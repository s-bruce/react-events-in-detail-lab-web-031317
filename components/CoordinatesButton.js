import React from 'react'

class CoordinatesButton extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const coordinates = [e.screenX, e.screenY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return(
      <button onClick={this.handleClick}>Click Me!</button>
    )
  }
}

export default CoordinatesButton

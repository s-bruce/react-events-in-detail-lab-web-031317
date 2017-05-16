import React from 'react'

class DelayedButton extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }

  render() {
    return(
      <button onClick={this.handleClick}>Click Me!</button>
    )
  }
}

export default DelayedButton

import React from 'react'
import PropTypes from 'prop-types'

export class Toggle extends React.Component {
  state = {
    on: this.props.initial
  }

  setOn = on =>
    this.setState({
      on: !!on
    })

  toggle = () =>
    this.setState(prev => ({
      on: !prev.on
    }))

  render() {
    return this.props.children({ on: this.state.on, setOn: this.setOn, toggle: this.toggle })
  }
}

Toggle.propTypes = {
  initial: PropTypes.bool,
  children: PropTypes.func.isRequired
}

Toggle.defaultProps = {
  initial: false
}

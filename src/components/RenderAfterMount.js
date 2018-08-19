import React from 'react'

export default class extends React.Component {
  state = {
    render: false
  }

  componentDidMount() {
    this.setState({
      render: true
    })
  }

  render() {
    /* eslint-disable react/prop-types */
    return this.state.render && this.props.children
  }
}

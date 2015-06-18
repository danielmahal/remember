import React from 'react'

export default class Loader extends React.Component {
  raw() {
    return this.props.data
  }

  render() {
    const type = this.props.type

    const style = {
      maxWidth: '60em'
    }

    return (
      <li style={style}>{this[type]()}</li>
    )
  }
}

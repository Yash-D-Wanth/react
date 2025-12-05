import React, { Component } from 'react'

export class Props extends Component {
  render() {
    const {name} = this.props
    return (
      <>
      <h1>{name}</h1>
      </>
    )
  }
}

export default Props
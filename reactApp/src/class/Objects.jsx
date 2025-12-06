import React, { Component } from 'react'

export class Objects extends Component {
  render() {
    return (
      <>
        <h1>{this.props.characters.name} from {this.props.characters.series}</h1>
      </>
    )
  }
}

export default Objects
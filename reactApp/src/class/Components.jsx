import React, { Component } from 'react'

export class Components extends Component {
  render() {
    return (
      <>
      <ul>
        <li >Name:{this.props.name}</li>
        <li >Age:{this.props.age}</li>
        <li >Series:{this.props.series}</li>
      </ul>
      </>
    )
  }
}

export default Components
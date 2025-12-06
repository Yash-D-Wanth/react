import React, { Component } from 'react'

export class Map extends Component {
  render() {
    const numbers=[1,2,3,4,5]
    return (
      <>
      {numbers.map((number)=><h2 key={number}>{3.14*number}</h2>)}
      </>
    )
  }
}

export default Map
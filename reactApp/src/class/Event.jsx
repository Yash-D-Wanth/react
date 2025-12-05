import React, { Component } from 'react'

export class Event extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
        // this.increment=this.increment.bind(this);
    }
    increment(){  //arrow function can be used to avoid binding [increment=()=>{}]
        this.setState({count:this.state.count+5})
    }
  render() {
    return (
      <>
      <h1>count {this.state.count}</h1>
        <button onClick={()=>this.increment()}>Increment</button>
      </>
    )
  }
}

export default Event
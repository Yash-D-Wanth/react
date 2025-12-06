import React, { Component } from 'react'

export class Conditional extends Component {
  render() {
    const isLoggedIn=true;
    let output;
    if(isLoggedIn){
      output= <h1>Welcome Back User</h1>
    }
    else{
      output=<h1>Please Login</h1>
    }
    return (<div>
      {output}
    </div>
    )
  }
}

export default Conditional
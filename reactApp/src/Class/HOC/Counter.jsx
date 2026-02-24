import React from 'react'
const Counter=(HigherOrder)=>{
    class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState(prevState=>({
            count:prevState.count+1
        }))
    }
    render(){
        return(
            <>
            <HigherOrder count={this.state.count} increment={this.increment}/>
            </>
        )
    }
}
return Counter
}
export default Counter
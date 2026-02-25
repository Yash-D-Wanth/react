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
        console.log(this.name)
        return(
            <>
            <HigherOrder name={"yashwanth"} count={this.state.count} increment={this.increment} { ... this.props}/>
            </>
        )
    }
}
return Counter
}
export default Counter
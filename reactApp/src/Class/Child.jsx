import {Component} from 'react'
export default class Child extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            <h1>{this.props.count}</h1>
            <button onClick={()=>this.props.function(2)}>+</button>
            </>
        )
    }
}
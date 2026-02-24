import React,{Component} from 'react'
import Counter from './Counter'
class Button extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            <h1>{this.props.count}</h1>
            <button onClick={this.props.increment}>+</button>
            </>
        )
    }
}
export default Counter(Button)
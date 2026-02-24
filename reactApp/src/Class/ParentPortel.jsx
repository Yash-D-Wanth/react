import React,{Component} from 'react'
import ChildPortel from './ChildPortel'
export default class ParentPortel extends Component{
    constructor(){
        super()
        this.state={
            number:0
        }
    }
    onIncrement=()=>{
        this.setState({
            number:this.state.number+1
        })
    }
    render(){
        return(
            <> 
                <ChildPortel number={this.state.number}/>
                <button onClick={this.onIncrement}>+</button>
            </>
        )
    }
}
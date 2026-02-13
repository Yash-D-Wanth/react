import {Component} from 'react';
import Child from './Child'
export default class Event extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    increment=(num)=>{
        this.setState({
            count:this.state.count+num
    })
    }
    render(){
        return(
            <>
                <Child count={this.state.count} function={this.increment}/>
            </>
        )
    }
}
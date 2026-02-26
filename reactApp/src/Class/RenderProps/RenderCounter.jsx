import React,{Component} from 'react'

class RenderCounter extends Component{
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
                {this.props.Children(this.state.count, this.increment)}
            </>
        )
    }
}

export default RenderCounter
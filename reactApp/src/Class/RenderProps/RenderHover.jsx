import React,{Component} from 'react'

class RenderHover extends Component{
    render(){
        return(
            <>
                <button onMouseOver={this.props.increment}>{this.props.count}</button>
            </>
        )
    }
}

export default RenderHover
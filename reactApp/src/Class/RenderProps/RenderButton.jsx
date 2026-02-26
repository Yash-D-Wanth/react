import React,{Component} from 'react'

class RenderButton extends Component{
    render(){
        return(
            <>
                <button onClick={this.props.increment}>{this.props.count}</button>
            </>
        )
    }
}

export default RenderButton
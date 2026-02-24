import React,{Component} from 'react'
import ReactDOM from 'react-dom'
export default class FirstPortal extends Component{
    constructor(){
        super()
    }
    render(){
        return ReactDOM.createPortal(
            <>
            <h1 style={{visibility: this.props.hidden ? 'hidden' : 'visible'}}>
                {this.props.comment}
            </h1>
            </>,document.getElementById('portal-root')
        )
    }
}
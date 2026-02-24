import React,{Component} from 'react'
import ReactDOM from 'react-dom'
export default class ChildPortel extends Component{
    constructor(){
        super()
    }
    render(){
        return ReactDOM.createPortal(
            <>
                <h1>{this.props.number}</h1>
            </>,
            document.getElementById('portal-root')
        )
    }
}
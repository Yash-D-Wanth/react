import {Component} from 'react'
import FirstPortal from './FirstPortal'
export default class FirstParent extends Component{
    constructor(){
        super()
        this.state={
            hidden:false
        }
    }
    action=()=>{
        this.setState({
            hidden: !this.state.hidden
        })
    }
    render(){
        return(
            <> 
                <FirstPortal comment="hi" hidden={this.state.hidden}/>
                <button onClick={this.action}>do it</button>
            </>
        )
    }
}
import React , {Component} from 'react'
import InputRef from './InputRef'
class InputFocus extends Component{
    constructor(){
        super()
        this.setComponent=React.createRef()
    }
    executeComponent=()=>{
        this.setComponent.current.focusInput()
    }
    render(){
        return(
            <>
                <InputRef ref={this.setComponent}/>
                <button onClick={this.executeComponent}>click</button>
            </>
        )
    }
}
export default InputFocus
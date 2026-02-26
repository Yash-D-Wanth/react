import React,{Component} from 'react'
// import {Provider} from './Context'
class ComponentA extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            {/* <Provider value={"yashwanth"}> */}
                <h1>Component A</h1>
            {/* </Provider> */}
            </>
        )
    }
}
export default ComponentA
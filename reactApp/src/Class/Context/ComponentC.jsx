import React,{Component} from 'react'
import {Consumer} from './Context'
class ComponentC extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <Consumer>
                {username=>{
                    return(
                        <>
                        <h1>component C {username}</h1>
                        </>
                    )
                }}
            </Consumer>
        )
    }
}
export default ComponentC
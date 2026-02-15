import {Component} from 'react'
import LifeCycleB from './LifeCycleB'
export default class LifeCycleA extends Component{
    constructor(){
        super()
            console.log("from constructor A")
            this.state={
                name:"yashwanth"
            }
    }
    static getDerivedStateFromProps(props,state){
        console.log("from getDerivedStateFromProps A")
        return null
    }
    componentDidMount(){
        console.log("from ComponentDidMount A")
    }
    render(){
        {console.log("render A")}
        return(
            <>
            <LifeCycleB/>
            </>
        )
    }
}
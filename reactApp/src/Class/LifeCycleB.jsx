import {Component} from 'react'
// import LifeCycleB from './LifeCycleB'
export default class LifeCycleB extends Component{
    constructor(){
        super()
            console.log("from constructor B")
            this.state={
                name:"yashwanth"
            }
    }
    static getDerivedStateFromProps(props,state){
        console.log("from getDerivedStateFromProps B")
        return null
    }
    componentDidMount(){
        console.log("from ComponentDidMount B")
    }
    render(){
        {console.log("render B")}
        return(
            <>
            </>
        )
    }
}
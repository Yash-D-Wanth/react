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
    shouldComponentUpdate(nextProps,nextState){
        console.log("from shouldComponentUpdate A")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("from getSnapshotBeforeUpdate A")
        return null;
    }
    componentDidUpdate(){
        console.log("from componentDidUpdate A")
    }
    componentDidMount(){
        console.log("from ComponentDidMount A")
    }
    render(){
        {console.log("render A")}
        return(
            <>
            <LifeCycleB/>
            <button onClick={()=>this.setState({name:"jon snow"})}>show</button>
            </>
        )
    }
}
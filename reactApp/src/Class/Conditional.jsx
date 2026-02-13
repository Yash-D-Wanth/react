import {Component} from 'react'
export default class Conditional extends Component{
    constructor(){
        super()
        this.state={
            isloggedIn:true
        }
    }
    change=()=>{
        this.setState({
            isloggedIn:!isloggedIn
        })
    }
    render(){
        if(isloggedIn){
            return(<p>hello yashwanth</p>)
        }
        else{
            return(<p>hello guest</p>)
        }
    }
}
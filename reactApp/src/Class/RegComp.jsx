import {Component} from 'react'
export default class RegComp extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("regular component")
        return(
            
            <>
            <p>from RegComponent {this.props.name}</p>
            </>
        )
    }
}
import {Component} from 'react'
export default class RegComp extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            {console.log(`regular component ${this.props.name}`)}
            </>
        )
    }
}
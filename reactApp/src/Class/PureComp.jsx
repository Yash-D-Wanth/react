import {PureComponent} from 'react'
export default class PureComp extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        console.log("pure Component")
        return(
            <>
            <p>from pureComponent {this.props.name}</p>
            </>
        )
    }
}
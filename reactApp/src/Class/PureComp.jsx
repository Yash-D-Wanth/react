import {PureComponent} from 'react'
export default class PureComp extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
               {console.log(`pure component ${this.props.name}`)}
            </>
        )
    }
}
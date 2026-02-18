import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'
// import {PureComponent} from 'react'
import {Component} from 'react'
export default class ParentComp extends Component{
    constructor(props){
        super()
        this.state={
        //    count:1
        name:"yashwanth"
        }
    }
    hi=()=>{
            setInterval(()=>{
                this.setState({
                //    count:this.state.count+1
                name:"yashwanth"
                })
            },2000)
    }
    render(){
        return(
            <>
            {console.log(`******** parent Component ****************`)}
            <PureComp name={this.state.name}/>
            <RegComp name={this.state.name}/>
            <MemoComp name={this.state.name}/>
            <button onClick={this.hi}>On</button>
            </>
        )
    }
}
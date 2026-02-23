import React,{Component} from 'react'
class RefsDemo extends Component{
    constructor(){
        super()
        this.inputRef=React.createRef()
        this.cbRef=null;
        this.setCbRef=(element)=>{
            this.cbRef=element
        }
    }
    componentDidMount(){
        this.inputRef.current.focus()
        // if(this.cbRef){
        //     this.cbRef.focus()
        // }
        // console.log(this.inputRef)
    }
    clickHandler=()=>{
        console.log(this.inputRef.current.value)
        console.log(this.cbRef.value)
    }
    render(){
        return(
            <>
            <label>for ref:</label><br></br>
            <input type="text" ref={this.inputRef}/><br/>
            <label>for cb ref:</label><br/>
            <input type="text" ref={this.setCbRef}/>
            <button onClick={this.clickHandler}>click</button>

            </>
        )
    }
}
export default RefsDemo
import react,{Component} from 'react'
class RefsDemo extends Component{
    constructor(){
        super()
        // this.inputRef=React.createRef()
        this.cbRef=null
        this.setCbRef=(element)=>{
            this.cbRef=element
        }
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    clickHandler=()=>{
        // alert(this.inputRef.current.value)
        console.log(this.cbRef.value)
    }
    render(){
        return(
            <>
            <label>for ref:</label><br/>
            <input type="text" ref={this.inputRef}/>
            <br></br>
            <label>for Call back Ref:</label><br/>
            <input type="text" ref={this.setCbRef}/><br/>
            <button onClick={this.clickHandler}>click</button>
            </>
        )
    }
}
export default RefsDemo
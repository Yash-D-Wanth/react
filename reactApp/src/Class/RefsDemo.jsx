import react,{Component} from 'react'
class RefsDemo extends Component{
    constructor(){
        super()
        // this.inputRef=react.createRef()
        this.cbRef=null
        this.setCbRef=(element)=>{
            this.cbRef=element
        }
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    execute=()=>{
        // console.log(this.inputRef.current.value)
        console.log(this.cbRef.value)
    }
    render(){
        return(
            <>
            <label>for ref:</label>
            <input type="text" ref={this.inputRef}/>
            <label>for callback Ref:</label>
            <input type="text" ref={this.setCbRef}/>
            <button onClick={this.execute}>click</button>
            </>
        )
    }
}
export default RefsDemo
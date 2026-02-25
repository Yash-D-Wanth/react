import react,{Component} from 'react'
import Counter from './Counter'
class Hover extends Component{
    constructor(){
        super()
    }
    render(){
        console.log(this.props.name)
        return(
            <>
            {/* {console.log(this.props.name)} */}
            <h1>{this.props.count}</h1>
            <button onMouseOver={this.props.increment}>{this.props.name}+</button>
            </>
        )
    }
}
export default Counter(Hover)
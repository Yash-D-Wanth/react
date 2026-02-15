import {Component} from 'react'
export default class FormChild extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <form>
                <label>username:</label>
                <input type="text" value={this.props.name} onChange={this.props.forName}/>
                <br></br>
                <select value={this.props.country} onChange={this.props.forCountry}>
                    <option value="india">india</option>
                    <option value="america">america</option>
                    <option value="russia">russia</option>
                </select><br></br>
                <input type="radio" value="Male" checked={this.props.gender==="Male"} name="gender" onChange={this.props.forGender}/>
                <label>male</label>
                <input type="radio" value="Female" checked={this.props.gender==="Female"} name="gender" onChange={this.props.forGender}/>
                <label>female</label><br></br>
                <button type='submit'>submit</button>
            </form>
            </>
        )
    }
}
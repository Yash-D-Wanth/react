import {Component} from 'react'
export default class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            skills:""
        }
    }
    handleNameChange=(event)=>{
        this.setState({name:event.target.value})
    }
    handleEmailChange=(event)=>{
        this.setState({email:event.target.value})
    }
    handleSkillsChange=(event)=>{
        this.setState({skills:event.target.value})
    }
    render(){
        return(
            <>
            <Form>
                <label>Name</label>
                <input type="text" value={this.state.name}/>
                <label>Email</label>
                <input type="email" value={this.state.email}/>
                <label>Password</label>
                <select value={this.state.skills}>
                    <option value="">Select</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
            </Form>
            </>
        )
    }
}

import { Component } from 'react'
import FormChild from './FormChild'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            gender: "",
            skills: "",
            country: "react",
        }
    }
    handleSkill = (event) => {
        this.setState({
            skills: event.target.value
        })
    }
    handleGender = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleCountry = (event) => {
        this.setState({
            country: event.target.value
        })
    }
    render() {
        return (
            <>
                <FormChild name={this.state.name} email={this.state.email}
                    gender={this.state.gender} skills={this.state.skills} country={this.state.country}
                    forName={this.handleName} forEmail={this.handleEmail}
                    forGender={this.handleGender} forSkills={this.handleSkill}
                    forCountry={this.handleCountry} />
            </>
        )
    }
}
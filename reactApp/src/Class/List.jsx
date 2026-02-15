import { Component } from 'react'
import ListChild from './ListChild'
export default class List extends Component {
    constructor() {
        super()
        this.state = {
            persons: [
                { name: "yashwanth", skills: "javascript", sports: ["tennis", "volleyball"] },
                { name: "kaushik", skills: "python", sports: ["volleyball", "cricket", "tennis", "ps"] }
            ]
        }
    }
    render() {
        return (
            <>
                <ListChild persons={this.state.persons}/>
            </>
        )
    }
}
import { Component } from 'react'
export default class ListChild extends Component {
    render() {
        return (
            <>
                {this.props.persons.map((person, index) => (
                    <div key={index}>
                        <h3>{person.name}</h3>
                        <p>Skills: {person.skills}</p>
                        <ul>
                            {person.sports.map((sport, key) => (
                                <li key={key}>{sport}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </>
        )
    }
}
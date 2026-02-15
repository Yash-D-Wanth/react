
import { Component } from 'react'
export default class Conditional extends Component {
    constructor() {
        super()
        this.state = {
            isloggedIn: true
        }
    }
    change = () => {
        this.setState({
            isloggedIn: !this.state.isloggedIn
        })
    }
    render() {
        //variable element
        let output;
        if (this.state.isloggedIn) {
            output = <p>welcome yashwanth</p>
        }
        else {
            output = <p>welcome guest</p>
        }
        return (
            <>
                {output}
                <button onClick={this.change}>change</button>
            </>
        )
    }
}
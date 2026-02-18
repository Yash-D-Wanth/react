import { Component } from "react";
import RegComp from './RegComp'
import PureComp from './PureComp'
export default class ParentComp extends Component {
    constructor() {
        super()
        this.state = {
            name: "yashwanth"
        }
    }
    componentDidMount() {
        // Interval logic moved to button
    }
    handleClick = () => {
        setInterval(() => {
            this.setState({
                name: "yashwanth"
            })
        }, 2000)
    }
    render() {
        console.log("******** parent component ************")
        return (
            <>
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
                <button onClick={this.handleClick}>Start Interval</button>
            </>
        )
    }
}
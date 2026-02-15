import { Component } from 'react'
export default class Conditional extends Component {
    constructor() {
        super()
        this.state = {
            isloggedIn: true
        }
    }
    change=()=>{
        this.setState({
            isloggedIn:!this.state.isloggedIn
        })
    }
    render() {
        //using if-else
        // if (this.state.isloggedIn) {
        //     return (
        //         <>
        //             <p>hello yashwanth</p>
        //             <button onClick={this.change}>change</button>
        //         </>
        //     )
        // }
        // else {
        //     return (<>
        //     <p>hello guest</p>
        //     <button onClick={this.change}>change</button>
        //     </>)
        // }

        //using ternary operator
        // return(
        //     <>
        //     {this.state.isloggedIn?<p>welcome yashwanth</p>:<p>welcome guest</p>}
        //     <button onClick={this.change}>log in</button>
        //     </>
        // )

       //variable element
       let output;
       if(this.state.isloggedIn){
        output=<p>welcome yashwanth</p>
       }
       else{
        output=<p>welcome guest</p>
       }
       return(
        <>
        {output}
        <button onClick={this.change}>change</button>
        </>
       )
    }
}
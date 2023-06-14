import React, { Component } from "react";



class Name extends Component {
    constructor() {
        super()
        this.state = {
            name: "sagar sangwan"
        }
    }
    Changename = () => {
        // this.setState({
        //     // name: "changed Name sagar "
        // })
        if (this.state.name === "sagar sangwan") {
            this.setState({
                name: "sagar"
            })
        }
        else {
            this.setState({
                name: "sagar sangwan"
            })
        }

    }
    render() {
        return (
            <div className="row">
                <div className="col">
                    <h1>{this.state.name}</h1>
                    <button onClick={this.Changename} className="btn btn-success">change name </button>
                </div>
            </div>
        )
    }
}


export default Name
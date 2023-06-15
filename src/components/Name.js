import React, { Component } from "react";

import { Fragment } from "react";

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
        return (<>
            <h1>{this.state.name}</h1>
            <button onClick={this.Changename} className="btn btn-success">change name </button>
        </>
        )
    }
}


export default Name
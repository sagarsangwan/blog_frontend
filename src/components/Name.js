
import React, { Component } from 'react';


class Name extends Component {
    constructor() {
        super()
        this.state = {
            name: "Sagar"
        }
    }
    changeName = () => {
        this.setState({
            name: "Sagar Sangwan"
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <button className="btn btn-primary" onClick={this.changeName}>
                    click to change name
                </button>
            </div>
        )
    }
}

export default Name
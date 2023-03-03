import React, { Component } from "react";

class MyClass extends Component {

    render() {
        return (
            <div>
                <h1>hi, my name is {this.props.name} creating first class</h1>
                <button onClick={this.props.clicked}>click me </button>
            </div>
        )
    }
}

export default MyClass
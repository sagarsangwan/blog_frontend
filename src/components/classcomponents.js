import React, { Component } from "react";
// import hello from './hello'

class MyFirstClass extends Component {
    // Clickme() {
    //     alert('clicked by class button')
    // }
    render() {
        return (
            <div className="row">
                < div className="col">
                    <h1>Hi, this is my first class components and my email is {this.props.email} </h1>
                    <button className="btn btn-primary" onClick={this.props.Clickme}> click me class</button>
                </div>
            </div>
        )
    }
}

export default MyFirstClass;

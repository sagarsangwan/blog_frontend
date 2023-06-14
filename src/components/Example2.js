import React, { Component } from 'react'

class Example2 extends Component {
    Myelements(names) {
        return (
            names.map((name) => <div key={name}> {name}</div>
            )
        )
    }
    render() {
        return (
            <div className='row'>
                <div className='col'>
                    <h1>{this.Myelements(this.props.names)}</h1>
                </div>

            </div>
        )
    }
}

export default Example2

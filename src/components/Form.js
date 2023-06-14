import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
        }
    }
    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <div className='row'>
                <div className='col'>
                    <input className='form-control' value={this.state.username} type='text' placeholder='enter your username' onChange={this.usernameHandler} />
                    <input className='form-control mt-2' value={this.state.password} type='password' placeholder='enter your password' onChange={this.passwordHandler} />
                    <button type='submit' className='btn btn-primary mt-2'>click me</button>

                </div>
            </div>
        )
    }
}

export default Form

import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            posts: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then(
            Response => Response.json()
        ).then(
            data => this.setState({ posts: data })
        )
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
    allPosts = (posts) => {
        return (
            posts.map((post) => <div className='col-12 mt-3' key={post.id}> {post.title} </div>
            ))
    }


    render() {
        var { posts } = this.state
        return (
            <div className='row'>
                <div className='col'>
                    <input className='form-control' value={this.state.username} type='text' placeholder='enter your username' onChange={this.usernameHandler} />
                    <input className='form-control mt-2' value={this.state.password} type='password' placeholder='enter your password' onChange={this.passwordHandler} />
                    <button type='submit' className='btn btn-primary mt-2'>click me</button>

                </div>
                <div className='row'>
                    {posts.map(
                        (post) => <div className='col-12' key={post.id} > {post.title} </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Form

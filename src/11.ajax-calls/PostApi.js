import React, { Component } from 'react'

export class PostApi extends Component {
    constructor(){
        super()

        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => this.setState({posts: data}))
    }

  render() {
    return (
      <React.Fragment>
          <h2>Posts </h2>
          <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))
                }
            </tbody>
          </table>
      </React.Fragment>
    )
  }
}

export default PostApi
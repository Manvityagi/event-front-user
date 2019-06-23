import React, {Component} from 'react';
import axios from 'axios'

class List extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({
                posts:res.data.slice(0,10)
            })
        })
    }
    
    render(){
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card pink" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                ) 
            })
        ) : (
            <div className="center">No Event yet!</div>
            )
        return(
            <div className="container">
                <h4 className="center">Events</h4>
                {postList}
            </div>
        )
    }
}
export default List ;
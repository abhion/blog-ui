import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Posts extends React.Component{
    constructor(){
        super();
        this.state ={
            postList: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    postList: res.data
                })
            })
    }

    render() {
        const postListEl = this.state.postList.map(post => <li key={post.id}> <Link to={`/post/${post.id}`}>{post.title}</Link> </li>)
        return (
            <div>
                <h3>Posts: { postListEl.length }</h3>
                <ul>
                    {postListEl}
                </ul>
            </div>
        );
    }
}

export default Posts;
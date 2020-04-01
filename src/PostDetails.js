import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PostDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            post: {},
            comments: [],
            user: {}
        }
    }
    componentDidMount() {
        let postId = this.props.match.params.id;
        Promise.all(
            [axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`),
            axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`),
            ])
            .then(res => {
                let [post, comments] = [res[0].data, res[1].data];
                console.log(post);
                console.log(comments);
                axios.get(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
                    .then(res => {
                        console.log(res.data, "Fa")
                        this.setState({
                            post,
                            comments,
                            user: res.data
                        })
                    })

            })
    }

    render() {
        const commentsEl  = this.state.comments.map(comment => <li key={comment.id}> {comment.body} </li> )
        return (
            <div>
                <h3>Post by: {this.state.user.name}</h3>
                <h4>Title: {this.state.post.title}</h4>
                <h4>Body:</h4>
                <p> { this.state.post.body } </p>
                <h3>Comments:</h3>
                <ul>{commentsEl}</ul>
                <hr/>
                <h4><Link to={`/users/${this.state.user.id}`}>View more posts by {this.state.user.name}</Link></h4>
            </div>
        );
    }
}

export default PostDetails;
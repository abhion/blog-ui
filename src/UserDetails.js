import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';    

class UserDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {},
            userPosts: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        Promise.all([axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`), axios.get(`http://jsonplaceholder.typicode.com/users?id=${id}`)])
        
            .then(res => {
                console.log(res, "SF")
                let [userPosts, user] = res;
                userPosts = userPosts.data;
                user = user.data[0];
                this.setState({
                    user,
                    userPosts
                })
                console.log(this.state)

            })

    }

    render() {
        const postListEl = this.state.userPosts.map(post => <li key={post.id}> <Link to={`/post/${post.id}`}>{post.title}</Link> </li>)
        return (
            <div>
            <h2>Name: {this.state.user.name}</h2>
            <h3>Posts</h3>
                <ul>
                    {postListEl}
                </ul>
            </div>
        );
    }
}

export default UserDetails;
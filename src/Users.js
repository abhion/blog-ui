import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Users extends React.Component {

    constructor() {
        super();
        this.state = {
            userList: []
        }

    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    userList: res.data
                })
            })
    }

    render() {
        const userListEl = this.state.userList.map(
            user => {
                return (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </li>
                )
            }
        )
        return (
            <div>
                <ul>
                    {userListEl}
                </ul>
            </div>
        );
    }
}

export default Users;
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Users from './Users';
import UserDetails from './UserDetails';

import PostDetails  from './PostDetails';
import Posts  from './Posts';

function App(){
    return (
        <BrowserRouter>
            <div>
                <Link to="/">Home |</Link>
                <Link to="/users"> Users |</Link>
                <Link to="/posts"> Posts</Link>

                {/* <Route path="/" component={App} exact={true} /> */}
                <Route path="/users" component={ Users } exact={true} />
                <Route path="/users/:id" component={UserDetails} />
                <Route path="/posts" component={ Posts } />
                <Route path="/post/:id" component={ PostDetails } />
            </div>
        </BrowserRouter>
    );
}

export default App;

import React from 'react';
import PostList from './PostList';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Posts</h1>
                <PostList />
            </div>
        );
    }
}

export default App;
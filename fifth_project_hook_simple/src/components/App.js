import React, { useState } from 'react'
import RenderList from './RenderList';
import UserList from './UserList';

const App = () => {
    const [resource, setResource] = useState('posts');


    return (
        <div className="ui container mt-4">

            <UserList resource={'users'} />

            <h1 className="ui header">
                Hooks Simple
            </h1>

            <div >
                <button
                    className="ui positive button m-4"
                    onClick={() => setResource('posts')}
                >
                    POSTS
                </button>

                <button
                    className="ui red button m-4"
                    onClick={() => setResource('todos')}
                >
                    TODOS
                </button>

                
            </div>

            <div className="ui list">
                <RenderList resource={resource} />
            </div>
        </div>
    );
}

export default App;
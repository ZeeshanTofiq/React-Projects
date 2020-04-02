import React from 'react';
import Request from './Request';


const UserList = resource => {
    const response = Request(resource);

    return response.map(item => {
        return <div className="ui segment  item" key={item.name}>
            {item.name}
        </div>
    });
}

export default UserList;
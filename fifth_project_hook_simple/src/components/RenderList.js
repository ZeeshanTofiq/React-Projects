import React from 'react';
import Request from './Request';


const RenderList = resource => {
    const response = Request(resource);

    return response.map(item => {
        return <div className="ui segment  item" key={item.title}>
            {item.title}
        </div>
    });
}

export default RenderList;
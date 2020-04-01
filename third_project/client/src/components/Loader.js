import React from 'react';

const Loader = props => {
    return (
        <div className="ui segment" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50% ,-50%)', zIndex: '1000' }}>
            <div class="ui active loader"></div>
        </div>
    );

}

// <div class="ui active centered inline loader"></div>



// <div className="ui active inverted dimmer">
// <div className="ui loader">
// </div>
// </div>

export default Loader;
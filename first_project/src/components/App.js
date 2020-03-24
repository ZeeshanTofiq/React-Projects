import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

class App extends React.Component {

    render() {
        return (
            <div className="container row">
                <div className="SongList col-lg-6">
                    <h1 className="text-center">SongList</h1>
                    <div className="mt-5">
                    <SongList />
                    </div>
                </div>
                <div className="col-lg-5 mt-5 ml-4">
                    <SongDetail />
                </div>
            </div>
        );
    }

}

export default App;
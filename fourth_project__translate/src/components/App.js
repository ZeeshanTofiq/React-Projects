import React from 'react';
import User from './User';
import LanguageSelector from '../contexts/LanguageSelector';
import Language from './Language';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <br />
                <Language />
                <LanguageSelector >
                    <User />
                </LanguageSelector>
            </div>
        );
    }
}

export default App;
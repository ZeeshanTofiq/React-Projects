import React from 'react';
import LanguageSelector from '../contexts/LanguageSelector';


class Field extends React.Component {
    render() {
        return (
            <div>
                <label>
                    <LanguageSelector.Consumer>
                        {(val) => val === 'english' ? 'Name' : 'Naam'}
                    </LanguageSelector.Consumer>
                </label>
                <input type="text" className="form-control" />
            </div>
        );
    }
};

export default Field;
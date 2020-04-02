import React from 'react';
import LanguageSelector from '../contexts/LanguageSelector';

const Button = () => {
    return (
        <div>
            <button type="submit" className="ui positive button">
                <LanguageSelector.Consumer>
                    {(val) => val === 'english' ? 'Submit' : 'Daraj Kro'}
                </LanguageSelector.Consumer>
            </button>
        </div>
    );
};

export default Button;
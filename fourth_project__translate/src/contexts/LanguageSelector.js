import React from 'react';



const Context = React.createContext('english');

class LanguageSelector extends React.Component {
    state = { language: 'english' }

    onLanguageChange = language => {
        this.setState({ language: language });
    }

    render() {
        return (<Context.Provider
            value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
        >
            {this.props.children}
        
            </Context.Provider>
        );
    }
}

export default LanguageSelector;
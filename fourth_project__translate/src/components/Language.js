import React from 'react';
import LanguageSelector from '../contexts/LanguageSelector';

class Language extends React.Component {
    static context  = LanguageSelector;
    
    render() {
        return (
            <div>
                <h2 className="ui header">
                Select a language
                    <span className="ml-4">
                        <i className="canada flag"
                            onClick={()=>this.context.onLanguageChange('english')}
                        >
                        </i>


                        <i className="pakistan flag"
                            onClick={()=>this.context.onLanguageChange('pakistan')}
                        >
                        </i>
                    </span>
                </h2>
            </div>
        );
    }
}

export default Language;
import React from 'react';
// import './Header.css';
import GoogleAuth from './GoogleOath';
import { Link } from 'react-router-dom';



class Headers extends React.Component {
    render() {


        return (
            <div>
                <div className="ui secondary  menu">
                    <Link className="ui header item" to="/">
                        Stream
                    </Link>
                    <div className="right menu">
                        <Link className="ui item" to="/">
                            All Streams
                        </Link>
                        <GoogleAuth />
                    </div>
                </div>
                <div className="ui divider"></div>
            </div>
        );
        
    }
}

export default Headers;
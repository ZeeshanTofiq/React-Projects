import React from 'react';
import { SignIn , SignOut } from '../actions';
import { connect } from 'react-redux';
import Loader from './Loader'; 

class GoogleOath extends React.Component {
    componentDidMount(){

        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId: '694624619304-v1po8r5r3p3ukjtndgquuhm5oaictf3d.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange =(status)=>{
        if (status){
            this.props.SignIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.SignOut();
        }
    }

    onSignOut=() => {
        this.auth.signOut();
    }

    onSignIn=()=> {
        this.auth.signIn();
    }
    
    render() {
        if (this.props.auth.isSignedIn === null) {
            return <Loader text="Loading...." />
        }
        else if (this.props.auth.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="btn btn-danger-outline"> SignOut</button>
            );
        }
        else {
            return (
                <button onClick={this.onSignIn} className="btn btn-danger-outline">SignIn</button>
            )
        };
    }
}

const mapStateToProps = state=>{
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps ,{SignIn,SignOut})(GoogleOath);
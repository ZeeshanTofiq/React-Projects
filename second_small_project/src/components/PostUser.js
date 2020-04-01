import React from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../actions';

class PostUser extends React.Component {
    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }
    render() {
        const  user  = this.props.user
        console.log(user);
        if (!user){
            return <div>Username</div>;
        }
        else{
            return (<div>Username:{user.name}</div>)
        }
    }
}
const mapStateToProps = (state,OwnProps) => {
    return {
        user: state.users.find(user => user.id == OwnProps.userId)
    };
}

export default connect(mapStateToProps, { fetchUser })(PostUser);
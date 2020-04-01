import React from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../actions';
import StreamForm from './streamForm';
import _ from 'lodash';


class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues);
    }
    render() {
        if (this.props.fetchData && this.props.isSignedIn && this.props.userId === this.props.fetchData.userId) {
            return (
                <div className="ui container mt-4">
                    <h1 className="ui header"> Edit Stream </h1>
                    <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.fetchData, 'title', 'description')} />
                </div>
            );
        }
        return null;
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        fetchData: state.streams[ownProps.match.params.id],
        isSignedIn:state.auth.isSignedIn,
        userId:state.auth.userId
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
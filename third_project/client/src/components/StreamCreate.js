import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../actions';
import StreamForm from './streamForm';
import Modal from './Modal';
import { Link } from 'react-router-dom';

class StreamCreate extends React.Component {
    state = { modalStatus: null }

    onSubmit = formValues => {
        const status = this.props.createStream(formValues) ? true : false;
        this.setState({ modalStatus: status });
    }
    renderAction() {
        return (
            <button
                onClick={() => window.location.reload(true)}
                className="ui positive button"
            >
                OK
            </button>
        );
    }
    render() {
        if (this.state.modalStatus !== null && this.state.modalStatus) {
            return (<Modal
                content={{ title: 'Congratulation', content: 'Successfully Create the Stream...' }}
                actions={this.renderAction}
            />
            )
        }
        return (
            <div className="ui container">
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(
    null,
    { createStream }
)(StreamCreate);
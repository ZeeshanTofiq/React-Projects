import React from 'react';
import Modal from './Modal';
import { fetchStream, deleteStream } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderContent() {
        let content;
        content = `Are you sure to delete ${this.props.fetchData.title}`
        return {
            title: 'Delete Stream',
            content: content
        }
    }
    renderAction = () => {

        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteStream(this.props.match.params.id)}
                    type="button"
                    className="btn btn-danger"
                >
                    Delete
                </button>
                <Link to="/" className="ui cancel button">Cancel</Link>
            </React.Fragment>
        )
    }
    render() {
        const fetchData = this.props.fetchData;
        const userId = this.props.userId;
        if (this.props.isSignedIn && fetchData && fetchData.userId === userId) {
            return (
                <div className="bg-red" style={{ backgroundColor: 'red' }}>
                    <Modal
                        content={this.renderContent()}
                        actions={this.renderAction}
                    />
                </div>
            );
        }
        return null;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fetchData: state.streams[ownProps.match.params.id],
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
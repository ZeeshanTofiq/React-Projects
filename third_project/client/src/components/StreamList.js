import React from 'react';
import { fetchStreams } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }
    renderCreateButton() {
        if (this.props.isSignedIn) {
            return (
                <Link className="ui positive left icon button" to='/new'>
                    <i className="plus icon"></i>
                 &nbsp; Create Stream
                </Link>
            );
        }
        return null;
    }
    renderButton({ userId, id }) {
        if (this.props.isSignedIn && userId === this.props.userId) {
            return (
                <div>
                    <Link to={`/edit/${id}`} className="ui positive button">Edit</Link>
                    <Link to={`/delete/${id}`} className="ui negative button">Delete</Link>
                </div>
            )
        }
        return null;
    }
    renderList() {
        return this.props.streams.map(item => {
            return (
                <div className="ui segment col-9" key={`item-${item.title}`}>
                    <div className="ui grid row">
                        <div className="two middle aligned column">
                            <i className="camera icon"></i>
                        </div>
                        <div className="ten wide  column">
                            <Link to={`/show/${item.id}`}>
                                <h3 className="ui header">{item.title}</h3>
                            </Link>
                            <p>{item.description}</p>
                        </div>
                        <div className="four wide column">
                            {this.renderButton(item)}
                        </div>
                    </div>
                </div>
            );
        })
    }
    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">All Streams</h1>
                {this.renderList()}
                {this.renderCreateButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
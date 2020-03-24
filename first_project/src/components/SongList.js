import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from '../actions';

class SongList extends Component {
    renderList() { 
        return this.props.song.map((val) => {
            return (
                <div className={`songList--item-${val.title}`} key={val.title}>
                    <div style={{ border: '1px solid black', padding: '9px', margin: '4px' }} className="row">
                        <div className="col-lg-8">
                            <h3>{val.title}</h3>
                            <span style={{ fontSize: '10px' }} >Duration {val.duration}</span>
                        </div>
                        <div className="right-align col-lg-4" style={{ float: 'right' }}>
                            <button type="button" onClick={()=>this.props.action(val)} value="Submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            );
        })
    }
    render() {
        return this.renderList();
    }
}

const mapStateToProps = state => {
    return {
        song: state.song
    }
}
export default connect(mapStateToProps,{action})(SongList);
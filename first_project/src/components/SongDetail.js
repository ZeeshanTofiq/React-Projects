import React from 'react';
import { connect } from 'react-redux';


const SongDetail = ({song}) =>{
    if (!song){
        return (
            <div>
                Select a Song...
            </div>
        );
    }
    else{
        //code
        return (
            <div className="jumbotron">
                <h1>
                    {song.title}
                </h1>
                <br />
                Duration : {song.duration}
            </div>
        );
    }
}

const mapStateToProps = state=>{
    return {
        song:state.selectSong
    }

}

export default connect(mapStateToProps)(SongDetail);
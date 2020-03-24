// import React from 'react';
import { combineReducers } from 'redux';

const SongList = () =>{
    return [
        {title:'Barish',duration:'1:56'},
        {title:'Bari',duration:'5:89'},
        {title:'Cocktail',duration:'5:90'},
        {title:'Despacito',duration:'2:69'},
        {title:'Sun Zara Roo rha hu me',duration:'3:29'}
    ];
}

const SelectedSong = (selectSong = null , action) => {
    if (action.type === 'SELECTED_SONG'){
        return action.payload;
    }
    return selectSong;
}

export default combineReducers({
    song:SongList,
    selectSong:SelectedSong
});
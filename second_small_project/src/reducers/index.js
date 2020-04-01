import fetchPost from './fetchPost';
import fetchUser from './fetchUser';
import { combineReducers } from 'redux';

export default combineReducers({
    posts:fetchPost,
    users:fetchUser
});
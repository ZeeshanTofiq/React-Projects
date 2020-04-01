import jsonPlaceholder from '../api/jsonPlaceholder';


export const fetchPost = ()=>{
    return async (dispatch)=>{
        const response  = await jsonPlaceholder.get('/posts');
        return dispatch({type:'FETCH_POST',payload:response.data});
    }
}

export const fetchUser = (id)=>{
    return async (dispatch)=>{
        const response  = await jsonPlaceholder.get(`/users/${id}/`);
        return dispatch({type:'FETCH_USER',payload:response});
    }
}
import {
    SIGN_IN,
    SIGN_OUT
} from '../actions/types';


const initialVal = {
    isSignedIn: null,
    userId: null
}


export default (state = initialVal, action) => {
    if (action.type === SIGN_IN) {
        return { ...state, isSignedIn: true, userId: action.payload.userId };
    }
    else if (action.type === SIGN_OUT){
        return { ...state, isSignedIn: false, userId: null };
    }
    return state;
}
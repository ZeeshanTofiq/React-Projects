export default (OldState=[],action)=>{
    switch(action.type){
        case 'FETCH_POST':
            return action.payload;
        default:
            return OldState;
    }
};
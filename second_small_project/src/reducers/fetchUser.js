export default (OldState = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return [...OldState, action.payload];
        default:
            return OldState;
    }
}
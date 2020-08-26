export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
}

const reducer = (state, action) => {
    console.log(action);

    //take Action from User object and figure out what to do with the given action
    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }

};

export default reducer;
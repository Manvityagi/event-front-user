const initState = {};

const events = (state = initState, action) => {
    switch (action.type) {
        case 'None':
            return {
                ...state,
            };
        default: return state;
    }
};

export default events;
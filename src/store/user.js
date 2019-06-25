const initState = {};

const user = (state = initState, action) => {
    switch (action.type) {
        case 'None':
            return {
                ...state,
            };
        default: return state;
    }
};

export default user;
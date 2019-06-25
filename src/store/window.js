const initState = {width: 0, height: 0};

const window = (state = initState, action) => {
    switch (action.type) {
        case 'window.updateDimensions':
            return {
                ...state,
                width: action.payload.width,
                height: action.payload.height
            };
        default: return state;
    }
};

export function updateDimensions(width, height){
    return dispatch => {
        dispatch({
            type: 'window.updateDimensions',
            payload: {
                height,
                width
            }
        });
    }
}

export default window;
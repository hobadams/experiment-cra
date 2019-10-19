const initialState = {
    items: {}
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if (action.type === 'UPDATE_CART') {
        newState.items = action.items;
    }

    if (action.type === 'EMPTY_CART') {
        newState.items = {};
    }

    // Add Logging
    if (action.type) {
        console.log(action.type)
        console.log({'Previous state': state})
        console.log({'Next state': newState})
    }

    return newState;
};

export default reducer;
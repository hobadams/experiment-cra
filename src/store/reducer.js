const initialState = {
    count: 2
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if (action.type === 'COUNT_UP') {
        newState.count++;
    }

    if (action.type === 'COUNT_DOWN') {
        newState.count--;
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
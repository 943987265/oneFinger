const defaultState = {
    num: 54088
}

export default (state = defaultState, action) => {
    let newState = Object.assign({}, state)
    if (action.type === 'reduce') {
        newState.num -= action.value
    } else if (action.type === 'plus') {
        newState.num += action.value
    }
    return newState;
}
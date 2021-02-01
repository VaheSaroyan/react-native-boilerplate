import actionTypes from './types'

const INITIAL_STATE = {
    isAuthenticated: false,
    error: null,
    loading: false,
}

const authReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case actionTypes.SIGN_IN:
            state.isAuthenticated = true
            return state
        case actionTypes.SIGN_OUT:
            state.isAuthenticated = false
            return  state
        case actionTypes.FETCH_ONE:
            return {...state,...payload}
        default:
            return state
    }
}

export default authReducer

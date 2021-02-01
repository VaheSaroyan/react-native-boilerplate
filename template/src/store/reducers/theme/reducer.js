import actionTypes from './types'

const INITIAL_STATE = {
    theme: null,
    darkMode: null,
}

const authReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case actionTypes.CHANGE_THEME:
            if (typeof payload.theme !== 'undefined') {
                state.theme = payload.theme
            }
            if (typeof payload.darkMode !== 'undefined') {
                state.darkMode = payload.darkMode
            }
            return state
        case actionTypes.DEFAULT_THEME:
            if (!state.theme) {
                state.theme = payload.theme
                state.darkMode = payload.darkMode
            }
            return  state
        default:
            return state
    }
}

export default authReducer

import types from './types'


export const changeTheme = (payload) => {
    return {
        type: types.CHANGE_THEME,
        payload
    }
}
export const setDefaultTheme = (payload) => {
    return {
        type: types.DEFAULT_THEME,
        payload
    }
}


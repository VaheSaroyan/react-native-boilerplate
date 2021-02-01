import types from './types'


export const signIn = () => {
    return {
        type: types.SIGN_IN,
    }
}

export const signOut = () => {
    return {
        type: types.SIGN_OUT,
    }
}
export const fetchOne = (payload)  => {
    return {
        type: types.FETCH_ONE,
        payload
    }
}


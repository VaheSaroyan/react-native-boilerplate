import actionTypes from './types'

const INITIAL_STATE = {
    itemKey: null
}

const authReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case actionTypes.APP_START_UP:
      return state
    default:
      return state
  }
}

export default authReducer

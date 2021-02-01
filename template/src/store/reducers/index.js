import { combineReducers } from 'redux'
import startup from './startup'
import user from './user'
import theme from './theme'

export default combineReducers({
  startup,
  user,
  theme,
})

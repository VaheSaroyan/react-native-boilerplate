import { combineReducers } from 'redux'
import startup from './Startup'
import user from './User'
import theme from './Theme'

export default combineReducers({
  startup,
  user,
  theme,
})

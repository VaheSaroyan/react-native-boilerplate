import { combineReducers } from 'redux'

import startupReducer from '@/store/reducers/startup/reducer'
import themeReducer from '@/store/reducers/theme/reducer'
import userReducer from '@/store/reducers/user/reducer'
// import { userReducer } from "store/user/reducer";

const rootReducer = combineReducers({
    // auth: authReducer,
    // user: userReducer,
    startup:startupReducer,
    theme:themeReducer,
    user:userReducer
})

export default rootReducer

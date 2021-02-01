import { createStore, applyMiddleware, compose } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['theme', 'user'],
    blacklist: ['routes'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [thunk]

let composeEnhancers = __DEV__ ? composeWithDevTools :compose

// if (__DEV__) {
//     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// }

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
)

export const persistor = persistStore(store)
// persistor.purge();

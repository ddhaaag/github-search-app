import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import usersReducer from './users'
import userReducer from './user'
import reposReducer from './repos'
import favoriteUsers from './favoriteUser'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['favoriteUsers'],
}

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  repos: reposReducer,
  favoriteUsers: favoriteUsers,
})

export default persistReducer(persistConfig, rootReducer)

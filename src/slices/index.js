import { combineReducers } from 'redux'

import usersReducer from './users'
import userReducer from './user'
import reposReducer from './repos'

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  repos: reposReducer,
})

export default rootReducer

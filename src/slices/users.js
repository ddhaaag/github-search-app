import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasError: false,
  users: [],
}

// A slice for posts with our three reducers
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers: (state) => {
      state.loading = true
    },
    submitData: (state, { payload }) => {
      state.users = payload
      state.loading = false
      state.hasError = false
    },
    getUsersFailure: (state) => {
      state.loading = false
      state.hasError = true
    },
  },
})

// Three actions generated from the slice
export const { getUsers, getUsersSuccess, getUsersFailure, submitData, getUsername } =
  usersSlice.actions

// A selector
export const usersSelector = (state) => state.users

// The reducer
export default usersSlice.reducer

export function fetchUsers(username) {
  return async (dispatch) => {
    dispatch(getUsers())

    try {
      const response = await fetch(`${'https://api.github.com/search/users?q='}${username}`)
      const data = await response.json()

      dispatch(submitData(data.items))
    } catch (error) {
      dispatch(getUsersFailure())
    }
  }
}

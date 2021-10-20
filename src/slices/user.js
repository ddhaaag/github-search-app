import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasError: false,
  user: {},
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state) => {
      state.loading = true
    },
    getUserSuccess: (state, { payload }) => {
      state.user = payload
      state.loading = false
      state.hasError = false
    },
    getUserFailure: (state) => {
      state.loading = false
      state.hasError = true
    },
  },
})

export const { getUser, getUserSuccess, getUserFailure } = userSlice.actions
export const userSelector = (state) => state.user
export default userSlice.reducer

export function fetchUser(id) {
  return async (dispatch) => {
    dispatch(getUser())

    try {
      const response = await fetch(`https://api.github.com/user/${id}`)
      const data = await response.json()

      dispatch(getUserSuccess(data))
    } catch (error) {
      dispatch(getUserFailure())
    }
  }
}

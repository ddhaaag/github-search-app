import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  favoriteUsers: [],
}

export const favoriteUsersSlice = createSlice({
  name: 'favoriteUsers',
  initialState,
  reducers: {
    AddFavoriteUsers: (state, action) => {
      const index = state.favoriteUsers.findIndex((favorite) => favorite.id === action.payload.id)
      if (index === -1) {
        state.favoriteUsers.push(action.payload)
      }
      return state
    },
  },
})

export const { AddFavoriteUsers } = favoriteUsersSlice.actions

export const favoriteUsersSelector = (state) => state.favoriteUsers

export default favoriteUsersSlice.reducer

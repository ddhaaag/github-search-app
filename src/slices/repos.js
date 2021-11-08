import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
  loading: false,
  hasError: false,
  repos: [],
}

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    getRepos: (state) => {
      state.loading = true
    },
    getReposSuccess: (state, { payload }) => {
      state.repos = payload
      state.loading = false
      state.hasError = false
    },
    getReposFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { getRepos, getReposSuccess, getReposFailure } = reposSlice.actions
export const reposSelector = (state) => state.repos
export default reposSlice.reducer

export function fetchRepos(id) {
  return async (dispatch) => {
    dispatch(getRepos())

    try {
      const response = await axios.get(
        `https://api.github.com/user/${id}/repos?per_page=100&page=<page_number>`
      )

      dispatch(getReposSuccess(response.data))
    } catch (error) {
      dispatch(getReposFailure())
    }
  }
}

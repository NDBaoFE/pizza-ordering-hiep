import USER_ACTION_TYPES from './user.types'
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
  },
  reducers: {
    userReducer: (state, action) => {
      const { type, payload } = action

      switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
          return { ...state, currentUser: payload }
        default:
          return state
      }
    },
  },
})
export const { userReducer } = userSlice.actions
export default userSlice.reducer

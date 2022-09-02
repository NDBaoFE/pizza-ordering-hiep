import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './user/user.reducer'

const store = configureStore({
  reducer: { user: rootReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store

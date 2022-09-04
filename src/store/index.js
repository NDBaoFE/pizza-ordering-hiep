import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import rootReducer from './user/user.reducer'
const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store

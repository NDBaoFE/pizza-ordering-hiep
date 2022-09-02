import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import { rootReducer } from './root.reducer'
const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: rootReducer,
  },
})

export default store

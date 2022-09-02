import { createSlice } from '@reduxjs/toolkit'
import LocalStorageUtils from '../../utils/LocalStorageUtils'
const initialState = {
  isCartOpen: false,
  cartItems: LocalStorageUtils.getItem('cart') || [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state, action) {
      state.isCartOpen = action.payload
    },

    addItem(state, action) {
      const newItemId = action.payload.id
      const existingItem = state.cartItems.find((item) => item.id === newItemId)

      if (existingItem) {
        existingItem.quantity++
      } else {
        state.cartItems.push(action.payload)
      }
      LocalStorageUtils.setItem('cart', state.cartItems)
    },

    removeItem(state, action) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
      LocalStorageUtils.setItem('cart', state.cartItems)
    },

    incrementItem(state, action) {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.quantity++
        }
        return item
      })
      LocalStorageUtils.setItem('cart', state.cartItems)
    },

    decrementItem(state, action) {
      state.cartItems = state.cartItems
        .map((item) => {
          if (item.id === action.payload) {
            item.quantity--
          }
          return item
        })
        .filter((item) => item.quantity !== 0)
      LocalStorageUtils.setItem('cart', state.cartItems)
    },
  },
})

export const { toggleCart, addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions
export default cartSlice.reducer

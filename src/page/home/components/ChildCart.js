import React from 'react'
import styled from 'styled-components'
import cart from '../../../assets/images/cart.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../../store/slices/cartSlice'

function Cart() {
  const { cartItems } = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open))
  }

  const cartQuantity = cartItems.length
  return (
    <div onClick={() => handleOpenCart(true)}>
      <CartContainer>
        <img src={cart} alt="cart" />
      </CartContainer>
      <InfoContainer>{cartQuantity}</InfoContainer>
    </div>
  )
}

export default Cart

const CartContainer = styled.div`
  img {
    width: 80%;
  }
  width: 60px;
  height: 60px;
  background: #f2c94c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 2vh;
  cursor: pointer;
  top: 80vh;
`
const InfoContainer = styled.div`
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 2vh;
  top: 80vh;
  background: #f2c94c;
`

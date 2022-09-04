import React, { useEffect } from 'react'
import styled from 'styled-components'
import LogoutIcon from '@mui/icons-material/Logout'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'
import {
  toggleCart,
  removeItem,
  incrementItem,
  decrementItem,
} from '../../../store/slices/cartSlice'
function Cart() {
  const { isCartOpen, cartItems } = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const handleCloseCart = (close) => {
    dispatch(toggleCart(close))
  }

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId))
  }

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId))
  }

  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId))
  }

  useEffect(() => {
    const docBody = document.body

    isCartOpen ? docBody.classList.add('overflow_hide') : docBody.classList.remove('overflow_hide')
  }, [isCartOpen])

  const cartQuantity = cartItems.length

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0)

  const currentUser = useSelector((state) => state.user.currentUser)
  const handleCheckout = (e) => {
    if (currentUser && currentUser.uid.length >= 0 && cartQuantity > 0) {
      window.location = '/order'
    } else {
      console.log('false')
    }
  }
  return (
    <>
      {isCartOpen && (
        <Container>
          <div onClick={() => handleCloseCart(false)}>
            <LogoutIcon fontSize="large" />
          </div>
          <h1>Your beloving Cart</h1>
          <h1>{cartQuantity} Pizzas</h1>
          <ul style={{ overflowY: 'scroll' }}>
            {cartQuantity === 0 ? (
              <div>Your cart is Empty 😔</div>
            ) : (
              cartItems.map((item) => {
                const totalPrize = item.price * item.quantity

                return (
                  <SubContainer key={item.id}>
                    <Img src={item.image} />
                    <InfoContainer>
                      <h5>{item.name}</h5>
                      <h5>{totalPrize}</h5>
                    </InfoContainer>
                    <AdjustQuantityContainer>
                      <div onClick={() => handleDecrement(item.id)}>&#8722;</div>
                      <div>{item.quantity}</div>
                      <div onClick={() => handleIncrement(item.id)}>&#43;</div>
                    </AdjustQuantityContainer>
                    <section onClick={() => handleRemove(item.id)}>
                      <DeleteIcon fontSize="large" />
                    </section>
                  </SubContainer>
                )
              })
            )}
          </ul>
          <h1>Total:${cartTotal}</h1>
          <Button>
            <Link to="/order">Checkout</Link>
          </Button>
        </Container>
      )}
    </>
  )
}

export default Cart
const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  section {
    display: flex;
    justify-content: end;
    flex: 1;
  }
`
const Container = styled.div`
  top: 0;
  z-index: 99;
  height: 100vh;
  color: #f2c94c;
  overflow-y: scroll;
  position: fixed;
  width: calc(100vw / 2.5);
  right: 0;
  background: #000000;
  display: flex;
  align-items: center;
  font-size: 36px;
  flex-direction: column;
  div {
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: flex-START;
  }
`
const Img = styled.img`
  width: 30%;
`
const InfoContainer = styled.section`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  h5 {
    margin: 0 24px;
  }
`
const AdjustQuantityContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 30px;
    height: 30px;
    border: 2px solid #f2c94c;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const Button = styled.section`
  text-transform: uppercase;
  width: 25%;
  height: 60px;

  margin-top: 8vh;
  font-weight: bold;
  font-size: 17px;
  border: 2px solid #f2c94c;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease-in-out all;
  a {
    transition: 0.4s ease-in-out all;
    color: #f2c94c !important;
  }
  &:hover {
    a {
      color: black !important;
    }
  }
  cursor: pointer;
  &:hover {
    background: #f2c94c;
    color: black;
  }
`

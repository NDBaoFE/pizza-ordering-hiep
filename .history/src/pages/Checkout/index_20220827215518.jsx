import React from 'react'
import * as Styled from './Checkout.styled'

const Checkout = (props) => {
  return (
    <Styled.Background>
      <Styled.Cart>
        <Styled.Header>Shooping Cart</Styled.Header>
      </Styled.Cart>
      <Styled.Payment>
        <Styled.Header>Payment</Styled.Header>
      </Styled.Payment>
    </Styled.Background>
  )
}

Checkout.propTypes = {}

export default Checkout

import React from 'react'
import * as Styled from './Checkout.styled'

const Checkout = (props) => {
  return (
    <Styled.Background>
      <Styled.Cart></Styled.Cart>
      <Styled.Payment></Styled.Payment>
    </Styled.Background>
  )
}

Checkout.propTypes = {}

export default Checkout

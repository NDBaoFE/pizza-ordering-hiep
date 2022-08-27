import React from 'react'
import * as Styled from './Checkout.styled'

const Checkout = (props) => {
  return (
    <Styled.Background>
      <Styled.Cart>
        <Styled.Header>Shopping Cart</Styled.Header>
        <Styled.List>
          <Styled.Item>
            <Styled.Image />
            <Styled.Info>
              <Styled.PizzaName>Pizza Bảo</Styled.PizzaName>
              <div>
                <Styled.Button>+</Styled.Button>
                <Styled.Button>1</Styled.Button>
                <Styled.Button>-</Styled.Button>
              </div>
            </Styled.Info>
            <Styled.Price></Styled.Price>
            <Styled.CloseButton>x</Styled.CloseButton>
          </Styled.Item>
        </Styled.List>
      </Styled.Cart>
      <Styled.Payment>
        <Styled.Header>Payment</Styled.Header>
      </Styled.Payment>
    </Styled.Background>
  )
}

Checkout.propTypes = {}

export default Checkout

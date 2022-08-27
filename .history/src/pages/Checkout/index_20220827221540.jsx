import React from 'react'
import * as Styled from './Checkout.styled'
import pizza from '../../assets/pizza.jpg'

const Checkout = (props) => {
  return (
    <Styled.Background>
      <Styled.Cart>
        <Styled.Header>Shopping Cart</Styled.Header>
        <Styled.List>
          <Styled.Item>
            <Styled.Image src={pizza} />
            <Styled.Info>
              <h1>Pizza Bảo</h1>
              <div>
                <Styled.Button>+</Styled.Button>
                <Styled.Button>1</Styled.Button>
                <Styled.Button>-</Styled.Button>
              </div>
            </Styled.Info>
            <Styled.Price>$50</Styled.Price>
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

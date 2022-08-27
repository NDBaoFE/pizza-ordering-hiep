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
                <button>+</button>
                <button>1</button>
                <button>-</button>
              </div>
            </Styled.Info>
            <Styled.Price>$50</Styled.Price>
            <button>Remove</button>
          </Styled.Item>
          <Styled.Item>
            <Styled.Image src={pizza} />
            <Styled.Info>
              <h1>Pizza Bảo</h1>
              <div>
                <button>+</button>
                <button>1</button>
                <button>-</button>
              </div>
            </Styled.Info>
            <Styled.Price>$50</Styled.Price>
            <button>Remove</button>
          </Styled.Item>
          <Styled.Item>
            <Styled.Image src={pizza} />
            <Styled.Info>
              <h1>Pizza Bảo</h1>
              <div>
                <button>+</button>
                <button>1</button>
                <button>-</button>
              </div>
            </Styled.Info>
            <Styled.Price>$50</Styled.Price>
            <button>Remove</button>
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

import styled from 'styled-components'

export const Background = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 5rem 10rem;
  display: flex;
  overflow-y: hidden;
`
export const Cart = styled.div`
  padding: 2rem;
  display: block;
  background-color: #d9d9d9;
  flex: 1;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
`
export const Payment = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  min-width: 400px;
  background-color: yellow;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
`

export const Header = styled.header`
  font-size: 2rem;
  font-weight: 700;

  &::after {
    content: '';
    display: block;
    width: 275px;
    height: 5px;
    background-color: orange;
  }
`

export const List = styled.ul`
  list-style: none;
`

export const Item = styled.ul``

export const Image = styled.img``
export const Info = styled.div``
export const PizzaName = styled.h1``
export const Button = styled.div``
export const Price = styled.span``
export const CloseButton = styled.button``

import styled from 'styled-components'

export const Background = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 6rem 10rem;
  display: flex;
  overflow-y: hidden;
`
export const Cart = styled.div`
  padding: 2rem;
  display: block;
  background-color: gray;
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
  color: #fff;

  &::after {
    content: '';
    display: block;
    width: 2750px;
    height: 5px;
    background-color: orange;
  }
`
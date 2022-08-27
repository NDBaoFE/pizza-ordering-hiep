import styled from 'styled-components'

export const Background = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 5rem 10rem;
  display: flex;
  overflow-y: hidden;

  & button {
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    border-radius: 2px;
  }
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
    margin: 0 1rem;
    &:hover {
      opacity: 0.8;
    }
  }
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 1rem;
`

export const Image = styled.img`
  margin-right: 2rem;
  border-radius: 50%;

  width: 150px;
`
export const Info = styled.div`
  flex: 1;
`
export const Button = styled.button``
export const Price = styled.span`
  margin: 0 1rem;
`
export const CloseButton = styled.button`
  margin: 0 1rem;
`

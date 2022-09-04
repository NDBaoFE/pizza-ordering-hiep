import styled from 'styled-components'
import bg from '../../assets/bg.png'

export const Background = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 5rem 10rem;
  display: flex;
  overflow-y: hidden;
  background: url(${bg}) no-repeat center / cover;

  & button {
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    border-radius: 2px;

    &:hover {
      opacity: 0.6;
    }
  }
`
export const Cart = styled.div`
  padding: 2rem;
  display: block;
  flex: 1;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  background: linear-gradient(114.83deg, rgba(255, 255, 255, 0.5) 0.8%, rgba(3, 17, 30, 0) 101.31%);
  backdrop-filter: blur(40px);
  color: #fff;
`

export const Header = styled.header`
  font-size: 2rem;
  font-weight: 700;

  &::after {
    content: '';
    display: block;
    width: 250px;
    height: 5px;
    background-color: orange;
  }
`

export const List = styled.ul`
  height: 525px;
  list-style: none;
  padding: 0;
  overflow: auto;
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
  font-size: 2.4rem;
  color: red;
  font-weight: 600;
  color: orange;
`
export const CloseButton = styled.button`
  margin: 0 1rem;
`

export const Payment = styled.div`
  color: #fff;
  box-sizing: border-box;
  padding: 2rem;
  min-width: 400px;
  background-color: #000;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  flex-direction: column;
`

export const Momo = styled.img`
  margin: 32px auto 0 auto;
  border-radius: 16px;
  width: 250px;
  height: 250px;
`

export const TotalPrice = styled.h1`
  position: relative;
  margin: 32px auto;
  display: flex;
  &:before {
    content: '';
    display: block;
    width: 75px;
    margin-right: 32px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    height: 2px;
    background-color: #fff;
  }

  &:after {
    content: '';
    display: block;
    width: 75px;
    margin-left: 32px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    height: 2px;
    background-color: #fff;
  }
`

export const InputBtn = styled.input`
  margin: 0 auto;
  box-sizing: border-box;
  width: 300px;
  font-size: 1rem;
  border-radius: 8px;
  /* border: 3px solid orange; */
  padding: 12px 16px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.submit ? 'orange' : 'white')};
  color: ${(props) => (props.submit ? 'white' : 'black')};

  &:hover {
    opacity: ${(props) => (props.submit ? '0.8' : '1')};
  }
`

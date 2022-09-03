import styled from 'styled-components'
import bg from '../../assets/images/wood.png'
import px2vw from '../../utils/px2vw'
export const Section = styled.section`
  background-color: #000000;
  color: #ffffff;
  width: 100%;
  min-height: 100vh;
  @media (min-width: 1200px) {
    max-width: ${px2vw(1260)};
  }
`
export const HomeWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000000;
`
export const Footer = styled(Section)`
  background: transparent;
`
export const HomeSec = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: transparent;
  img {
    width: 100%;
  }
`
export const Hero = styled.div`
  text-align: center;
  margin-top: 20vh;
  h1 {
    color: #ffffff;
    font-size: 72px;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  p {
    color: #ffffff;
    max-width: 745px;
    font-size: 25px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const AboutSec = styled(Section)`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  color: #ffff;
  div {
    p,
    h2 {
      margin-left: 24px;
    }
    h2 {
      font-size: 60px;
      margin-bottom: 0;
      text-transform: uppercase;
    }
    p {
      max-width: 450px;
      line-height: 1.5em;
    }
  }
  img,
  div {
    margin: 24px !important;
  }
`
export const YellowBar = styled.div`
  width: 450px;
  height: 10px;
  background: #f2c94c;
  border-radius: 50px;
`
export const Button = styled.div`
  text-transform: uppercase;
  width: 120px;
  height: 60px;
  color: #f2c94c;
  font-weight: bold;
  font-size: 17px;
  border: 2px solid #f2c94c;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease-in-out all;
  cursor: pointer;
  &:hover {
    background: #f2c94c;
    color: black;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  div {
    max-width: calc(100% / 2.5);
    margin-right: 24px;
    line-height: 2em;
  }
`
export const NormalHero = styled.div`
  display: flex;

  h2 {
    font-size: 60px;
    margin-bottom: 0;
    text-transform: uppercase;
  }
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const MenuSec = styled(Section)`
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 12px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: #000000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 12px;
`
export const SuperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const OrderSec = styled(Section)``
export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 48px;
`

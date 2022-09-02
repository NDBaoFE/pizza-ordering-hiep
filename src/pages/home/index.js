import React from 'react'
import styled from 'styled-components'
import bg from '../../assets/images/wood.png'
import pizza from '../../assets/images/half_pizza.png'
import aboutPic from '../../assets/images/about.png'
import pizzaPig from '../../assets/images/pizza1.png'
import pizzaPig2 from '../../assets/images/pizza2.png'
import otherhalf from '../../assets/images/other_half.png'
import px2vw from '../../utils/px2vw'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'
import Menu from './Menu'
import ChildCart from './components/ChildCart'
import Cart from './components/Cart'
function Home() {
  return (
    <>
      <HomeWrapper>
        <HomeSec>
          <Hero>
            <h1>La caraHiep</h1>
            <YellowBar />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.
              Vestibulum ut felis et lorem porta congue vitae nec turpis. Aliquam quis leo at nunc
              tempor faucibus et ac massa.
            </p>
          </Hero>
          <img src={pizza} alt="pizza" />
        </HomeSec>
        <ChildCart />
        <Cart />
      </HomeWrapper>
      <Wrapper>
        <AboutSec>
          <div>
            <h2>About us</h2>
            <YellowBar />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <Button>Read More</Button>
          </div>
          <img src={aboutPic} alt="about picture" />
        </AboutSec>
        <Section>
          <NormalHero>
            <h2>Find us</h2>
            <YellowBar />
          </NormalHero>
          <Container>
            <iframe
              src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1ssky9+ct1!6i17"
              width="600"
              title="pizza order"
              height="450"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen="1"
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              <p>
                ATTENDANCE<br></br>
                Monday to Sunday 12:00pm - 8:00pm
              </p>
              <p>
                DELIVERY<br></br> Monday - Sunday 12:00pm - 8:00pm
              </p>
            </div>
          </Container>
        </Section>
        <MenuSec>
          <NormalHero>
            <h2>Our Menu</h2>
            <YellowBar />
          </NormalHero>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div>
            <img src={pizzaPig} alt="pizza picture" />
            <img src={pizzaPig2} alt="pizza picture" />
          </div>
          <Button>Menu</Button>
        </MenuSec>
        <OrderSec>
          <NormalHero>
            <h2>Order Here</h2>
            <YellowBar />
          </NormalHero>
          <MenuContainer>
            <Menu />
          </MenuContainer>
        </OrderSec>
      </Wrapper>
      <HomeWrapper>
        <Footer>
          <img src={otherhalf} alt="pizza" />
          <Hero>
            <h1>La caraHiep</h1>
            <YellowBar />
          </Hero>
          <SuperContainer>
            <IconContainer>
              <FacebookRoundedIcon />
            </IconContainer>
            <IconContainer>
              <EmailRoundedIcon />
            </IconContainer>
            <IconContainer>
              <LocalPhoneRoundedIcon />
            </IconContainer>
          </SuperContainer>
        </Footer>
      </HomeWrapper>
    </>
  )
}

export default Home
const Section = styled.section`
  background-color: #000000;
  color: #ffffff;
  width: 100%;
  min-height: 100vh;
  @media (min-width: 1200px) {
    max-width: ${px2vw(1260)};
  }
`
const HomeWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000000;
`
const Footer = styled(Section)`
  background: transparent;
`
const HomeSec = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: transparent;
  img {
    width: 100%;
  }
`
const Hero = styled.div`
  text-align: center;
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
const AboutSec = styled(Section)`
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
const YellowBar = styled.div`
  width: 450px;
  height: 10px;
  background: #f2c94c;
  border-radius: 50px;
`
const Button = styled.div`
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  div {
    max-width: calc(100% / 2.5);
    margin-right: 24px;
    line-height: 2em;
  }
`
const NormalHero = styled.div`
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
const MenuSec = styled(Section)`
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
const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: #000000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 12px;
`
const SuperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const OrderSec = styled(Section)``
const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 48px;
`

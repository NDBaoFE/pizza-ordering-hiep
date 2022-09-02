import React from 'react'
import * as Styled from './Home.styled'
import pizza from '../../assets/images/half_pizza.png'
import aboutPic from '../../assets/images/about.png'
import pizzaPig from '../../assets/images/pizza1.png'
import pizzaPig2 from '../../assets/images/pizza2.png'
import otherhalf from '../../assets/images/other_half.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'
import Navigation from '../../Component/Navigation/Navigation.component'
import Menu from './Menu'
import ChildCart from './components/ChildCart'
import Cart from './components/Cart'
function Home() {
  return (
    <>
      <Navigation />
      <Styled.HomeWrapper>
        <Styled.HomeSec>
          <Styled.Hero>
            <h1>La caraHiep</h1>
            <Styled.YellowBar />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.
              Vestibulum ut felis et lorem porta congue vitae nec turpis. Aliquam quis leo at nunc
              tempor faucibus et ac massa.
            </p>
          </Styled.Hero>
          <img src={pizza} alt="pizza" />
        </Styled.HomeSec>
        <ChildCart />
        <Cart />
      </Styled.HomeWrapper>
      <Styled.Wrapper>
        <Styled.AboutSec>
          <div>
            <h2>About us</h2>
            <Styled.YellowBar />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <Styled.Button>Read More</Styled.Button>
          </div>
          <img src={aboutPic} alt="about picture" />
        </Styled.AboutSec>
        <Styled.Section>
          <Styled.NormalHero>
            <h2>Find us</h2>
            <Styled.YellowBar />
          </Styled.NormalHero>
          <Styled.Container>
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
          </Styled.Container>
        </Styled.Section>
        <Styled.MenuSec>
          <Styled.NormalHero>
            <h2>Our Menu</h2>
            <Styled.YellowBar />
          </Styled.NormalHero>
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
          <Styled.Button>Menu</Styled.Button>
        </Styled.MenuSec>
        <Styled.OrderSec>
          <Styled.NormalHero>
            <h2>Order Here</h2>
            <Styled.YellowBar />
          </Styled.NormalHero>
          <Styled.MenuContainer>
            <Menu />
          </Styled.MenuContainer>
        </Styled.OrderSec>
      </Styled.Wrapper>
      <Styled.HomeWrapper>
        <Styled.Footer>
          <img src={otherhalf} alt="pizza" />
          <Styled.Hero>
            <h1>La caraHiep</h1>
            <Styled.YellowBar />
          </Styled.Hero>
          <Styled.SuperContainer>
            <Styled.IconContainer>
              <FacebookRoundedIcon />
            </Styled.IconContainer>
            <Styled.IconContainer>
              <EmailRoundedIcon />
            </Styled.IconContainer>
            <Styled.IconContainer>
              <LocalPhoneRoundedIcon />
            </Styled.IconContainer>
          </Styled.SuperContainer>
        </Styled.Footer>
      </Styled.HomeWrapper>
    </>
  )
}

export default Home

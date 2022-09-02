import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../../store/slices/cartSlice'
import styled from 'styled-components'
import order2 from '../../../assets/images/order2.png'
import AddShoppingCartImg from '../../../assets/images/addtocart.png'
const ProductsCard = (props) => {
  const [isAdded, setIsAdded] = useState(false)

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    // here, we cannot directly pass the `props` as it is, if we need to access the same value within the child component. So, we've to pass it as a different prop like this- `{...props}`
    const item = { ...props }
    dispatch(addItem(item))

    setIsAdded(true)

    setTimeout(() => {
      setIsAdded(false)
    }, 3000)
  }
  console.log(props)

  return (
    <>
      <div key={props.id}>
        <ImgContainer>
          <Img src={props.image} />
          <OrderButton onClick={() => handleAddToCart()}>
            <img src={AddShoppingCartImg} />
          </OrderButton>
        </ImgContainer>
        <InfoContainer>
          <div>
            <h5>{props.name}</h5>
            <h5>${props.price}</h5>
          </div>
          <p>
            {' '}
            category :{props.category} <br></br>,one of our best seller
          </p>
        </InfoContainer>
      </div>
    </>
  )
}

export default ProductsCard
const InfoContainer = styled.section`
  div {
    display: flex;
    width: 100% !important;
    justify-content: space-between;
  }
  p {
    margin-left: 40px;
  }
`

const ImgContainer = styled.section`
  position: relative;
  width: 80%;
`
const OrderButton = styled.section`
  background: #f2c94c;
  z-index: 50;
  cursor: pointer;
  top: 0;
  position: absolute;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease all;
  opacity: 0;
  border-radius: 10px;
  ${ImgContainer}:hover & {
    opacity: 0.9;
  }
`
const Img = styled.img`
  width: 80%;
`

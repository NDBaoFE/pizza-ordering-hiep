import styled from 'styled-components'
import px2vw from '../../utils/px2vw'
import productApi from '../../utils/productApi'
import React, { useRef, useEffect, useState } from 'react'
import Child from './Child'
import { pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7 } from '../../store/data/data'

function Menu() {
  const [data, setData] = useState([])
  useEffect(() => {
    getPizza()
  }, [])
  const getPizza = async () => {
    const path = await productApi.getPizza()
    const newData = path.data.map((obj, i) => ({
      ...obj,
      quantity: '1',
      image: `./pizza/pizza${i + 1}.png`,
    }))
    setData(newData)
  }

  return (
    <Container className="hi">
      <Child pizzas={data} />
    </Container>
  )
}
export default Menu

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    display: flex;
    width: calc((100% / 2) - 48px);
    margin: 24px;
    h5 {
      font-size: 20px;
      color: #f2c94c;
    }
    p {
      font-size: 15px;
      line-height: 1.5em;
    }
  }
`
const InfoContainer = styled.section`
  div {
    max-width: 80% !important;
    justify-content: space-between;
  }
`

const ImgContainer = styled.section`
  position: relative;
`
const OrderButton = styled.section`
  background: #f2c94c;
  z-index: 100;
  cursor: pointer;
  top: 0;
  position: absolute;
  width: 100%;
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
const Img = styled.img``

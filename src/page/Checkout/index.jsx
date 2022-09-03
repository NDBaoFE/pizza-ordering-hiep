import React from 'react'
import * as Styled from './Checkout.styled'
import pizza from '../../assets/pizza.jpg'
import momo from '../../assets/momo.jpg'
import productApi from '../../utils/productApi'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, incrementItem, decrementItem } from '../../store/slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
const Checkout = (props) => {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

 

  const calculateTotalPrice = () =>
    // myOrder.reduce((total, item) => (total += item.quantity * item.price), 0)
    cartItems.reduce((total, item) => (total += item.quantity * item.price), 0)

  const [form, setForm] = React.useState({
    phone: '',
    address: '',
    totalPrice: calculateTotalPrice(),
  })

  const onSubmit = async () => {
    const getOrderFromAPI = await productApi.getOrder()
    const placeOrderToAPI = await productApi.placeOrder()
    console.log('getOrderFromAPI: ', getOrderFromAPI.data)
    console.log('placeOrderToAPI: ', placeOrderToAPI.data)
    toast.success('Ordering successfully !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:"colored",
      });
    setForm({
      phone: '',
      address: '',
      totalPrice: calculateTotalPrice(),
    })
  }

  const handleDecrease = (item) => {
    dispatch(decrementItem(item.id))

    // const newOrder = myOrder.map((order) =>
    //   order.pizza === item.pizza ? { ...order, quantity: --item.quantity } : order,
    // )
    // setMyOrder(newOrder)
    setForm({
      ...form,
      totalPrice: calculateTotalPrice(),
    })
  }

  const handleIncrease = (item) => {
    dispatch(incrementItem(item.id))

    // const newOrder = myOrder.map((order) =>
    //   order.pizza === item.pizza ? { ...order, quantity: ++item.quantity } : order,
    // )
    // setMyOrder(newOrder)

    setForm({
      ...form,
      totalPrice: calculateTotalPrice(),
    })
  }

  return (
    <Styled.Background>
      {/* Left */}
      <Styled.Cart>
        <Styled.Header>Shopping Cart</Styled.Header>
        <Styled.List>
          {cartItems.map((item) => (
            <Styled.Item key={item.name}>
              <Styled.Image src={item.image} />

              <Styled.Info>
                <h1>Pizza {item.name}</h1>
                <div>
                  <button onClick={() => handleDecrease(item)}>-</button>
                  <button>{item.quantity}</button>
                  <button onClick={() => handleIncrease(item)}>+</button>
                </div>
              </Styled.Info>
              <Styled.Price>${item.price}</Styled.Price>
              <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            </Styled.Item>
          ))}
        </Styled.List>
      </Styled.Cart>

      {/* Right */}
      <Styled.Payment>
        <Styled.Header>Payment</Styled.Header>
        <Styled.Momo src={momo} alt="Momo Payment" />
        <Styled.TotalPrice>${form.totalPrice}</Styled.TotalPrice>
        <Styled.InputBtn
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="Phone Number"
        />
        <Styled.InputBtn
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          placeholder="Address"
        />
        <Styled.InputBtn submit type="submit" onClick={onSubmit} />
      </Styled.Payment>
      <ToastContainer 
      
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </Styled.Background>
  )
}

Checkout.propTypes = {}

export default Checkout

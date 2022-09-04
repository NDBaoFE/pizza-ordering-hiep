import React from 'react'
import * as Styled from './Checkout.styled'
import momo from '../../assets/momo.jpg'
import productApi from '../../utils/productApi'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, incrementItem, decrementItem } from '../../store/slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify'
import LocalStorageUtils from '../../utils/LocalStorageUtils'

const Checkout = (props) => {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const calculateTotalPrice = () =>
    // myOrder.reduce((total, item) => (total += item.quantity * item.price), 0)
    LocalStorageUtils.getItem('cart').reduce(
      (total, item) => (total += item.quantity * item.price),
      0,
    )

  const [form, setForm] = React.useState({
    phone: '',
    address: '',
    totalPrice: calculateTotalPrice(),
  })

  console.log(form.totalPrice)

  const onSubmit = async () => {
    if (form.phone && form.address) {
      const getOrderFromAPI = await productApi.getOrder()
      const placeOrderToAPI = await productApi.placeOrder()
      console.log('getOrderFromAPI: ', getOrderFromAPI.data)
      console.log('placeOrderToAPI: ', placeOrderToAPI.data)
      toast.success('Ordering successfully !', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
      setForm({
        phone: '',
        address: '',
        totalPrice: 0,
      })
      cartItems.map((cartItem) => dispatch(removeItem(cartItem.id)))
    } else {
      toast.error('Please fill in blank!')
    }
  }

  const handleDecrease = (item) => {
    dispatch(decrementItem(item.id))
    // const newOrder = myOrder.map((order) =>
    //   order.pizza === item.pizza ? { ...order, quantity: --item.quantity } : order,
    // )
    // setMyOrder(newOrder)
    // setMyOrder()
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
                  <Styled.SmallButton onClick={() => handleDecrease(item)}>-</Styled.SmallButton>
                  <Styled.SmallButton>{item.quantity}</Styled.SmallButton>
                  <Styled.SmallButton onClick={() => handleIncrease(item)}>+</Styled.SmallButton>
                </div>
              </Styled.Info>
              <Styled.Price>${item.price}</Styled.Price>
              <Styled.RemvoeButton onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </Styled.RemvoeButton>
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

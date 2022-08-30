import React from 'react'
import * as Styled from './Checkout.styled'
import pizza from '../../assets/pizza.jpg'
import momo from '../../assets/momo.jpg'

const Checkout = (props) => {
  const [myOrder, setMyOrder] = React.useState([
    { pizza: 'Bảo', amount: 3, price: 25 },
    { pizza: 'Minh', amount: 2, price: 50 },
    { pizza: 'Đăng', amount: 1, price: 75 },
  ])

  const [form, setForm] = React.useState({
    phone: '',
    address: '',
    totalPrice: 0,
  })

  React.useEffect(
    () =>
      setForm({
        ...form,
        totalPrice: myOrder.reduce((total, item) => (total += item.amount * item.price), 0),
      }),
    [form, myOrder],
  )

  const onSubmit = () => {
    alert(JSON.stringify(form))
  }

  const handleDecrease = (item) => {
    const newOrder = myOrder.map((order) =>
      order.pizza === item.pizza ? { ...order, amount: --item.amount } : order,
    )
    setMyOrder(newOrder)
  }

  const handleIncrease = (item) => {
    const newOrder = myOrder.map((order) =>
      order.pizza === item.pizza ? { ...order, amount: ++item.amount } : order,
    )
    setMyOrder(newOrder)
  }

  return (
    <Styled.Background>
      {/* Left */}
      <Styled.Cart>
        <Styled.Header>Shopping Cart</Styled.Header>
        <Styled.List>
          {myOrder.map((item) => (
            <Styled.Item key={item.pizza}>
              <Styled.Image src={pizza} />

              <Styled.Info>
                <h1>Pizza {item.pizza}</h1>
                <div>
                  <button onClick={() => handleDecrease(item)}>-</button>
                  <button>{item.amount}</button>
                  <button onClick={() => handleIncrease(item)}>+</button>
                </div>
              </Styled.Info>
              <Styled.Price>${item.price}</Styled.Price>
              <button onClick={() => alert('Chưa làm =))))))')}>Remove</button>
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
    </Styled.Background>
  )
}

Checkout.propTypes = {}

export default Checkout

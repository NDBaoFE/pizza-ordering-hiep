import { Routes, Route } from 'react-router-dom'
import Navigation from './router/Navigation/Navigation.component'

const Home = () => {
  return <h1> home Page</h1>
}
const Order = () => {
  return <h1> Order Page</h1>
}

const AboutUs = () => {
  return <h1> About Us Page</h1>
}
const Menu = () => {
  return <h1> Menu Page</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="order" element={<Order />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="menu" element={<Menu />} />
      </Route>
    </Routes>
  )
}

export default App

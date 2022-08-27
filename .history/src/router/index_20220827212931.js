import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from '../pages/Checkout'

const privateRoutes = [{ name: 'checkout', path: '/checkout', element: <Checkout /> }]

const RouterComponent = (
  <div>
    <BrowserRouter>
      <Routes>
        {privateRoutes.map((route) => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </div>
)

export default RouterComponent

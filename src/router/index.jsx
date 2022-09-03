import { Routes, Route, Navigate,BrowserRouter } from 'react-router-dom'
import SignUp from '../page/sign-up/sign-up.component'
import SignIn from '../page/sign-in/sign-in.component'
import Home from '../page/home/index'
import { PrivateRoute } from './PrivateRoute.component'
import { PublicRoute } from './PublicRoute.component'
import Checkout from '../page/Checkout/checkout'
export const publicRoute = [
  {
    name: 'login',
    path: '/login',
    element: <SignIn />,
  },
  {
    name: 'signUp',
    path: '/signUp',
    element: <SignUp />,
  },
 
]
export const privateRoute = [
  {
    name: 'checkout',
    path: '/order',
    element: <Checkout />,
  },
  {
    name: 'home',
    path: '/',
    element: <Home />,
  },
 
]

export const Switch = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<PrivateRoute />}>
        {privateRoute.map((route) => (
          <Route key={route.name} exact={true} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="/" element={<PublicRoute />}>
        {publicRoute.map((route) => (
          <Route key={route.name} exact={true} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route element={<Navigate to="/" replace />} />
    </Routes>
    </BrowserRouter>
  )
}
export default Switch

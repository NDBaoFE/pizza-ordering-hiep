import { Routes, Route, Navigate,BrowserRouter } from 'react-router-dom'
import SignUp from '../page/sign-up/sign-up.component'
import SignIn from '../page/sign-in/sign-in.component'
import Home from '../page/home/index'
import { PrivateRoute } from './PrivateRoute.component'
import { PublicRoute } from './PublicRoute.component'
import { HomeRoute } from './HomeRoute.component'
import Checkout from '../page/Checkout/index'
import { useSelector } from 'react-redux'
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
export const homeRoute=[
  {
    name: 'home',
    path: '/',
    element: <Home />,
  },
]
export const privateRoute = [
  {
    name: 'checkout',
    path: '/order',
    element: <Checkout />,
  },
  
  
 
]

export const Switch = () => {
  const currentUser =   useSelector((state) => state.user.currentUser) 
  return (
    <BrowserRouter>
    <Routes>
      
      <Route element={<PrivateRoute currentUser={currentUser} />}>
        {privateRoute.map((route) => (
          <Route key={route.name} exact={true} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="/" element={<HomeRoute />}>
        {homeRoute.map((route) => (
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

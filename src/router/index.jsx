import { Routes, Route, Navigate } from 'react-router-dom'
import SignUp from '../page/sign-up/sign-up.component'
import SignIn from '../page/sign-in/sign-in.component'
import Home from '../page/home'
import { PrivateRoute } from './PrivateRoute.component'
import { PublicRoute } from './PublicRoute.component'

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
    name: 'home',
    path: '/',
    element: <Home />,
  },
]

export const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        {privateRoute.map((route) => (
          <Route key={route.name} exact={true} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route element={<PublicRoute />}>
        {publicRoute.map((route) => (
          <Route key={route.name} exact={true} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route element={<Navigate to="/" replace />} />
    </Routes>
  )
}
export default Switch

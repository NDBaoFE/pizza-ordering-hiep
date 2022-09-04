import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ currentUser }) => {
  console.log(currentUser)
  return currentUser ? <Outlet /> : <Navigate to="/" replace />
}

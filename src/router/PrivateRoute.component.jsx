import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/user.context'
export const PrivateRoute = () => {
  const { currentUser } = useContext(UserContext)
  const location = useLocation()
  return currentUser && currentUser.uid.length >= 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

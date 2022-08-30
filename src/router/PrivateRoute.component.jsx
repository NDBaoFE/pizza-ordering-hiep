import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/user.context'
export const PrivateRoute = () => {
  const { currentUser } = useContext(UserContext)

  return currentUser && currentUser.length >= 0 ? <Outlet /> : <Navigate to="/login" replace />
}

import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PublicRoute = () => {
  const currentUser = useSelector((state) => state.user.currentUser)

  return currentUser ? <Navigate to="/" replace /> : <Outlet />
}

import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PublicRoute = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  return !currentUser || currentUser.uid.length <= 0 ? <Outlet /> : <Navigate to="/" replace />
}

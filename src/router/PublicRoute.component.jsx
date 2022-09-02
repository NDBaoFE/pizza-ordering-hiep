import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from './../store/user/user.selector'

export const PublicRoute = () => {
  const currentUser = useSelector(selectCurrentUser)
  return !currentUser || currentUser.length <= 0 ? <Outlet /> : <Navigate to="/" replace />
}

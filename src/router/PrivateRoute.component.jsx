import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectCurrentUser } from './../store/user/user.selector'
export const PrivateRoute = () => {
  const currentUser = useSelector(selectCurrentUser)
  const location = useLocation()
  console.log(currentUser)
  return currentUser && currentUser.uid.length >= 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

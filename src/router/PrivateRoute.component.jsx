import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'

export const PrivateRoute = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  const location = useLocation()
  console.log(currentUser)
  return currentUser && currentUser.uid.length >= 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

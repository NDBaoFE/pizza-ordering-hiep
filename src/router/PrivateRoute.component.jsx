import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'

export const PrivateRoute = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  // const location = useLocation()
  alert(currentUser)
  return currentUser && currentUser.uid.length >= 0 ? <Outlet /> : <Navigate to="/login" replace />
}

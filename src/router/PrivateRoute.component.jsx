import { Navigate, Outlet, useLocation } from 'react-router-dom'



export const PrivateRoute = ({currentUser}) => {
  
  return  currentUser ? (
    
  <Outlet />
  ) : (
    <Navigate to="/"  replace />
  )
}

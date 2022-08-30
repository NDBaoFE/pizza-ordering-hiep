import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/user.context'

export const PublicRoute = () => {
  const { currentUser } = useContext(UserContext)
  return !currentUser || currentUser.length <= 0 ? <Outlet /> : <Navigate to="/" replace />
}

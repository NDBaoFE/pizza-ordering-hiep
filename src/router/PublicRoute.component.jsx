import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
export const PublicRoute = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  return currentUser ? <Navigate to="/" replace /> : <Outlet />
}

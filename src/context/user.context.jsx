import { createContext, useEffect, useState } from 'react'
import { onAuthStateChangedListener, createUserDoccumentFromAuth } from '../utils/firebase.utils'
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
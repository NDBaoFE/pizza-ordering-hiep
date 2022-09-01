import { createContext, useEffect, useState } from 'react'
import { onAuthStateChangedListener, createUserDoccumentFromAuth } from '../utils/firebase.utils'
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user)
      if (user) {
        createUserDoccumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

import Switch from './router'
import { useEffect } from 'react'
import { onAuthStateChangedListener, createUserDoccumentFromAuth } from './utils/firebase.utils'
import { useDispatch } from 'react-redux'
import { userReducer } from './store/user/user.reducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // console.log(user.uid)
      if (user) {
        createUserDoccumentFromAuth(user)
      }
      dispatch(userReducer(user))
    })
    return unsubscribe
  }, [dispatch])
  return (
    <>
      <Switch />
    </>
  )
}

export default App

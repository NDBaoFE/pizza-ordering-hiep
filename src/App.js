import Switch from './router'
import { useEffect } from 'react'
import { onAuthStateChangedListener, createUserDoccumentFromAuth } from './utils/firebase.utils'
import { useDispatch } from 'react-redux'
import { userReducer } from './store/user/user.reducer'
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      console.log(user)
      if (user) {
        createUserDoccumentFromAuth(user)
      }
      await setTimeout(dispatch(userReducer(user)), 1000)
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

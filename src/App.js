import Switch from './router'
import { useEffect } from 'react'
import { onAuthStateChangedListener, createUserDoccumentFromAuth } from './utils/firebase.utils'
// import { createAction } from './utils/reducer.utils'
import { setCurrentUser } from './store/user/user.action'
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // console.log(user.uid)
      if (user) {
        createUserDoccumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
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

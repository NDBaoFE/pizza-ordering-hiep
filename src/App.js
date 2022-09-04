import { useEffect } from 'react'
import Switch from './router'
import { useDispatch } from 'react-redux'
import { userReducer } from './store/user/user.reducer'
import LocalStorageUtils from './utils/LocalStorageUtils'
import { createUserDoccumentFromAuth, onAuthStateChangedListener } from './utils/firebase.utils'
import './index.css'
function App() {
  const dispatch = useDispatch()

  const uid = LocalStorageUtils.getItem('token')
  dispatch(userReducer(uid))

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDoccumentFromAuth(user)
      }
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

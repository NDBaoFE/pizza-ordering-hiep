import { Outlet, Link } from 'react-router-dom'
import { signOutUser } from '../../utils/firebase.utils'
import { useSelector } from 'react-redux'

import './Navigation.styles.scss'

const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  // const signOutHandler = async () => {
  //   const res = await signOutUser()
  //   setCurrentUser(res)
  // }
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <h3 className="logo">Logo</h3>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/home">
            Home
          </Link>
          <Link className="nav-link" to="/order">
            Order
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  )
}
export default Navigation

import { Outlet, Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase.utils'
import './Navigation.styles.scss'
const Navigation = () => {
  const { currentUser } = useContext(UserContext)
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
          <Link className="nav-link" to="/aboutUs">
            About Us
          </Link>
          <Link className="nav-link" to="/menu">
            Menu
          </Link>
          <Link className="nav-link" to="/order">
            Order
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <span>hi</span>
          )}
        </div>
      </div>
      <Outlet />
    </>
  )
}
export default Navigation

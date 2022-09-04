import { Outlet, Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import AvaDropdown from '../profile/ava.component'
import { toggleAva } from '../../store/user/user.reducer'
import './Navigation.styles.scss'
import { useState, useEffect } from 'react'
import { signOutUser } from '../../utils/firebase.utils'
import LocalStorageUtils from '../../utils/LocalStorageUtils'

const Navigation = () => {
  const [ava, setAva] = useState(LocalStorageUtils.getItem('avatar') || '')
  const { currentUser, isAvaOpen } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const ToggleAva = () => {
    if (!isAvaOpen) {
      dispatch(toggleAva(true))
      return
    }
    dispatch(toggleAva(false))
  }

  useEffect(() => {}, [signOutUser])

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <h3 className="logo">LACARAHIEP</h3>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/order">
            Order
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={ToggleAva}>
              <img
                className="userAva"
                src={
                  ava ||
                  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                }
                alt="ava"
              />
            </span>
          ) : (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          )}
          {currentUser && isAvaOpen && <AvaDropdown />}
        </div>
      </div>
      <Outlet />
    </>
  )
}
export default Navigation

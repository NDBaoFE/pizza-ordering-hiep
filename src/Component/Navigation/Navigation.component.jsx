import { Outlet, Link } from 'react-router-dom'
import './Navigation.styles.scss'
const Navigation = () => {
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
        </div>
      </div>
      <Outlet />
    </>
  )
}
export default Navigation

import './ava.styles.scss'

import { signOutUser } from '../../utils/firebase.utils'
import LocalStorageUtils from '../../utils/LocalStorageUtils'

const AvaDropdown = () => {
  const handleClick = () => {
    LocalStorageUtils.removeItem('token')
    LocalStorageUtils.removeItem('avatar')
    signOutUser()
    window.location = '/'
  }

  return (
    <div className="ava-container">
      <button className="logOutBtn" onClick={handleClick}>
        LOG OUT
      </button>
    </div>
  )
}

export default AvaDropdown

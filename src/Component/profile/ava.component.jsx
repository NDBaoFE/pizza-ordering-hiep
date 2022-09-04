import './ava.styles.scss'
import { signOutUser } from '../../utils/firebase.utils'
const AvaDropdown = () => {
  return (
    <div className="ava-container">
      <button className="logOutBtn" onClick={signOutUser}>
        LOG OUT
      </button>
    </div>
  )
}

export default AvaDropdown

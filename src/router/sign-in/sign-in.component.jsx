import { SignInWithGooglePopUp, createUserDoccumentFromAuth } from '../../utils/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopUp()
    const usetDocRef = await createUserDoccumentFromAuth(user)
  }
  return (
    <>
      <div className=""> this is sign in page</div>
      <button onClick={logGoogleUser}>sign in with google</button>
    </>
  )
}

export default SignIn

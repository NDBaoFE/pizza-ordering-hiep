import {
  SignInWithGooglePopUp,
  createUserDoccumentFromAuth,
  signInAuthUserWithEmailAndPasword,
} from '../../utils/firebase.utils'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from '../../Component/form-input/form-input.component'
import { useContext } from 'react'
import { UserContext } from '../../context/user.context'
import './sign-in.component.scss'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopUp()
    const usetDocRef = await createUserDoccumentFromAuth(user)
    setCurrentUser(user.uid)
  }
  const { setCurrentUser } = useContext(UserContext)
  const methods = useForm()

  const onSubmit = async () => {
    const { email, password } = methods.getValues()

    try {
      const { user } = await signInAuthUserWithEmailAndPasword(email, password)
      setCurrentUser(user.uid)
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          alert('Your email is not valid.\nPlease enter a valid email.')
          break
        case 'auth/weak-password':
          alert('Your password must have at least 6 characters.')
          break
        case 'auth/user-disabled':
          alert('This account has been banned.\nPlease contact with us for more information.')
          break
        case 'auth/user-not-found':
          alert('There is no user with your email.\nPlease register a new account instead.')
          break
        case 'auth/wrong-password':
          alert('Your password is incorrect.')
          break
        case 'auth/email-already-in-use':
          alert('Your email is already in use.\nPlease try to login instead.')
          break

        default:
          alert('Sorry, something is wrong!')
      }
      console.log('user Sign In encountered an error', error)
    }
  }

  return (
    <>
      <FormProvider {...methods}>
        <div className="container">
          <form className="signUpForm" onSubmit={methods.handleSubmit(onSubmit)}>
            <h1 className="title">Sign in</h1>
            <FormInput type="email" label="Email" nameRegister={'email'} />
            <FormInput type="password" label="Password" nameRegister={'password'} />
            <input className="signUpBtn" type="submit" value={'Sign in'} />
            <div className="or">
              <p>OR</p>
            </div>
            <button type="button " className="googleBtn" onClick={logGoogleUser}>
              sign in with google
            </button>
          </form>
        </div>
      </FormProvider>
    </>
  )
}

export default SignIn

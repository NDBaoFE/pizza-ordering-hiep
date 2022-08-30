import {
  SignInWithGooglePopUp,
  createUserDoccumentFromAuth,
  signInAuthUserWithEmailAndPasword,
} from '../../utils/firebase.utils'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from '../../Component/form-input/form-input.component'
import { useContext } from 'react'
import { UserContext } from '../../context/user.context'
import './sign-up.component.scss'

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
        case 'auth/user-not-found':
          alert('Email does not exits!')
          break
        case 'auth/wrong-password':
          alert('Incorrect password for email')
          break
        default:
          console.log(error)
      }
      // console.log('user Sign In encountered an error', error)
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
            <button type="button " onClick={logGoogleUser}>
              sign in with google
            </button>
          </form>
        </div>
      </FormProvider>
    </>
  )
}

export default SignIn

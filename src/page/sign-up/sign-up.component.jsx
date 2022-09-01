import { useForm, FormProvider } from 'react-hook-form'
import FormInput from '../../Component/form-input/form-input.component'
import './sign-up.component.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  createAuthUserWithEmailAndPasword,
  createUserDoccumentFromAuth,
} from '../../utils/firebase.utils'

const SignUp = () => {
  // const [success, setSuccess] = useState(false)
  const navigate = useNavigate()
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: '',
    },
  })

  const onSubmit = async () => {
    const values = methods.getValues()
    const { displayName, email, password, confirmPassword } = values
    methods.reset()
    if (password !== confirmPassword) {
      alert('your password do not match')
      return
    }
    const signUpSuccess = (user) => {
      if (user) {
        alert('Success Sign Up')
        // setSuccess(true)
        navigate('/login')
      }
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPasword(email, password)

      await createUserDoccumentFromAuth(user, { displayName })
      signUpSuccess(user.uid)
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
          console.log('user Sign In encountered an error', error)
          alert('Sorry, you need to fill in all the blank')
      }
    }
  }
  return (
    <>
      <FormProvider {...methods}>
        <div className="container">
          <form className="signUpForm" onSubmit={methods.handleSubmit(onSubmit)}>
            <h1 className="title">Sign Up</h1>
            <FormInput label="DisplayName" nameRegister={'displayName'} />
            <FormInput type="email" label="Email" nameRegister={'email'} />
            <FormInput type="password" label="Password" nameRegister={'password'} />
            <FormInput type="password" label="Confirm Password" nameRegister={'confirmPassword'} />
            <input className="signUpBtn" type="submit" value={'Sign Up'} />
          </form>
        </div>
      </FormProvider>
    </>
  )
}

export default SignUp

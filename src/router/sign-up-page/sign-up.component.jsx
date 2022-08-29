import { useForm, FormProvider } from 'react-hook-form'
import FormInput from '../../Component/form-input/form-input.component'
import './sign-up.component.scss'
import {
  createAuthUserWithEmailAndPasword,
  createUserDoccumentFromAuth,
} from '../../utils/firebase.utils'

const SignUp = () => {
  const methods = useForm()
  const onSubmit = async () => {
    const values = methods.getValues()
    const { displayName, email, password, confirmPassword } = values

    if (password !== confirmPassword) {
      alert('your password do not match')
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPasword(email, password)

      await createUserDoccumentFromAuth(user, { displayName })

      // resetField('displayName')
      // resetField('email')
      // resetField('password')
      // resetField('confirmPassword')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log('user creation encountered an error', error)
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

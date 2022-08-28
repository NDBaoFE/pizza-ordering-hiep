import { useForm } from 'react-hook-form'
import {
  createAuthUserWithEmailAndPasword,
  createUserDoccumentFromAuth,
} from '../../utils/firebase.utils'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    resetField,
  } = useForm()
  const onSubmit = async () => {
    const values = getValues()
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
      <h1>Sign Up with your email </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> displayName</label>
        <input {...register('displayName', { required: true })} />
        <label> Email</label>
        <input type="email" {...register('email', { required: true })} />
        <label> password</label>
        <input type="password" {...register('password', { required: true })} />
        <label> confirmPassword</label>
        <input type="password" {...register('confirmPassword', { required: true })} />
        {errors.password && <p>This field is required</p>}
        <input type="submit" />
      </form>
    </>
  )
}

export default SignUp

import { useForm, FormProvider } from 'react-hook-form'
import FormInput from '../../Component/form-input/form-input.component'
import './sign-up.component.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Navigation from '../../Component/Navigation/Navigation.component'
import 'react-toastify/dist/ReactToastify.css'
import {
  createAuthUserWithEmailAndPasword,
  createUserDoccumentFromAuth,
} from '../../utils/firebase.utils'

import LocalStorageUtils from '../../utils/LocalStorageUtils'
import { userReducer } from '../../store/user/user.reducer'
import { useDispatch } from 'react-redux'

const SignUp = () => {
  const dispatch = useDispatch()
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
      toast.error('Your password does not match!!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
      return
    }
    const signUpSuccess = (user) => {
      if (user) {
        toast.success('Succesfully Sign Up', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
        // setSuccess(true)
        navigate('/login')
      }
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPasword(email, password)
      LocalStorageUtils.setItem('token', user.uid)
      dispatch(userReducer(user))

      await createUserDoccumentFromAuth(user, { displayName })
      signUpSuccess(user.uid)
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          toast.error('Your email is not valid.\nPlease enter a valid email.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
          break
        case 'auth/weak-password':
          toast.error('Your password must have at least 6 characters.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
          break
        case 'auth/user-disabled':
          toast.error(
            'This account has been banned.\nPlease contact with us for more information.',
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            },
          )
          break
        case 'auth/user-not-found':
          toast.error('There is no user with your email.\nPlease register a new account instead.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
          break
        case 'auth/wrong-password':
          toast.error('Your password is incorrect.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
          break
        case 'auth/email-already-in-use':
          toast.error('Your email is already in use.\nPlease try to login instead.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
          break

        default:
          console.log('user Sign In encountered an error', error)
          toast.error('Sorry, you need to fill in all the blank', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
      }
    }
  }
  return (
    <>
      <Navigation />
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
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </FormProvider>
    </>
  )
}

export default SignUp

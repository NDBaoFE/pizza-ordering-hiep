import {
  SignInWithGooglePopUp,
  signInAuthUserWithEmailAndPasword,
} from '../../utils/firebase.utils'
import { useForm, FormProvider } from 'react-hook-form'
import Navigation from '../../Component/Navigation/Navigation.component'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import FormInput from '../../Component/form-input/form-input.component'
// import { useContext } from 'react'
// import { UserContext } from '../../context/user.context'
import './sign-in.component.scss'

const SignIn = () => {
  const logGoogleUser = async () => {
    await SignInWithGooglePopUp()
    // const usetDocRef = await createUserDoccumentFromAuth(user)
    // setCurrentUser(user.uid) const { user } =
  }
  // const { setCurrentUser } = useContext(UserContext)
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async () => {
    const { email, password } = methods.getValues()
    methods.reset()
    try {
      const { user } = await signInAuthUserWithEmailAndPasword(email, password)
      // setCurrentUser(user.uid)
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          toast.error('Invalid Email!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            
          break
        case 'auth/weak-password':
          toast.error('Your password must have at least 6 characters.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:"colored",
            });
          break
        case 'auth/user-disabled':
          toast.error('This account has been banned.\nPlease contact with us for more information.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:"colored",
            });
          break
        case 'auth/user-not-found':
          toast.error('There is no user with your email.\nPlease register a new account instead.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:"colored",
            });
          break
        case 'auth/wrong-password':
          toast.error('Your password is incorrect!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:"colored",
            });
          break
        case 'auth/email-already-in-use':
          toast.error('Your email is already in use.\nPlease try to login instead!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:"colored",
            });
          break

        default:
          console.log('user Sign In encountered an error', error)
          toast.error('Please fill in all the blanks!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:"colored",
            });
            
      }
    }
  }
 

  return (
    <>
    <Navigation />
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
            <button type="button" className="googleBtn" onClick={logGoogleUser}>
              sign in with google
            </button>
            <div className="">
              Don't have account?{' '}
              <Link to="/signUp" style={{ color: '#f17119' }}>
                {' '}
                Sign Up
              </Link>
            </div>
          </form>
        </div>
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
      </FormProvider>
    </>
  )
}

export default SignIn

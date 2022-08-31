import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyDkLglzqr0KHzI3dbEvGD9h7Bk01JvYD7I',
  authDomain: 'pizza-db-c104f.firebaseapp.com',
  projectId: 'pizza-db-c104f',
  storageBucket: 'pizza-db-c104f.appspot.com',
  messagingSenderId: '463986977754',
  appId: '1:463986977754:web:7c2a00065620346ddeeee3',
  measurementId: 'G-4X8FT4JS8Z',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  propmt: 'select_account',
})

export const auth = getAuth()
export const SignInWithGooglePopUp = () => signInWithPopup(auth, provider)
export const db = getFirestore()

export const createUserDoccumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'user', userAuth.uid)
  // console.log(userDocRef)
  const userSnapShot = await getDoc(userDocRef)

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (err) {
      console.log('err creating the user', err.message)
    }
  }
  return userDocRef
}
export const createAuthUserWithEmailAndPasword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPasword = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

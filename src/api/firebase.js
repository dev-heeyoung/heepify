// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { getDatabase, ref, get } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const database = getDatabase(app)

export function login () {
  signInWithPopup(auth, provider).catch(console.error)
}

export function logout () {
  signOut(auth).catch(console.error)
}

export function onUserStateChange (callback) {
  onAuthStateChanged(auth, async user => {
    const updatedUser = user ? await checkAdminUser(user) : null
    callback(updatedUser)
  })
}

async function checkAdminUser (user) {
  return get(ref(database, 'admins')).then(snapshop => {
    if (snapshop.exists()) {
      const adminId = snapshop.val()
      const isAdmin = adminId.includes(user.uid)
      return { ...user, isAdmin }
    }
  })
}

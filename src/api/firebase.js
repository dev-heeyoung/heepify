// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { getDatabase, ref, set, get, remove } from 'firebase/database'
import { v4 as uuid } from 'uuid'

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

export async function addNewProduct (product, sizeOption, imageURL) {
  const id = uuid()
  set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    sizeOption,
    imageURL
  })
}

export async function getProducts () {
  return get(ref(database, `products`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val())
      } else {
        return []
      }
    })
    .catch(console.log)
}

export async function getCart (userId) {
  return get(ref(database, `carts/${userId}`))
    .then(snapshot => {
      return Object.values(snapshot.val() || {})
    })
    .catch(console.log)
}

export async function addOrUpdateToCart (userId, product) {
  set(ref(database, `carts/${userId}/${product.id}`), product)
}

export async function removeFromCart (userId, productId) {
  remove(ref(database, `carts/${userId}/${productId}`))
}

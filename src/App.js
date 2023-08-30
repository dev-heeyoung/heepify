import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Women from './pages/products/Women'
import Men from './pages/products/Men'
import Accessories from './pages/products/Accessories'
import ProductDetail from './pages/products/ProductDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/cart', element: <Cart /> },
      { path: '/login', element: <Login /> },
      { path: '/products/women', element: <Women /> },
      { path: '/products/men', element: <Men /> },
      { path: '/products/accessories', element: <Accessories /> },
      { path: '/products/:productId', element: <ProductDetail /> }
    ]
  }
])

function App () {
  return <RouterProvider router={router}></RouterProvider>
}

export default App

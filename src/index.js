import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Cart from './pages/Cart'
import All from './pages/products/All'
import Women from './pages/products/Women'
import Men from './pages/products/Men'
import Accessories from './pages/products/Accessories'
import ProductDetail from './pages/products/ProductDetail'
import NewProduct from './pages/products/NewProduct'
import ProtectedRoute from './pages/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/cart',
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        )
      },
      { path: '/products/all', element: <All /> },
      { path: '/products/women', element: <Women /> },
      { path: '/products/men', element: <Men /> },
      { path: '/products/accessories', element: <Accessories /> },
      {
        path: '/products/NewProduct',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        )
      },
      { path: '/products/:productId', element: <ProductDetail /> }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Layout/Home'
import Orders from './components/Orders/Orders'
import Preview from './components/Preview/preview'
import Inventory from './components/Inventory/Inventory'
import loadShoppingCart from './components/loadShoppingCart'

const shop = createBrowserRouter([
  {
    path: '/',
    element : <Home></Home>,
    children : [
      {
        path:'/',
        element: <App></App>,
      },
      {
        path: 'orders',
        element : <Orders></Orders>,
        loader: loadShoppingCart

      },
      {
        path: 'preview',
        element: <Preview></Preview>,

      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={shop}></RouterProvider>
  </React.StrictMode>,
)

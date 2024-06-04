import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import CardDisplay from "./pages/CardDisplay.jsx";
import MaterialOrderPlacement from "./pages/MaterialOrderPlacement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/materias-primas",
    element: <CardDisplay />
  },
  {
    path: "/material-order-placement",
    element: <MaterialOrderPlacement />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

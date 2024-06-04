import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import ReactForm from './components/Form.jsx';
import CardDisplay from "./pages/CardDisplay.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/materias-primas",
    element: <ReactForm />
  },
  {
    path: "/card-display",
    element: <CardDisplay />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

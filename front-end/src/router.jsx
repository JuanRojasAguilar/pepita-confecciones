import { createBrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import CardDisplay from "./pages/CardDisplay.jsx";
import MaterialOrderPlacement from "./pages/MaterialOrderPlacement.jsx";
import OrderPlacement from "./pages/OrderPlacement.jsx";
import AdminPortal from "./pages/AdminPortal.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/materias-primas",
    element: <CardDisplay />,
  },
  {
    path: "/material-order-placement",
    element: <MaterialOrderPlacement />,
  },
  {
    path: "/order-placement",
    element: <OrderPlacement />,
  },
  {
    path: "/admin-portal",
    element: <AdminPortal />
  }
]);

export default router;

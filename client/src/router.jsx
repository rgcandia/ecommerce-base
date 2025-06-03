import { createBrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';
import AccesoDenegado from "./components/AccesoDenegado/AccesoDenegado"; // o la ruta que corresponda

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRouter />,
  },
  {
    path: '/acceso-denegado',
    element: <AccesoDenegado />,
  },
]);

export default router;

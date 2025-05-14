import { createBrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRouter />, // Decide si renderiza Login o App
  },
]);

export default router;

import { useAuth0 } from '@auth0/auth0-react';
import App from './components/App/App';
import LoginPage from './components/LoginForm/LoginForm';
import useSocketInit from './hooks/useSocketInit';

const MainRouter = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  useSocketInit();

  if (isLoading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    loginWithRedirect({
        ui_locales: 'es'  // fuerza español
    }); // Redirige al login de Auth0
    return <div>Redirigiendo al login...</div>;
  }

  return <App />;
};

export default MainRouter;

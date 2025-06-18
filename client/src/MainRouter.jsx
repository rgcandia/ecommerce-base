import { useAuth0 } from '@auth0/auth0-react';
import App from './components/App/App';
import LoginPage from './components/LoginForm/LoginForm';
import useSocketInit from './hooks/useSocketInit';
import LoaderDash from  './components/LoaderDash/LoaderDash'
const MainRouter = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  useSocketInit({user});

  if (isLoading) return <LoaderDash/>;

  if (!isAuthenticated) {
    loginWithRedirect({
        ui_locales: 'es'  // fuerza español
    }); // Redirige al login de Auth0
    return <LoaderDash/>;
  }

  return <App />;
};

export default MainRouter;

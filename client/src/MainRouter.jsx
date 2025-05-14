import { useSelector } from 'react-redux';
import App from './components/App/App';
import LoginPage from './components/LoginForm/LoginForm';
import useSocketInit from './hooks/useSocketInit';

const MainRouter = () => {
  useSocketInit();
  const user = useSelector((state) => state.state.user);

  return user ? <App /> : <LoginPage />;
};

export default MainRouter;

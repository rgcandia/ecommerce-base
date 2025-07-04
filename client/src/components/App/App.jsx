import style from './App.module.css';
import Nav from '../Nav/Nav';
import Main from "../Main/Main.jsx";
import { useAuth0 } from '@auth0/auth0-react'; 
import userSocketInit from '../../hooks/useSocketInit';
import useSocketGetUser from '../../hooks/useSocketGetUser';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slice.js';
import LoaderDash from "../LoaderDash/LoaderDash.jsx";

function App() {
  const { user } = useAuth0();
  const dispatch = useDispatch();

  // Iniciar conexión socket
  userSocketInit({ user });

  // Escuchar evento 'getUser' y despachar setUser al store
  useSocketGetUser((userFromServer) => {
    dispatch(setUser(userFromServer));
  });

  return (
    <div className={style.app}>
      <Nav />
      <Main />
    </div>
  );
}

export default App;

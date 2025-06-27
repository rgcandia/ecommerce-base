import style from './App.module.css';
import Nav from '../Nav/Nav';
import Main from "../Main/Main.jsx";
import { useAuth0 } from '@auth0/auth0-react'; 
import userSocketInit from '../../hooks/useSocketInit';
import LoaderDash from "../LoaderDash/LoaderDash.jsx";

function App() {

  const { user } = useAuth0(); // ✅ Primero obtenés el usuario

      userSocketInit({user}); // ✅ Luego lo usás

  return (
    <div className={style.app}>
      <Nav />
      <Main />
    </div>
  );
}

export default App;

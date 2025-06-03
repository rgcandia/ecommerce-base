import style from "./Nav.module.css";
import logo from "../../../public/large_interno_wellspring.png";
import { useAuth0 } from '@auth0/auth0-react';

export default function Nav() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) return null; // o un spinner

  return (
    <div className={style.nav}>
      <img src={logo} alt="Logo Wellspring" className={style.logo} />

      {isAuthenticated && (
        <div className={style.userInfo}>
          <img
            src={user.picture || '/default-user-icon.png'} // reemplaza con ruta a icono default si quieres
            alt="User Avatar"
            className={style.userIcon}
          />
          <span className={style.userEmail}>{user.email}</span>
          <button
            className={style.logoutButton}
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}

import style from "./Nav.module.css";
import { useAuth0 } from '@auth0/auth0-react';

export default function Nav() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) return null; // o un spinner

  return (
    <div className={style.nav}>
      <img src="/large_interno_wellspring.png" alt="Logo Wellspring" className={style.logo} />

      {isAuthenticated && (
        <div className={style.userInfo}>
          <img
            src={user.picture || '/default-user-icon.png'} // reemplaza con ruta a icono default si quieres
            alt="User Avatar"
            className={style.userIcon}
          />
          <span className={style.userName}>{user.name}</span>
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

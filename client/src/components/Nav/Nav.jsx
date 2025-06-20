import style from "./Nav.module.css";
import { useAuth0 } from '@auth0/auth0-react';
import { CiUser } from "react-icons/ci";

export default function Nav() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) return null;

  return (
    <div className={style.nav}>
      <div className={style.logoContainer}>
        <img
          src="/large_interno_wellspring.png"
          alt="Logo Wellspring"
          className={style.logo}
        />
      </div>
    
   
      {isAuthenticated && (
        <div className={style.userInfo}>
          <img
            src={user.picture || <CiUser />}
            alt="User Avatar"
            className={style.userIcon}
          />
          <span className={style.userName}>{user.name}</span>
          <button
            className={style.logoutButton}
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          >
            Salir
          </button>
        </div>
      )}
    </div>
  );
}

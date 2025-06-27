import styles from './AccesoDenegado.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

export default function AccesoDenegado() {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  const handleLogoutAndRedirect = () => {
    // Logout sin returnTo para que no haga redirección externa
    logout();

    // Navegar a '/' después del logout (esto probablemente se ejecuta antes
    // que el logout recargue la página, así que es posible que no funcione
    // 100% fiable, pero sirve para entornos de desarrollo)
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Acceso Denegado.</h1>
        <p>
          Solo se permite iniciar sesión con un correo institucional <strong>@wellspring.edu.ar</strong>
        </p>
        <button onClick={handleLogoutAndRedirect} className={styles.button}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

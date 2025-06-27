import styles from './AccesoDenegado.module.css';
import { useAuth0 } from '@auth0/auth0-react';

export default function AccesoDenegado() {
  const { logout } = useAuth0();

  const handleLogoutAndRedirect = () => {
    logout({
        returnTo: 'https://wellspring-kappa.vercel.app',
    });
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

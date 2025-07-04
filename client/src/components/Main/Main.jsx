import styles from './Main.module.css';
import { useSelector } from 'react-redux';
import LoaderDash from '../LoaderDash/LoaderDash';

function Main() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <LoaderDash />;
  }

  return (
    <div className={styles.userContainer}>
      <h2>Bienvenido, {user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default Main;

import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <h4 className={styles.loadingText}>Cargando...</h4>
    </div>
  );
}

export default Main;

import React, { useState } from 'react';
import styles from './LoginForm.module.css';

const LoginForm = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuario || !contrasena) {
      setError('Por favor completa ambos campos.');
      return;
    }

    onLogin?.({ usuario, contrasena });
    setUsuario('');
    setContrasena('');
    setError('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Inicio de Sesión</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Ingresar</button>
      </form>
    </div>
  );
};

export default LoginForm;

import { useEffect } from 'react';
import conn from '../socket/index';

export default function useSocketInit({user}) {
  useEffect(() => {
    conn.initSocket({user}); // conecta el socket 1 sola vez al arrancar

    return () => {
      conn.socket?.disconnect(); // limpia si se desmonta
    };
  }, []);
}

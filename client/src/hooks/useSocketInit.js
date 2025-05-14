import { useEffect } from 'react';
import conn from '../socket/index';

export default function useSocketInit() {
  useEffect(() => {
    conn.initSocket(); // conecta el socket 1 sola vez al arrancar

    return () => {
      conn.socket?.disconnect(); // limpia si se desmonta
    };
  }, []);
}

// hooks/useSocketInit.js
import { useEffect } from 'react';
import conn from '../socket/index';

export default function useSocketInit() {
  useEffect(() => {
    conn.initSocket(); // tu método que conecta socket

    return () => {
      conn.socket?.disconnect(); // buena práctica: cerrar socket si se desmonta
    };
  }, []);
}

import { useEffect } from 'react';
import conn from '../socket/index';
export default function useSocketGetUser(onUserReceived) {
  useEffect(() => {
    const socket = conn.socket;

    const handleGetUser = (userData) => {
      if (typeof onUserReceived === 'function') {
        onUserReceived(userData); // <- aquí va el usuario que manda el server
      }
    };

    socket.on('getUser', handleGetUser);

    return () => {
      socket.off('getUser', handleGetUser);
    };
  }, [onUserReceived]);
}

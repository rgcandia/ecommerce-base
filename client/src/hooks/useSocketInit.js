import { useEffect } from 'react';
import conn from '../socket/index';

export default function useSocketInit({ user }) {
  useEffect(() => {
    if (user) {
      conn.initSocket({ user });
    }

    return () => {
      conn.socket?.disconnect();
    };
  }, [user]);
}

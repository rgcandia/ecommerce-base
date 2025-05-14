// socket/index.js
import { io } from 'socket.io-client';

let connected = false;

const socket = io('http://localhost:4001', {
  autoConnect: false,
});

const initSocket = () => {
  if (!connected) {
    socket.connect();

    socket.on('connect', () => {
      console.log('✅ Socket conectado con ID:', socket.id);
      connected = true;
    });

    socket.on('disconnect', () => {
      console.log('❌ Socket desconectado');
      connected = false;
    });
  }
};

export default {
  socket,
  initSocket,
};

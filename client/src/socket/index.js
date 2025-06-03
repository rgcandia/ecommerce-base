import { io } from 'socket.io-client';

let connected = false;

// 🧠 Detecta entorno: localhost en desarrollo, VITE_SERVER_SOCKET en producción
const socketURL =import.meta.env.VITE_SERVER_SOCKET;

const socket = io(socketURL, {
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

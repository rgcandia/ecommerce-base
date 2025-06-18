import { io } from 'socket.io-client';

let connected = false;

// 🧠 Usa localhost:4001 en desarrollo, y VITE_SERVER_SOCKET en producción
const socketURL = import.meta.env.MODE === 'development'
  ? 'http://localhost:4001'
  : import.meta.env.VITE_SERVER_SOCKET;

const socket = io(socketURL, {
  autoConnect: false,
});

const initSocket = ({user}) => {
  if (!connected) {
    socket.connect();

    socket.on('connect', () => {
      console.log('✅ Socket conectado con ID:', socket.id);
      connected = true;
console.log("Llega acá")

       socket.emit('user_connected', {
       
        name: user.name,     // Nombre del usuario
        email: user.email,   // Email
        
      });




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

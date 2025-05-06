import { io } from 'socket.io-client';

const socket = io('http://localhost:4002'); // URL de tu servidor

const initSocket = ()=>{
    socket.on('connect', () => {
        console.log('Conectado al servidor con ID:', socket.id);
      });
}

export default {initSocket};

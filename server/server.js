import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*', // Permite conexiones desde cualquier origen
  },
});

io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);


  socket.on('user_connected', (userData) => {
    console.log('👤 Usuario conectado:');
    console.log(`📧 Email: ${userData.email}`);
    console.log(`🧑‍💻 Nombre: ${userData.name}`);
 
  });


  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });

  //




});

export default httpServer;
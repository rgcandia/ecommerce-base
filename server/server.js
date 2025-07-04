import { createServer } from 'http';
import { Server } from 'socket.io';
import hooks from "./hooks/dataHooks.js";
const httpServer = createServer();
const { verificarUsuario ,crearUsuario} = hooks;
const io = new Server(httpServer, {
  cors: {
    origin: '*', // Permite conexiones desde cualquier origen
  },
});

io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);

  socket.on('user_connected', async (userData) => {
    console.log('👤 Usuario conectado:');
    console.log(`📧 Email: ${userData.email}`);
    console.log(`🧑‍💻 Nombre: ${userData.name}`);

    try {
      let user = await verificarUsuario(userData); // Verifica si el usuario está registrado o no.

      if (!user) {
        user = await crearUsuario(userData);
        console.log('🆕 Usuario creado.');
      } else {
        console.log('✅ Usuario existente encontrado.');
      }

      // Enviar usuario al front
      socket.emit('getUser', user.toJSON());

    } catch (error) {
      console.error('❌ Error al procesar el usuario:', error);
      socket.emit('error_user', { message: 'Error al procesar el usuario' });
    }
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});

  //





export default httpServer;
